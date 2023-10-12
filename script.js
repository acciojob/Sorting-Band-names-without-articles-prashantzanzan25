let touristSpots = ['The Virupaksha Temple', 'Victoria Memorial', 'Tajmahal'];

// Function to remove articles ('a', 'an', 'the') and return the cleaned name
function cleanName(name) {
  return name.replace(/^(a|an|the) /i, '');
}

// Sort the array without articles
touristSpots.sort((a, b) => cleanName(a).localeCompare(cleanName(b)));

// Create an HTML list
const ul = document.createElement('ul');
ul.id = 'band';

touristSpots.forEach(bandName => {
  const li = document.createElement('li');
  li.textContent = bandName;
  ul.appendChild(li);
});

// Add the list to the document
document.getElementById('band').replaceWith(ul);
