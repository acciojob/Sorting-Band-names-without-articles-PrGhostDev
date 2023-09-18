	//your code here
	document.addEventListener('DOMContentLoaded', function () {
  const bandNames = ['The Virupaksha Temple', 'Victoria Memorial', 'Tajmahal'];
  const articles = ['a', 'an', 'the'];

  function removeArticles(name) {
    const words = name.split(' ');
    const filteredWords = words.filter(word => !articles.includes(word.toLowerCase()));
    return filteredWords.join(' ');
  }
  const sortedBandNames = bandNames.slice().sort((a, b) => {
    const nameA = removeArticles(a);
    const nameB = removeArticles(b);
    return nameA.localeCompare(nameB);
  });

  const ul = document.getElementById('bands');

  sortedBandNames.forEach(name => {
    const li = document.createElement('li');
    li.textContent = name;
    ul.appendChild(li);
  });
});
