//updates image when slider is moved
function updateImage(val) {
  //This gets the value from the scroll bar and shows it in the textbox
 // document.getElementById("textInput").value = val;
  //This calls the new Mom Image and displays it on the page
  document.getElementById("mombody").src = "./Assets/MomImages/momw" + val + ".gif";
  //This calls the new Fruit Image and displays it on the page
  document.getElementById("fruit").src = "./Assets/FruitImages/PW" + val + ".gif";

  
  //This calls the text for the description of each week
  //after response.text(), the variable 'text' references the text pulled from the external text files
  //This extracts the text about all mom changes from the ./Assets/TextBabyChanges/MomChanges*.txt files
  fetch('./Assets/TextMomChanges/MomChange' + val + '.txt')
  .then(response => response.text())
  .then(text => document.getElementById("description_body_MomChanges").innerHTML=text);
  //This extracts the text about all baby changes from the ./Assets/TextBabyChanges/BabyChanges*.txt files
  fetch('./Assets/TextBabyChanges/BabyChanges' + val + '.txt')
  .then(response => response.text())
  .then(text => document.getElementById("description_body_BabyChanges").innerHTML=text);
  //This extracts the text about all baby changes in size from the ./Assets/TextBabyChanges/BabySize*.txt files
  fetch('./Assets/TextBabySize/BabySize' + val + '.txt')
  .then(response => response.text())
  .then(text => document.getElementById("description_body_BabySizes").innerHTML=text);
  

  
  document.getElementById("dbutton").innerHTML= "Week " + val;


}


