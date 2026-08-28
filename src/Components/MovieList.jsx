import React from "react";

export function MovieList({ movieArray }) {
  //   console.log(movieArray);

  //   const movieList = movieArray
  //     .map(
  //       (movieObject) => `
  //                 <section class="movie-section">
  //                 <div class="wrapper">
  //                   <img
  //                       src="${movieObject.Poster}"
  //                       onerror="this.style.display='none'"
  //                   />
  //                   <div class="movie-data">
  //                     <div class="movie-title">
  //                       <h4>${movieObject.Title || "N/A"}</h4>
  //                       <p class="movie-rating"><i class="fa-solid fa-star"></i> ${movieObject.Ratings[0]?.Value ?? "N/A"}</p>
  //                     </div>
  //                     <div class="movie-meta">
  //                       <p>${movieObject.Runtime || "N/A"}</p>
  //                       <p>${movieObject.Genre || "N/A"}</p>
  //                       <button
  //                         ${isInWatchList(movieObject.imdbID) ? "disabled" : ""}
  //                         id="${movieObject.imdbID}"
  //                         class="add-to-watchlist-btn"
  //                         data-movie-imdbID="${movieObject.imdbID}"
  //                         >

  //                           ${isInWatchList(movieObject.imdbID) ? "In watchlist" : '<i class="fa-solid fa-circle-plus"></i> Watchlist'}
  //                       </button>
  //                     </div>
  //                     <p>
  //                       ${movieObject.Plot || "N/A"}
  //                     </p>
  //                   </div>
  //                 </div>
  //                 <hr />
  //               </section>
  //               `,
  //     )
  //     .join("");

  return <h2>This is a Movie List</h2>;
}
