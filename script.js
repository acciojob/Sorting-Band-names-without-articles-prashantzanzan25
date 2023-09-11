//your code here
let bandNames = ['The Rolling Stones', 'Led Zeppelin', 'The Beatles', 'Pink Floyd', 'Metallica'];
function removeArticles(name) {
    const articleRegex = /^(a|an|the)\s+/i;
    return name.replace(articleRegex, '');
}

bandNames.sort((a, b) => removeArticles(a).localeCompare(removeArticles(b)));


const bandList = document.getElementById('band');


for (const bandName of bandNames) {
    const listItem = document.createElement('li');
    listItem.textContent = bandName;
    bandList.appendChild(listItem);
}

