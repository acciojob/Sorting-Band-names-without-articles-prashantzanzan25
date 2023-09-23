document.addEventListener('DOMContentLoaded', function () {
  const bands = [
    'The Rolling Stones',
    'Led Zeppelin',
    'The Who',
    'Pink Floyd',
    'The Beatles',
    'Radiohead',
  ];

  // Function to remove articles from a band name for sorting
  function removeArticles(name) {
    return name.replace(/^(a |an |the )/i, '').trim();
  }

  // Sort the bands without articles
  const sortedBands = bands.slice().sort((a, b) => {
    const bandA = removeArticles(a);
    const bandB = removeArticles(b);
    return bandA.localeCompare(bandB);
  });

  // Get the ul element by its id
  const ul = document.getElementById('bands');

  // Clear any existing items in the ul
  ul.innerHTML = '';

  // Create and append li elements for each sorted band name
  sortedBands.forEach((band) => {
    const li = document.createElement('li');
    li.textContent = band;
    ul.appendChild(li);
  });
});
