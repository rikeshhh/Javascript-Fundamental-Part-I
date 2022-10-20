/*1::Create an object student which has properties name, sclass and rollno. And write javascript program to
list the properties of a JavaScript object
delete the rollno property from the following object. Also print the object before or after deleting the property.
get the length of a JavaScript object.
*/
let obj = {
  name: "Rikesh",
  sclass: "React",
  rollNo: 1,
};
console.log(obj);
delete obj.rollNo;
console.log("after deleting rollNo");
console.log(obj);
let objectLength = Object.keys(obj).length;
console.log("the length of an object is" + objectLength);

/*2::Write a JavaScript program to get the volume of a Cylinder with four decimal places using object classes.
(Volume of a cylinder : V = πr2h where r is the radius and h is the height of the cylinder.)
*/
const volum = {
  cyclinder: (a, b, c) => {
    a = a.toFixed(4);
    b = b.toFixed(4);
    c = c.toFixed(4);
    const answer = a * b * c;
    return answer.toFixed(4);
  },
};
console.log(
  "the volume of cylinder with four decimal places" +
    " " +
    volum.cyclinder(3.1415926, 10.123245678, 20.84793798375)
);

//3::Write a JavaScript program to create a Clock. Note: The output will come every second.
let value = Math.random();
console.log(value);
//4::Write a JavaScript function to print all the methods in a JavaScript object.
let info = {
  firstName: "Rikesh",
  lastName: "Shrestha",
  id: 1,
  printAll: function () {
    console.log(
      this.firstName + " " + this.lastName + "" + " " + "and id is:" + this.id
    );
  },
};
console.log(info.printAll());
//5::Write a JavaScript function to convert an object into a list of `[key, value]` pairs
let person={
  name:'rikesh'
}
let entry=Object.entries(person);
console.log(entry);

//6::Write a JavaScript function that reverse a number.
function reverseAnum(some)
{
	some = some + "";
	return some.split("").reverse().join("");
}
console.log(Number(reverseAnum(123)));

/*7::Write a JavaScript function that generates all combinations of a string.
Example string : 'dog'
Expected Output : d,do,dog,o,og,g*/
function combination(string) {
  let possibleComb = [];
  for (let i = 0; i < string.length; i++) {
    for (let j = i + 1; j < string.length + 1; j++) {
      possibleComb.push(string.slice(i, j));
    }
  }
  return possibleComb;
}
console.log(combination("dog"));

/*8::Write a JavaScript function that returns a passed string with letters in alphabetical order.
Example string : 'webmaster'
Expected Output : 'abeemrstw'
Assume punctuation and numbers symbols are not included in the passed string.*/
function alphabeticalOrder(letter) {
  const x = letter.split("");
  const y = x.sort().join("");
  return y;
}
console.log(alphabeticalOrder("REACT"));

/*9::Write a JavaScript function that accepts a string as a parameter and find the longest word within the string.
Example string : 'Web Development Tutorial'
Expected Output : 'Development'
Also convert the output word’s each character into uppercase i.e. DEVELOPMENT in above example*/
function longestWord(params) {
  var longestWord = params.split(' ').sort(function(a, b) { return b.length - a.length; });
  return longestWord[0].toUpperCase();
}
console.log(longestWord("this world is okay"));

/*10:: Write a program to Count number of Vowels in String*/
const sting="hello";
  const reg=/[aeiou]/gi;
  const chars= sting.match(reg).length;
  console.log(chars);


/*11::Write a function to generate a random number and find the factorial of the 
random number generated in javascript. */
function random(params) {
  let integer = parseInt(params);
  for (let index = 0; index < integer; index++) {
    integer *= integer;
    return integer;
  }
}
console.log(random(Math.random() * 100));

/*12::Write a JavaScript program to check two given numbers and return true 
if one of the numbers is 50 or if their sum is 50 */
function check(one, two) {
  let sum = one + two;
  if (one == 50 || two == 50 || sum === 50) {
    return true;
  } else {
    return false;
  }
}
console.log(check(25, 25));

/*13::Write a JavaScript program to create a new string with the first 3 characters
 in lower case from a given string. If the string length is less than 3 convert all the characters in upper case.
 */
async function upperLowerCase(some) {
  if (some.length <= 3) {
    return some.toUpperCase();
  } else {
    let z = "the condition doesnot satisfies";
    return z;
  }
}
console.log(upperLowerCase("and"));
/*14::Create a function which takes a word as a parameter. And do:
Create two variables vowels = [] and consonants = [] 
Insert the character into vowels array if it is vowel and consonant if character is consonant
Arrange the elements of array in ascending array
 */
function vowelOrConsonant(params) {
  let vowel=[];
  let consonant=[];
  let reg=["a","e","i","o","u"];
  for (let  i= 0; i < params.length;i++) {
  if (params[i]==reg[i]) {
    vowel.push(params[i]);
   console.log(vowel+" "+" is a vowel");
  }
  else{
    consonant.push(params[i]);
    console.log(consonant+" "+"is not a vowel");
  } 
  }
}
let array=["d","e","f"]
vowelOrConsonant(array.sort());