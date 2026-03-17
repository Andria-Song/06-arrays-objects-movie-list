// Arrays holding movie objects for each genre
const comedyMovies = [
  {
    title: "Deadpool",
    year: 2016,
    description: "A wisecracking anti-hero seeks revenge after a rogue experiment."
  },
  {
    title: "Step Brothers",
    year: 2008,
    description: "Two immature adult stepbrothers are forced to live together."
  },
  {
    title: "Anchorman",
    year: 2004,
    description: "A 1970s news anchor faces a challenge from a new co-worker."
  },
  {
    title: "The Hangover",
    year: 2009,
    description: "Friends retrace a wild night in Las Vegas to find the groom."
  }
];

const actionMovies = [
  {
    title: "Mad Max: Fury Road",
    year: 2015,
    description: "A high-speed chase across a desert wasteland."
  },
  {
    title: "John Wick",
    year: 2014,
    description: "A retired assassin returns to action after a personal loss."
  },
  {
    title: "Die Hard",
    year: 1988,
    description: "An off-duty cop battles terrorists in a skyscraper."
  },
  {
    title: "The Dark Knight",
    year: 2008,
    description: "Batman faces the Joker in a tense battle for Gotham."
  }
];

const dramaMovies = [
  {
    title: "The Shawshank Redemption",
    year: 1994,
    description: "A banker forms friendships while serving a long prison sentence."
  },
  {
    title: "Forrest Gump",
    year: 1994,
    description: "A kind man influences history through extraordinary life events."
  },
  {
    title: "Fight Club",
    year: 1999,
    description: "An insomniac forms an underground club with a charismatic stranger."
  },
  {
    title: "The Godfather",
    year: 1972,
    description: "The story of a powerful crime family and its changing leadership."
  }
];

const sciFiMovies = [
  {
    title: "Inception",
    year: 2010,
    description: "A thief enters dreams to plant an idea in someone's mind."
  },
  {
    title: "The Matrix",
    year: 1999,
    description: "A hacker discovers reality is a simulation."
  },
  {
    title: "Interstellar",
    year: 2014,
    description: "Astronauts travel through a wormhole to save humanity."
  },
  {
    title: "Blade Runner 2049",
    year: 2017,
    description: "A replicant hunter uncovers a secret that could change society."
  }
];

// Get the genre dropdown and movie recommendations elements
const genreDropdown = document.getElementById("genre");
const movieRecommendations = document.getElementById("movieRecommendations");

// Set up event listener for when the user selects a genre
genreDropdown.addEventListener("change", function() {
  // Get the selected genre
  const selectedGenre = genreDropdown.value;

  // Variable to hold the list of movies
  let movieList = [];

  // Assign movies to the movieList based on the selected genre
  if (selectedGenre === "Comedy") {
    movieList = comedyMovies;
  } else if (selectedGenre === "Action") {
    movieList = actionMovies;
  } else if (selectedGenre === "Drama") {
    movieList = dramaMovies;
  } else if (selectedGenre === "Sci-Fi") {
    movieList = sciFiMovies;
  }

  // Build a list of movies using a for loop
  let movieListHtml = "<h2>Enjoy:</h2><ul>";

  // Add each movie's title, year, and description to the list
  for (let i = 0; i < movieList.length; i++) {
    movieListHtml += `<li><strong>${movieList[i].title}</strong> (${movieList[i].year}) - ${movieList[i].description}</li>`;
  }

  movieListHtml += "</ul>";

  // Display the movie list on the page
  movieRecommendations.innerHTML = movieListHtml;
});