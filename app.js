// 1. Declare an empty array using JS literal notation to store
// student names in future.
var studentNames=[];

/* 2. Declare an empty array using JS object notation to store
student names in future.*/

var studentNamesObject={
    name:[]
}

//Declare and initialize a strings array.

var strings=["karachi","islamabad","muree"];
document.write(strings);

//Declare and initialize a numbers array.
var numbers=[1,2,3,4,5];
document.write(numbers);

//Declare and initialize a boolean array.

var boolean=[true,false,true,false];
document.write(boolean);

//Declare and initialize a mixed array.

var mixed=[1,"karachi",true,3.14,null];
document.write(mixed);

//Declare and Initialize an array and store available

document.write("<h1>"+" Qualifications:"+ "</h1>");

var qualification="SSC";
var qualification="HSC";
var qualification="BCS";
var qualification="BS";
var qualification="BCOM";
var qualification="MS";
var qualification="M.Phil";
var qualification="phD";

var qualifications=["SSC"+"</br>"+"HSC"+"</br>"+"BCS"+"</br>"+"BS"+"</br>"+"BCOM"+"</br>"+"MS"+"</br>"+"M.Phil"+"</br>"+"phD"+"</br>"];
document.write(qualifications);

// Write a program to store 3 student names in an array.Take
// another array to store score of these three students.
// Assume that total marks are 500 for each student, display
// the scores & percentages of students like:


var studentNames=["Sophia","ken","luna"];
var numbers=[100,200,300];
var totalnum=500;

document.write("Score of "+ studentNames[0] + " is "+ numbers[0]+" Percentage: "+numbers[0]/totalnum*100+"%" + "</br>")

document.write("Score of "+ studentNames[1] + " is " + numbers[1]+" Percentage: "+numbers[1]/totalnum*100+"%"+ "</br>" )

document.write("Score of "+ studentNames[2]+ " is " + numbers[2] +" Percentage:"+numbers[2]/totalnum*100+"%"+ "</br>" );
 
// 9. Initialize an array with color names. Display the array
// elements in your browser.

// a. Ask the user what color he/she wants to add to the
// beginning & add that color to the beginning of the array.

alert("There are some colours");
var colours=["green","black","white","grey","babypink"];
document.write(colours+"</br>");



var start=prompt("Enter any colour name you want to add in start");
colours.unshift(colours);
document.write(colours+"</br>");

// // b. Ask the user what color he/she wants to add to the end
// // & add that color to the end of the array. Display the
// // updated array in your browser.

var end=prompt("Enter any colour you want to add in end")
colours.push(end);
document.write(end+"</br>");

// // c. Add two more color to the beginning of the array.
// // Display the updated array in your browser.
var firstcolours=prompt("Enter first colour");
var seccolours=prompt("Enter second colour");
firstcolours.unshift();
seccolours.unshift();
document.write(firstcolours+"</br>")
document.write(seccolours+"</br>");

// // d. Delete the first color in the array. Display the updated
// // array in your browser.

colours.shift(0);
document.write(colours);

// // e. Delete the last color in the array. Display the updated
// // array in your browser.

colours.pop();
document.write(colours+"</br>");

// // f. Ask the user at which index he/she wants to add a color
// // & color name. Then add the color to desired
// // position/index. . Display the updated array in your
// // browser.


var index=+prompt("Enter index value");
var  colorname=prompt("Enter colourname");
colour.slice(index,0,colorname+"</br>");
document.write(colours+"</br>");


// // g. Ask the user at which index he/she wants to delete
// // color(s) & how many colors he/she wants to delete. Then remove the same number of color(s) from user-defined
// // position/index. . Display the updated array in your
// // browser.

var delindex=+prompt("Enter index value");
var delnumber=prompt("Enter how many colours you want to delete");
colours.slice(delindex,delnumber);
document.write(colours+"</br>");


// 10. Write a program to store student scores in an array &
// sort the array in ascending order using Array’s sort
// method.

var studentscore=[320,230,480,120];

studentscore.sort(function(a,b){
    return a-b
});
document.write(studentscore);

// 11.Write a program to initialize an array with city names.
// Copy 3 array elements from cities array to selectedCities
// array.
     
var cities=["Karachi","Lahore","Islamabad","Quetta","Peshawar"];
var selectedCities=["Islamabad","Quetta"];

document.write("<h1>"+"List Of Cities"+"</h1>"+"</br>");

document.write(cities+"</br>");
document.write("<h1>"+"Selected Cities:"+"</h1> "+"</br>"+
    selectedCities+"</br>");

//     Write a program to create a single string from the
// below mentioned array:
// var arr = [“This ”, “ is ”, “ my ”, “ cat”];
// (Use array’s join method)

var arr=[" This ",   "is " , "  my ", " cat " + "</br>"];
var result=arr.join("");

document.write(result);

// /13. Create a new array. Store values one by one in such a way
// that you can access the values in the order in which they
// were stored. (FIFO-First In First Out)

var devices=["keyboard","mouse","printer","monitor"];
document.write(devices+"</br>");
document.write("<h1>"+"Out:"+"</h1>"+"</br>");
var out=devices.shift();
document.write(out);
document.write("<h1>"+"Out:"+"</h1>"+"</br>");
var out=devices.shift();
document.write(out);
document.write("<h1>"+"Out:"+"</h1>"+"</br>");
var out=devices.shift();
document.write(out);
document.write("<h1>"+"Out:"+"</h1>"+"</br>");
var out=devices.shift();
document.write(out);


// Create a new array. Store values one by one in such a way

// that you can access the values in reverse order. (Last In-
// First Out)



var devices=["keyboard","mouse","printer","monitor"];
document.write(devices+"</br>");
document.write("<h1>"+"Out:"+"</h1>"+"</br>");
var out=devices.pop();
document.write(out);
document.write("<h1>"+"Out:"+"</h1>"+"</br>");
var out=devices.pop();
document.write(out);
document.write("<h1>"+"Out:"+"</h1>"+"</br>");
var out=devices.pop();
document.write(out);
document.write("<h1>"+"Out:"+"</h1>"+"</br>");
var out=devices.pop();
document.write(out+"</br>");

// 15. Write a program to store phone manufacturers (Apple,
//     Samsung, Motorola, Nokia, Sony & Haier) in an array.
//     Display the following dropdown/select menu in your
//     browser using document.write() method:


var manufactures=["Samsung","Motorola","Nokia","Sony","Haier"];
document.write('<select>');
document.write('<option value= "'+manufactures[0]+'">' + manufactures[0]  +'</option>');
document.write('<option value= " '+manufactures[1]+'">'+ manufactures[1] + '</option>');
document.write('<option value= "'+manufactures[2]+'">'+ manufactures[2] +'</option>');
document.write('<option value= " '+manufactures[3]+'">'+ manufactures[3] +'</option>');
document.write('<option value= "'+manufactures[4]+'">'+ manufactures[4] +'</option>');
document.write('</select>');




alert("There are total 5 colors:")
var colors = ['black ' , ' pink ' , ' blue ',' green ',' purple '];
document.write(colors+"<br>");

var beginning = prompt("enter any color you want to add to the beginning");
colors.unshift("<b>"+beginning+"</b>");
document.write(colors+ "<br>");