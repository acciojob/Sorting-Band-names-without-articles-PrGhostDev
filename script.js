//your code here	
document.addEventListener("DOMContentLoaded", function () {
  const bands = [
    "The Beatles",
    "The Rolling Stones",
    "Led Zeppelin",
    "Aerosmith",
    "Nirvana",
    "Red Hot Chili Peppers",
    "The Who",
  ];

  function stripArticles(bandName) {
	  return bandName.replace(/^(a|an|the)\s+/i, "").trim();
  }

  const sortedBands = bands.slice().sort((a, b) => {
    const bandA = stripArticles(a);
    const bandB = stripArticles(b);
    return bandA.localeCompare(bandB);
  });

  const ulElement = document.getElementById("bands");

  ulElement.innerHTML = "";

  sortedBands.forEach((band) => {
    const liElement = document.createElement("li");
    liElement.textContent = band;
    ulElement.appendChild(liElement);
  });
});
