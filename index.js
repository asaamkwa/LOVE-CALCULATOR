
 var nameOne = prompt("what is your name?");
 var nameTwo = prompt("what is your Boy/Girl friend names?");


var firstLetterName1 = nameOne.slice(0,1);
var firstLetterName2 = nameTwo.slice(0,1);

firstLetterName1 = firstLetterName1.toUpperCase();
firstLetterName2 = firstLetterName2.toUpperCase();

 //get the rest of the letters in names
 var oneAll = nameOne.slice(1,nameOne.length);
 var secondAll = nameTwo.slice(1,nameTwo.length);

 //all lower cases
 oneAll = oneAll.toLowerCase();
 secondAll = secondAll.toLowerCase();

//adding all the names letters together
var fullFirstName = firstLetterName1 + oneAll;
var fullSecondName = firstLetterName2 + secondAll;


 var loverScore =  Math.random()*100;
 loverScore = Math.floor(loverScore)+1; //1-100
 document.querySelector("h1").style="color:blue; text-align:center; font-size:30px;"

 if(loverScore> 70){
     document.querySelector("h1").innerHTML = fullFirstName+ " and "+ fullSecondName+" You love each other so much : " + loverScore+"% "+ "out of 100%";
 }else{
    document.querySelector("h1").innerHTML = fullFirstName+ " and "+ fullSecondName+" Try and make up your love to work?:  " +loverScore+"% "+ "out of 100%";
 }
