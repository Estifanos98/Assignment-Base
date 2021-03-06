const endpoint = 'https://data.princegeorgescountymd.gov/resource/umjn-t2iz.json';
const restaurants = [];  

fetch(endpoint).then(blob => blob.json()).then(data => restaurants.push(...data));
 
function findMatches(wordToMatch, restaurants) {
   return restaurants.filter(establishments => {
       const regex = new RegExp(wordToMatch, 'gi');
       return establishments.name.match(regex) || establishments.category.match(regex)
   });
}