// Receives information from the text input and sends it to the fetchMovieData function to get fetched
document.getElementById('textInputButton').addEventListener('click', function() {
    const movieTitle = document.getElementById('movieInput').value;
    if (movieTitle) {
        fetchMovieData(movieTitle);
    } else {
        alert("Please enter a movie title!"); // If a movie that doesn't exist is entered there will be an alert
    }
});
// Receives the information from the drop down to do the same thing as the textinput
document.getElementById('selectButton').addEventListener('click', function() {
    const selectedMovie = document.getElementById('movieSelect').value;
    if (selectedMovie) {
        fetchMovieData(selectedMovie);
    } else {
        alert("Please select a movie!"); // If a move is not selected from the dropdown there will be an error.
    }
});
// this function grabs the movies info and fetches it to put on the page, also gives me access using my api key
function fetchMovieData(title) {
    const apiKey = '1bb18e70';
    const url = `https://www.omdbapi.com/?apikey=${apiKey}&t=${title}`;
// Uses the fetch api and sends an a request to a url, then processes the response by parsing it as JSON, then moves it onto the displayMovieInfo function.
    fetch(url)
        .then(response => response.json())
        .then(data => {
            displayMovieInfo(data);
        })
        .catch(error => {
            console.log('Error fetching movie data:', error);
            // Handle errors if needed
        });
}
// displays the movies Title, Plot, Actors/Actresses and the poster as well
function displayMovieInfo(data) {
    const movieInfoDiv = document.getElementById('movieInfo');
    movieInfoDiv.innerHTML = `
        <div class="container">
            <div class="movie-title-img">
        <h2>Movie Title: ${data.Title}</h2>
        <img  class="movie-img" src="https://img.omdbapi.com/?apikey=1bb18e70&i=${data.imdbID}" alt="${data.Title} Poster">
            </div>
            <div class="movie-info-output">
        <p><strong>Director:</strong> ${data.Director}</p>
        <p><strong>Plot:</strong> ${data.Plot}</p>
        <p><strong>Actors/Actresses:</strong> ${data.Actors}</p>
        <p><strong>Release Year:</strong> ${data.Year}</p>
            </div>
        </div>
    `;
}

// reloads the page using the reload button
function reset() {
    document.location.reload(true);
}
