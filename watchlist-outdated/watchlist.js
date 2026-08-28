const movieArray = [];

document.addEventListener("click", (e) => {
  if (e.target.dataset.movieImdbid) {
    const saved = JSON.parse(localStorage.getItem("watchlist")) || "[]";
    const updatedMovieArray = saved.filter((movie) => {
      return movie.imdbID !== e.target.dataset.movieImdbid;
    });
    localStorage.setItem("watchlist", JSON.stringify(updatedMovieArray));
    render();
  }
});

function render() {
  const watchlist = JSON.parse(localStorage.getItem("watchlist"));

  if (watchlist.length > 0) {
    document.getElementById("main").innerHTML = watchlist
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
                      <h4>${movieObject.Title}</h4>
                      <p><i class="fa-solid fa-star"></i> ${movieObject.Ratings[0].Value}</p>
                    </div>
                    <div class="movie-meta">
                      <p>${movieObject.Runtime}</p>
                      <p>${movieObject.Genre}</p>
                      <button class="remove-from-watchlist-btn" data-movie-imdbID="${movieObject.imdbID}">
                      <i class="fa-solid fa-circle-plus"></i>
                        Remove
                      </button>
                    </div>
                    <p>
                      ${movieObject.Plot}
                    </p>
                  </div>
                </div>
                <hr />
              </section>
              `,
      )
      .join("");
  } else {
    document.getElementById("main").innerHTML = `
    <div class="wrapper placeholder-container">
        <section class="placeholder">
          <h2>Your watchlist is looking a little empty...</h2>
          <a class="main-anchor" href="../index.html">
            <i class="fa-solid fa-circle-plus"> </i>Let’s add some movies!
          </a>
        </section>
      </div>
    `;
  }
}

render();
