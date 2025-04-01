console.log('%c HI', 'color: firebrick')
document.addEventListener('DOMContentLoaded', function() {
    const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
    const breedUrl = "https://dog.ceo/api/breeds/list/all";
    let allBreeds = [];
    
    // Challenge 1: Fetch and display dog images
    fetch(imgUrl)
      .then(response => response.json())
      .then(data => {
        const dogImageContainer = document.getElementById('dog-image-container');
        data.message.forEach(imageUrl => {
          const img = document.createElement('img');
          img.src = imageUrl;
          img.alt = 'Random dog';
          dogImageContainer.appendChild(img);
        });
      })
      .catch(error => console.error('Error fetching images:', error));
    
    // Challenge 2 & 4: Fetch and store all breeds, then render them
    fetch(breedUrl)
      .then(response => response.json())
      .then(data => {
        allBreeds = Object.keys(data.message);
        renderBreeds(allBreeds);
      })
      .catch(error => console.error('Error fetching breeds:', error));
    
    // Challenge 3: Change font color on click
    document.getElementById('dog-breeds').addEventListener('click', function(event) {
      if (event.target.tagName === 'LI') {
        event.target.style.color = 'blue'; // or any color you prefer
      }
    });
    
    // Challenge 4: Filter breeds by letter
    document.getElementById('breed-dropdown').addEventListener('change', function(event) {
      const selectedLetter = event.target.value;
      if (selectedLetter === '') {
        renderBreeds(allBreeds);
      } else {
        const filteredBreeds = allBreeds.filter(breed => breed.startsWith(selectedLetter));
        renderBreeds(filteredBreeds);
      }
    });
    
    function renderBreeds(breeds) {
      const dogBreedsList = document.getElementById('dog-breeds');
      dogBreedsList.innerHTML = ''; // Clear current list
      
      breeds.forEach(breed => {
        const li = document.createElement('li');
        li.textContent = breed;
        dogBreedsList.appendChild(li);
      });
    }
  });