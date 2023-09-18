//your code here
let bandNames = ['The Rolling Stones', 'Led Zeppelin', 'Pink Floyd', 'The Beatles', 'Aerosmith'];

function sortBandNames(names) {

  const articleRegex = /^(a|an|the)\s+/i;

  const sortedNames = names.map((name) => name.replace(articleRegex, ''));

  sortedNames.sort((a, b) => a.localeCompare(b));

  return sortedNames;
}

const ulElement = document.getElementById('bands');

const sortedBandNames = sortBandNames(bandNames);

sortedBandNames.forEach((name) => {
  const liElement = document.createElement('li');
  liElement.textContent = name;
  ulElement.appendChild(liElement);
});

