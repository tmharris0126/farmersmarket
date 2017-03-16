var ansInput = document.querySelector('#answer');
var domString = '<li>'+ +'</li>';

var marName = results.map(function(name, i, arr){
  return name.marketname;
});
var namEslssten = marName.filter(function(name, i, arr){
  return i < 10;
})
namEslssten.forEach(function(name, i, arr){
  ansInput.innerHTML += '<li>'+ name +'</li>';

})
