document.addEventListener("click", clickHandlers);

// store the link plus the API key in a variable
var API =
  "https://api.nytimes.com/svc/topstories/v2/nyregion.json?api-key=uQG4jhIEHKHKm0qMKGcTHqUgAolr1GM0";

function clickHandlers(event) {
  if (!event.target.matches("button")) return;
  fetch(API)
    .then((response) => response.json())
    .then((data) => showData(data.results));
}

// function showData(stories) {
//   console.log(stories[0]);
//   var looped = "";
//   for (let story of stories) {
//     console.log(story);
//     looped =
//       looped +
//       `
//     <div class="item">
//         <h3>${story.title}</h3>
//         <p>${story.abstract}</p>

//     </div>
//     `;
//   }
//   document.querySelector(".stories").innerHTML = looped;
// }

function showData(stories) {
  var looped = stories.map(
    (result) => `
      <div class="item">
        <h3>${result.title}</h3>
        <p>${result.abstract}</p>
      </div>
    `
  );
  //   .join("");

  document.querySelector(".stories").innerHTML = looped;
}
