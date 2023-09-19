//your code here	
function removeArticles(bandName) {
  return bandName.replace(/^(a |an |the )/i, "").trim();
}

const bandList = document.getElementById("band");

const bandNames = [
  "The Beatles",
  "Aerosmith",
  "Nirvana",
  "Led Zeppelin",
  "The Rolling Stones",
  "Red Hot Chili Peppers",
  "Pink Floyd",
];

const sortedBandNames = bandNames.slice().sort((a, b) => {
  const nameA = removeArticles(a).toLowerCase();
  const nameB = removeArticles(b).toLowerCase();
  return nameA.localeCompare(nameB);
});

sortedBandNames.forEach((bandName) => {
  const li = document.createElement("li");
  li.textContent = bandName;
  bandList.appendChild(li);
});