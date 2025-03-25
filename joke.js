document.addEventListener("DOMContentLoaded", () => {
    const jokeContainer = document.getElementById("joke")
    const title = document.getElementById("title");

    async function fetchJoke(category = "Any") {
        try {
            const response = await fetch(`https://v2.jokeapi.dev/joke/${category}?safe-mode`);
            const data = await response.json();

            if (data.type === "twopart") {
                jokeContainer.textContent = `${data.setup} ... ${data.delivery}`;
            } else {
                jokeContainer.textContent = data.joke;
            }

            if (category === "Any") {
                title.textContent = "Joke Of The Day";
            } else if (category === "Pun") {
                title.textContent = "A Random Pun";
            } else {
                title.textContent = `A Random ${category} Joke`;
            }
        } catch (error) {
            jokeContainer.textContent = "Oops! Something went wrong. Try again.";
        }
    }

    document.getElementById("random").addEventListener("click", () => fetchJoke("Any"));
    document.getElementById("programming").addEventListener("click", () => fetchJoke("Programming"));
    document.getElementById("misc").addEventListener("click", () => fetchJoke("Misc"));
    document.getElementById("pun").addEventListener("click", () => fetchJoke("Pun"));
    document.getElementById("spooky").addEventListener("click", () => fetchJoke("Spooky"));
    document.getElementById("christmas").addEventListener("click", () => fetchJoke("Christmas"));

    fetchJoke(); // Load the first joke on page load
});
