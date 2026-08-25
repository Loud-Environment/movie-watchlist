const searchForm = document.getElementById("search-form");
const searchInput = document.getElementById("search-input");
let movieArray = [];

// Adding a listener to trigger a function when a button nearby a movie is clicked.
// It checks if the clicked item has a dataset called "movieImdbid" (button)
// and then finds a movie with the same imdbID in the movieArray.
// Once found, it adds this movie to a localStorage array.

document.addEventListener("click", (e) => {
  const saved = JSON.parse(localStorage.getItem("watchlist") ?? "[]");

  if (
    e.target.dataset.movieImdbid &&
    !saved.find((movie) => e.target.dataset.movieImdbid === movie.imdbID)
  ) {
    const button = document.getElementById(`${e.target.id}`);
    button.textContent = "Added!";
    setTimeout(() => {
      // button.classList.add("hidden");
      button.textContent = "In watchlist";
      button.disabled = true;
    }, 1500);
    const movieToAdd = movieArray.find(
      (movie) => e.target.dataset.movieImdbid === movie.imdbID,
    );
    saved.push(movieToAdd);
    localStorage.setItem("watchlist", JSON.stringify(saved));
  }
});

searchForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const query = searchInput.value.split(" ").join("+");

  searchInput.value = "";

  fetch(`https://www.omdbapi.com/?s=${query}&apikey=345a7391`)
    .then((res) => res.json())
    .then((searchData) => {
      movieArray = [];
      if (searchData.Response === "True") {
        searchData.Search.forEach((movie) => {
          fetch(`https://www.omdbapi.com/?i=${movie.imdbID}&apikey=345a7391`)
            .then((res) => res.json())
            .then((data) => {
              movieArray.push(data);
              render();
            });
        });
      } else if (searchData.Response === "False") {
        document.getElementById("main").innerHTML = `
        <div class="wrapper placeholder-container">
        <section class="placeholder">
          <h2>
            Unable to find what you’re looking for. Please try another search.
          </h2>
        </section>
      </div>
    `;
      }
    });
});

function isInWatchList(movieID) {
  const saved = JSON.parse(localStorage.getItem("watchlist") ?? "[]");
  return saved.some((movie) => movieID === movie.imdbID);
}

function render() {
  document.getElementById("main").innerHTML = movieArray
    .map(
      (movieObject) => `
                <section class="movie-section">
                <div class="wrapper">
                  <img 
                      src="${movieObject.Poster}" 
                      onerror="this.style.display='none'"
                  />
                  <div class="movie-data">
                    <div class="movie-title">
                      <h4>${movieObject.Title || "N/A"}</h4>
                      <p class="movie-rating"><i class="fa-solid fa-star"></i> ${movieObject.Ratings[0]?.Value ?? "N/A"}</p> 
                    </div>
                    <div class="movie-meta">
                      <p>${movieObject.Runtime || "N/A"}</p>
                      <p>${movieObject.Genre || "N/A"}</p>
                      <button 
                        ${isInWatchList(movieObject.imdbID) ? "disabled" : ""}
                        id="${movieObject.imdbID}" 
                        class="add-to-watchlist-btn" 
                        data-movie-imdbID="${movieObject.imdbID}"
                        >
                          
                          ${isInWatchList(movieObject.imdbID) ? "In watchlist" : '<i class="fa-solid fa-circle-plus"></i> Watchlist'}
                      </button>
                    </div>
                    <p>
                      ${movieObject.Plot || "N/A"}
                    </p>
                  </div>
                </div>
                <hr />
              </section>
              `,
    )
    .join("");
}
