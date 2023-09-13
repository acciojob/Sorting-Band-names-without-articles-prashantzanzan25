    let bandNames = ['The Rolling Stones', 'Led Zeppelin', 'The Beatles', 'Aerosmith', 'The Who'];

    // Function to sort band names without articles
    function sortBandNamesWithoutArticles(names) {
      return names.sort((a, b) => {
        const articles = ['a', 'an', 'the'];
        const getNameWithoutArticle = (name) => {
          for (const article of articles) {
            if (name.toLowerCase().startsWith(article + ' ')) {
              return name.slice(article.length + 1); // Add 1 to account for the space after the article
            }
          }
          return name;
        };
        return getNameWithoutArticle(a).localeCompare(getNameWithoutArticle(b));
      });
    }

    // Sort the band names without articles
    bandNames = sortBandNamesWithoutArticles(bandNames);

    // Create the ul element with id 'bands'
    const ul = document.getElementById('bands');

    // Loop through the sorted band names and create li elements
    bandNames.forEach((name) => {
      const li = document.createElement('li');
      li.textContent = name;
      ul.appendChild(li);
    });