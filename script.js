//updates image when slider is moved
function updateImage(val) {
  //This gets the value from the scroll bar and shows it in the textbox
  document.getElementById("textInput").value = val;
  //This calls the new Mom Image and displays it on the page
  document.getElementById("mombody").src = "./Assets/MomImages/momw" + val + ".gif";
  //This calls the new Fruit Image and displays it on the page
  document.getElementById("fruit").src = "./Assets/FruitImages/PW" + val + ".gif";

  
  //This calls the text for the description of each week
  //after response.text(), the variable 'text' references the text pulled from the external text files
  fetch('./Assets/TextBabyChanges/BabyChanges' + val + '.txt')
  .then(response => response.text())
  .then(text => document.getElementById("sampletext").innerHTML=text)

}


