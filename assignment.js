"use strict";
//Q1
//Install Node.js, TypeScript and VS Code on your computer.
//Q2
//Personal Message: Store a person’s name in a variable, and print a message to that person. Your message should be simple, such as, “Hello Eric, would you like to learn some Python today?”
// var personName:string="Tayyab";
// console.log(`Hello ${personName}, would you like to learn some Type Script today?`);
//Q3
//Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.
var personName = "tayyab_shokat";
console.log(personName.split('_'));
console.log(`Lower case name ${personName.toLowerCase()} \n Upper case name ${personName.toUpperCase()} \n
${personName.split('_')[0].charAt(0).toUpperCase() + personName.split('_')[0].slice(1, 6) + ' ' + personName.split('_')[1].charAt(0).toUpperCase() + personName.split('_')[1].slice(1, 6)}


`);
//Q4
// Famous Quote: Find a quote from a famous person you admire. Print the quote and the name of its author. Your output should look something like the following, including the quotation marks:
// var author:string="Albert Einstein";
// var quote:string="A person who never made a mistake never tried anything new.";
// console.log(`${author} once said, "${quote}"`);
//Q5
//Famous Quote 2: Repeat Exercise 4, but this time store the famous person’s name in a variable called famous_person. Then compose your message and store it in a new variable called message. Print your message.
// var author:string="Albert Einstein";
// var quote:string="A person who never made a mistake never tried anything new.";
// console.log(`${author} once said, "${quote}"`);
//Q6
// var personName:string="Tayyab";
// console.log(`\t${personName}\t`);
//Q7
// Number Eight: Write addition, subtraction, multiplication, and division operations that each result in the number 8. Be sure to enclose your operations in print statements to see the results.
// console.log(`Sum is ${5+3}\nSubtract is ${10-2}\nMultiplication is ${4*2}\nDivision is ${16/2}`);
//Q8
// You should create four lines that look like this:
// console.log(5 + 3)
// Your output should simply be four lines with the number 8 appearing once on each line.
// console.log(`Sum is ${5+3}\nSubtract is ${10-2}\nMultiplication is ${4*2}\nDivision is ${16/2}`);
//Q9
//Favorite Number: Store your favorite number in a variable. Then, using that variable, create a message that reveals your favorite number. Print that message.
// var favNum:number=786;
// console.log(`Fav Number is ${favNum}`);
//Q10 Adding Comments
//Q11
// Names: Store the names of a few of your friends in a array called names. Print each person’s name by accessing each element in the list, one at a time.
// var names:string[]=["Zain","Sami","Usama","Zeeshan","Ali"];
// console.log(names[0]);
// console.log(names[1]);
// console.log(names[2]);
// console.log(names[3]);
// console.log(names[4]);
//Q12
//Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s name, print a message to them. The text of each message should be the same, but each message should be personalized with the person’s name.
// var names:string[]=["Zain","Sami","Usama","Zeeshan","Ali"];
// for(var i:number=0;i<names.length;i++)
// {
//     console.log(`${names[i]} is my best friend`);
// }
//Q13
//Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list that stores several examples. Use your list to print a series of statements about these items, such as “I would like to own a Honda motorcycle.”
// var transportation:string[]=["Honda car","Honda Bike","Toyota Car"];
// for(var i:number=0;i<transportation.length;i++)
// {
//     console.log(`I would like to own a ${transportation[i]}`);
// }
//Q14
//Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you’d like to invite to dinner. Then use your list to print a message to each person, inviting them to dinner.
// var guestList:string[]=["Zain","Sami","Shoukat Ali"];
// for(var i:number=0;i<guestList.length;i++)
// {
//     console.log(`${guestList[i]}, You are inviting for a dinner`);
// }
//Q15
// Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.
// • Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.
// • Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.
// • Print a second set of invitation messages, one for each person who is still in your list.
//Method1
// var guestList:string[]=["Zain","Sami","Shoukat Ali"];
// for(var i:number=0;i<guestList.length;i++)
// {
//     console.log(`${guestList[i]}, You are inviting for a dinner`);
// }
// console.log(`${guestList[2]} is not coming for dinner`);
// guestList.splice(1,1);
// console.log(guestList+" After deleted not arriving guest");
// guestList.push("Usama","Ali");
// console.log(`New Guest List ${guestList}`);
//Method 2
// Create a list of people you'd like to invite
// type guestListType = { name?: string, occupation?: string, deceased?: boolean }
// const guestList: guestListType[] = [
//     {
//         name: "Albert Einstein",
//         occupation: "Physicist",
//         deceased: true
//     },
//     {
//         name: "Elon Musk",
//         occupation: "Entrepreneur",
//         deceased: false
//     },
//     {
//         name: "Marie Curie",
//         occupation: "Physicist and Chemist",
//         deceased: true
//     }
// ];
// // Function to generate an invitation message
// const generateInvitationMessage = (person: any) => {
//     if (person.deceased) {
//         return `Dear ${person.name},\n\nWe would like to honor your legacy by inviting you to a virtual dinner in your memory. Your contributions to science continue to inspire generations.\n\nSincerely,\n[Your Name]`;
//     } else {
//         return `Dear ${person.name},\n\nWe would be delighted to have you as our guest for dinner. Your innovative spirit and accomplishments have had a profound impact on the world, and we'd love to hear your thoughts.\n\nSincerely,\n[Your Name]`;
//     }
// }
// // Print the name of the guest who can't make it
// const guestWhoCantMakeIt = "Marie Curie";
// console.log(`${guestWhoCantMakeIt} can't make it to the dinner.`);
// // Modify the list by replacing the guest who can't make it with a new guest
// const newGuest: guestListType = {
//     name: "Nikola Tesla",
//     occupation: "Inventor and Engineer",
//     deceased: true
// };
// const indexOfGuestWhoCantMakeIt = guestList.findIndex(guest => guest.name === guestWhoCantMakeIt);
// if (indexOfGuestWhoCantMakeIt !== -1) {
//     guestList.splice(indexOfGuestWhoCantMakeIt, 1, newGuest);
// }
// // Print a second set of invitation messages for the updated list
// for (const guest of guestList) {
//     const invitationMessage = generateInvitationMessage(guest);
//     console.log(invitationMessage);
//     console.log("===============================================");
// }
//More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
// • Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.
// • Add one new guest to the beginning of your array.
// • Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list.
// type guestListType = { name?: string, occupation?: string, deceased?: boolean }
// const guestList: guestListType[] = [
//     {
//         name: "Albert Einstein",
//         occupation: "Physicist",
//         deceased: true
//     },
//     {
//         name: "Elon Musk",
//         occupation: "Entrepreneur",
//         deceased: false
//     },
//     {
//         name: "Marie Curie",
//         occupation: "Physicist and Chemist",
//         deceased: true
//     }
// ];
// guestList.unshift({
//     name: "Nikola Tesla",
//     occupation: "Inventor and Engineer",
//     deceased: false
// });
// guestList.push({
//     name: "Bill Gates",
//     occupation: "Microsoft Head",
//     deceased: false
// });
// guestList.splice(2, 0, {
//     name: "Imram khan",
//     occupation: "Crickter pakistan",
//     deceased: false
// })
// console.log(guestList);
// // Function to generate an invitation message
// const generateInvitationMessage = (person: any) => {
//     if (person.deceased) {
//         return `Dear ${person.name},\n\nWe would like to honor your legacy by inviting you to a virtual dinner in your memory. Your contributions to science continue to inspire generations.\n\nSincerely,\n[Your Name]`;
//     } else {
//         return `Dear ${person.name},\n\nWe would be delighted to have you as our guest for dinner. Your innovative spirit and accomplishments have had a profound impact on the world, and we'd love to hear your thoughts.\n\nSincerely,\n[Your Name]`;
//     }
// }
// // // Print a second set of invitation messages for the updated list
// for (const guest of guestList) {
//     const invitationMessage = generateInvitationMessage(guest);
//     console.log(invitationMessage);
//     console.log("===============================================");
// }
//Q17
// Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
// • Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.
// • Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.
// • Print a message to each of the two people still on your list, letting them know they’re still invited.
// • Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.
// type guestListType = { name?: string, occupation?: string, deceased?: boolean }
// const guestList: guestListType[] = [
//     {
//         name: "Albert Einstein",
//         occupation: "Physicist",
//         deceased: true
//     },
//     {
//         name: "Elon Musk",
//         occupation: "Entrepreneur",
//         deceased: false
//     },
//     {
//         name: "Marie Curie",
//         occupation: "Physicist and Chemist",
//         deceased: true
//     },
//     {
//         name: "Nikola Tesla",
//         occupation: "Inventor and Engineer",
//         deceased: false
//     },
//     {
//         name: "Bill Gates",
//         occupation: "Microsoft Head",
//         deceased: false
//     },
//     {
//         name: "Imram khan",
//         occupation: "Crickter pakistan",
//         deceased: false
//     }
// ];
// console.log(`you can invite only two people for dinner`);
// const delPerson= guestList?.pop();    
// console.log(`We’re sorry we can’t invite you to dinner ${delPerson}`);
// const delPerson1= guestList?.pop();    
// console.log(`We’re sorry we can’t invite you to dinner ${delPerson1}`);
// const delPerson2= guestList?.pop();    
// console.log(`We’re sorry we can’t invite you to dinner ${delPerson2}`);
// const delPerson3= guestList?.pop();    
// console.log(`We’re sorry we can’t invite you to dinner ${delPerson3}`);
// const delPerson4= guestList?.pop();    
// console.log(`We’re sorry we can’t invite you to dinner ${delPerson4}`);
// const delPerson5= guestList?.pop();    
// console.log(`We’re sorry we can’t invite you to dinner ${delPerson5}`);
// console.log(guestList);
//18
// Seeing the World: Think of at least five places in the world you’d like to visit.
// • Store the locations in a array. Make sure the array is not in alphabetical order.
// • Print your array in its original order.
// • Print your array in alphabetical order without modifying the actual list.
// • Show that your array is still in its original order by printing it.
// • Print your array in reverse alphabetical order without changing the order of the original list.
// • Show that your array is still in its original order by printing it again.
// • Reverse the order of your list. Print the array to show that its order has changed.
// • Reverse the order of your list again. Print the list to show it’s back to its original order.
// • Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
// • Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.
// var places:string[]=["Paris","Rome","Switzerland","London","Singapore"];
// console.log(places);
// //alphabetical order
// console.log([...places].sort());
// //original
// console.log(places);
// //reverse order
// console.log([...places].sort().reverse());
// //original
// console.log(places);
// //Reverse the order of your list. Print the array to show that its order has changed.
// console.log(places.reverse());
// //original
// console.log(places);
// //Reverse the order of your list again. Print the list to show it’s back to its original order.
// console.log(places.reverse());
// //original
// console.log(places);
// //Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
// console.log(places.sort());
// //Sorted order
// console.log(places);
// //• Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.
// console.log(places.reverse());
// //Reverse Order
// console.log(places);
//Dinner Guests: Working with one of the programs from Exercises 14 through 18, print a message indicating the number of people you are inviting to dinner.
// type guestListType = { name?: string, occupation?: string, deceased?: boolean }
// const guestList: guestListType[] = [
//     {
//         name: "Albert Einstein",
//         occupation: "Physicist",
//         deceased: true
//     },
//     {
//         name: "Elon Musk",
//         occupation: "Entrepreneur",
//         deceased: false
//     },
//     {
//         name: "Marie Curie",
//         occupation: "Physicist and Chemist",
//         deceased: true
//     },
//     {
//         name: "Nikola Tesla",
//         occupation: "Inventor and Engineer",
//         deceased: false
//     },
//     {
//         name: "Bill Gates",
//         occupation: "Microsoft Head",
//         deceased: false
//     },
//     {
//         name: "Imram khan",
//         occupation: "Crickter pakistan",
//         deceased: false
//     }
// ];
// var totalPErson=guestList.length;
// console.log(`Total values in array is ${totalPErson}`);
//Q20
//Think of something you could store in a array. For example, you could make a list of mountains, rivers, countries, cities, languages, or anything else you’d like. Write a program that creates a list containing these items.
// Create an array of famous rivers
// const rivers = [
//   "Nile River",
//   "Amazon River",
//   "Mississippi River",
//   "Yangtze River",
//   "Danube River",
//   "Ganges River",
//   "Colorado River",
//   "Rhine River",
//   "Mekong River",
//   "Volga River"
// ];
// // Print the list of rivers
// console.log("List of Famous Rivers:");
// for (const river of rivers) {
//   console.log(river);
// }
//Q21
// Define a TypeScript interface to represent a landmark
// interface Landmark {
//   name: string;
//   location: string;
//   description: string;
// }
// // Create an array of landmark objects
// const landmarks: Landmark[] = [
//   {
//     name: "Eiffel Tower",
//     location: "Paris, France",
//     description: "The iconic wrought-iron tower is one of the most recognized landmarks in the world."
//   },
//   {
//     name: "Great Wall of China",
//     location: "China",
//     description: "A series of fortifications made of stone, brick, tamped earth, and other materials, built across northern China to protect against invasions."
//   },
//   {
//     name: "Statue of Liberty",
//     location: "New York City, USA",
//     description: "A symbol of freedom and democracy, this colossal neoclassical sculpture stands on Liberty Island in New York Harbor."
//   },
//   {
//     name: "Machu Picchu",
//     location: "Cusco Region, Peru",
//     description: "An ancient Inca citadel situated on a mountain ridge in the Andes, known for its stunning architecture and scenic views."
//   },
//   {
//     name: "Taj Mahal",
//     location: "Agra, India",
//     description: "A white marble mausoleum built by Emperor Shah Jahan in memory of his wife Mumtaz Mahal, considered one of the most beautiful buildings in the world."
//   }
// ];
// // Print information about each landmark
// console.log("Famous Landmarks Around the World:");
// landmarks.forEach((landmark) => {
//   console.log(`Name: ${landmark.name}`);
//   console.log(`Location: ${landmark.location}`);
//   console.log(`Description: ${landmark.description}`);
//   console.log("------------------------------------");
// });
//22
//Intentional Error: If you haven’t received an array index error in one of your programs yet, try to make one happen. Change an index in one of your programs to produce an index error. Make sure you correct the error before closing the program.
//Q23
// Conditional Tests: Write a series of conditional tests. Print a statement describing each test and your prediction for the results of each test. Your code should look something like this:
// let car = 'subaru';
// console.log("Is car == 'subaru'? I predict True.")
// console.log(car == 'subaru')
// • Look closely at your results, and make sure you understand why each line evaluates to True or False.
//Create at least 10 tests. Have at least 5 tests evaluate to True and another 5 tests evaluate to False.
// let car = 'subaru';
// console.log("Is car == 'subaru'? I predict True.");
// console.log(car == 'subaru');
// console.log(car == 'subar');
//Q24
// More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
// • Tests for equality and inequality with strings
// • Tests using the lower case function
// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
// • Tests using "and" and "or" operators
// • Test whether an item is in a array
// • Test whether an item is not in a array
// // Tests for equality and inequality with strings
// const string1:string = "apple";
// const string2:string = "banana";
// console.log(string1 === string2); // False
// console.log(string1 !== string2); // True
// // Tests using the lowercase function
// const text:string = "Hello World";
// const lowercaseText = text.toLowerCase();
// console.log(lowercaseText === "hello world"); // True
// console.log(lowercaseText !== "Hello World"); // False
// // Numerical tests
// const x:number = 5;
// const y:number = 10;
// console.log(x === y); // False
// console.log(x !== y); // True
// console.log(x > y);  // False
// console.log(x < y);  // True
// console.log(x >= y); // False
// console.log(x <= y); // True
// // Tests using "and" and "or" operators
// const isTrue = true;
// const isFalse = false;
// console.log(isTrue && isFalse); // False (Logical AND)
// console.log(isTrue || isFalse); // True  (Logical OR)
// // Test whether an item is in an array
// const fruits = ["apple", "banana", "cherry", "date"];
// const fruitToCheck = "banana";
// console.log(fruits.includes(fruitToCheck)); // True
// // Test whether an item is not in an array
// const vegetables = ["carrot", "broccoli", "spinach", "zucchini"];
// const vegetableToCheck = "tomato";
// console.log(!vegetables.includes(vegetableToCheck)); // True
//Q25
// Alien Colors #1: Imagine an alien was just shot down in a game. Create a variable called alien_color and assign it a value of 'green', 'yellow', or 'red'.
// • Write an if statement to test whether the alien’s color is green. If it is, print a message that the player just earned 5 points.
// • Write one version of this program that passes the if test and another that fails. (The version that fails will have no output.)
// const alien_color:string = 'green';
// if (alien_color === 'green') {
//   console.log("Congratulations! You just earned 5 points.");
// }
// const alien_color2:string = 'red';
// if (alien_color2 === 'green') {
//   console.log("Congratulations! You just earned 5 points.");
// }
//Q26
// Alien Colors #2: Choose a color for an alien as you did in Exercise 25, and write an if-else chain.
// • If the alien’s color is green, print a statement that the player just earned 5 points for shooting the alien.
// • If the alien’s color isn’t green, print a statement that the player just earned 10 points.
// • Write one version of this program that runs the if block and another that runs the else block.
// const alien_color:string = 'green';
// if (alien_color === 'green') 
// {
//     console.log("Congratulations! You just earned 5 points.");
// }
// else
// {
//     console.log("Congratulations! You just earned 10 points.");
// }
// const alien_color2:string = 'red';
// if (alien_color2 === 'green') 
// {  
//     console.log("Congratulations! You just earned 5 points.");
// }
// else
// {
//     console.log("Congratulations! You just earned 10 points.");
// }
//Q27
// Alien Colors #3: Turn your if-else chain from Exercise 5-4 into an if-else chain.
// • If the alien is green, print a message that the player earned 5 points.
// • If the alien is yellow, print a message that the player earned 10 points.
// • If the alien is red, print a message that the player earned 15 points.
// const alien_color2:string = 'red';
// if (alien_color2 === 'green') 
// {  
//     console.log("Congratulations! You just earned 5 points.");
// }
// else if(alien_color2==="yellow")
// {
//     console.log("Congratulations! You just earned 10 points.");
// }
// else
// {
//     console.log("Congratulations! You just earned 15 points.");
// }
//Q28
// Stages of Life: Write an if-else chain that determines a person’s stage of life. Set a value for the variable age, and then:
// • If the person is less than 2 years old, print a message that the person is a baby.
// • If the person is at least 2 years old but less than 4, print a message that the person is a toddler.
// • If the person is at least 4 years old but less than 13, print a message that the person is a kid.
// • If the person is at least 13 years old but less than 20, print a message that the person is a teenager.
// • If the person is at least 20 years old but less than 65, print a message that the person is an adult.
// • If the person is age 65 or older, print a message that the person is an elder.
// // Set the age of the person
// const age:number = 30;
// // Check the person's stage of life based on age
// if (age < 2) {
//   console.log("The person is a baby.");
// } else if (age >= 2 && age < 4) {
//   console.log("The person is a toddler.");
// } else if (age >= 4 && age < 13) {
//   console.log("The person is a kid.");
// } else if (age >= 13 && age < 20) {
//   console.log("The person is a teenager.");
// } else if (age >= 20 && age < 65) {
//   console.log("The person is an adult.");
// } else {
//   console.log("The person is an elder.");
// }
//Q29
// Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent if statements that check for certain fruits in your array.
// • Make a array of your three favorite fruits and call it favorite_fruits.
// • Write five if statements. Each should check whether a certain kind of fruit is in your array. If the fruit is in your array, the if block should print a statement, such as You really like bananas!
// Create an array of your three favorite fruits
// const favorite_fruits:string[] = ["banana", "strawberry", "mango"];
// // Check if specific fruits are in your favorite_fruits array
// if (favorite_fruits.includes("banana")) {
//   console.log("You really like bananas!");
// }
// if (favorite_fruits.includes("strawberry")) {
//   console.log("You really like strawberries!");
// }
// if (favorite_fruits.includes("mango")) {
//   console.log("You really like mangoes!");
// }
// // Additional checks for other fruits
// if (favorite_fruits.includes("apple")) {
//   console.log("You really like apples!");
// }
// if (favorite_fruits.includes("orange")) {
//   console.log("You really like oranges!");
// }
//Q30
// Hello Admin: Make a array of five or more usernames, including the name 'admin'. Imagine you are writing code that will print a greeting to each user after they log in to a website. Loop through the array, and print a greeting to each user:
// • If the username is 'admin', print a special greeting, such as Hello admin, would you like to see a status report?
// • Otherwise, print a generic greeting, such as Hello Eric, thank you for logging in again.
// var users:string[]=["admin","shoukat","tayyab","zain","sami"];
// for(const user of users)
// {
//     if(user==="admin")
//     {
//         console.log(`Hello admin, would you like to see a status report?`);
//     }
//     else
//     {
//         console.log(`Hello ${user}, thank you for logging in again.`); 
//     }
// }
//Q32
// Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.
// • Make a list of five or more usernames called current_users.
// • Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in the current_users list.
// • Loop through the new_users list to see if each new username has already been used. If it has, print a message that the person will need to enter a new username. If a username has not been used, print a message saying that the username is available.
// • Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted.
// // Make a list of current users (case insensitive)
// const current_users:string[] = ["Alice", "Bob", "Charlie", "dave123", "Eve"];
// // Make a list of new users (including some that are already in current_users, with different cases)
// const new_users:string[] = ["Bob", "frankie456", "DavE123", "Grace", "Helen"];
// // Function to check if a username is already in use (case insensitive)
// const isUsernameTaken=(username:any)=> {
// const lowercaseUsername = username.toLowerCase();
// return current_users.some(user => user.toLowerCase() === lowercaseUsername);
// }
// // Loop through new_users to check for username availability
// for (const new_user of new_users) {
// if (isUsernameTaken(new_user)) {
//     console.log(`Sorry, the username "${new_user}" is already taken. Please choose a different username.`);
// } else {
//     console.log(`Congratulations, the username "${new_user}" is available.`);
// }
// }
//Q33
// Ordinal Numbers: Ordinal numbers indicate their position in a array, such as 1st or 2nd. Most ordinal numbers end in th, except 1, 2, and 3.
// • Store the numbers 1 through 9 in a array.
// • Loop through the array.
// • Use an if-else chain inside the loop to print the proper ordinal ending for each number. Your output should read "1st 2nd 3rd 4th 5th 6th 7th 8th 9th", and each result should be on a separate line.
// Store the numbers 1 through 9 in an array
// const numbers:number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// // Loop through the array
// for (const number of numbers) {
// let ordinal;
//   // Use an if-else chain to determine the proper ordinal ending
// if (number === 1) {
//     ordinal = "st";
// } else if (number === 2) {
//     ordinal = "nd";
// } else if (number === 3) {
//     ordinal = "rd";
// } else {
//     ordinal = "th";
// }
//   // Print the number with its ordinal ending
// console.log(`${number}${ordinal}`);
// }
//Q34
// Pizzas: Think of at least three kinds of your favorite pizza. Store these pizza names in a array, and then use a for loop to print the name of each pizza.
// • Modify your for loop to print a sentence using the name of the pizza instead of printing just the name of the pizza. For each pizza you should have one line of output containing a simple statement like I like pepperoni pizza.
// • Add a line at the end of your program, outside the for loop, that states how much you like pizza. The output should consist of three or more lines about the kinds of pizza you like and then an additional sentence, such as I really love pizza!
// // Create an array of your favorite pizza names
// const favoritePizzas:string[] = ["Pepperoni", "Margherita", "Hawaiian"];
// // Print the names of each pizza using a for loop
// console.log("Favorite Pizzas:");
// for (const pizza of favoritePizzas) {
//   console.log(pizza);
// }
// // Modify the for loop to print sentences about each pizza
// console.log("\nPizza Preferences:");
// for (const pizza of favoritePizzas) {
//   console.log(`I like ${pizza} pizza.`);
// }
// // Add a line outside the loop to express your love for pizza
// console.log("\nI really love pizza!");
//Q35
// Animals: Think of at least three different animals that have a common characteristic. Store the names of these animals in a list, and then use a for loop to print out the name of each animal. • Modify your program to print a statement about each animal, such as A dog would make a great pet. • Add a line at the end of your program stating what these animals have in common. You could print a sentence such as Any of these animals would make a great pet!
// Create an array of animals with a common characteristic
// const animals = ["Dog", "Cat", "Rabbit"];
// // Print the names of each animal using a for loop
// console.log("List of Animals:");
// for (const animal of animals) {
//   console.log(animal);
// }
// // Modify the for loop to print statements about each animal
// console.log("\nAnimal Statements:");
// for (const animal of animals) {
//   console.log(`A ${animal.toLowerCase()} would make a great pet.`);
// }
// // Add a line at the end to state what these animals have in common
// console.log("\nAny of these animals would make a great pet!");
//Q36
// T-Shirt: Write a function called make_shirt() that accepts a size and the text of a message that should be printed on the shirt. The function should print a sentence summarizing the size of the shirt and the message printed on it. Call the function.
// var make_shirt=(size:string,text:string)=>{
//     console.log(`Size of shirt is ${size} and text on shirt is ${text}`);
// }
// make_shirt("Large","tayyab");
//Q37
//Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript. Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.
// var make_shirt=(size:string,text:string)=>{
//     var s=size.toLowerCase();
//     if(s==="large")
//     console.log(`I love TypeScript. Make a large shirt `);
//     else if(s==="medium")
//     console.log(`Medium`);
//     else
//     console.log(`Small`);
// }
// make_shirt("Large","tayyab");
// make_shirt("Medium","Java Script");
// make_shirt("Small","Java Script");
//Q38
// Cities: Write a function called describe_city() that accepts the name of a city and its country. The function should print a simple sentence, such as Karachi is in Pakistan. Give the parameter for the country a default value. Call your function for three different cities, at least one of which is not in the default country.
// var describe_city=(city:string, country = "Unknown")=>{
//     console.log(`${city} is in ${country}.`);
//   }
//   // Call the function for three different cities
//   describe_city("Karachi", "Pakistan");
//   describe_city("Paris", "France");
//   describe_city("New York"); // Country defaults to "Unknown"
//Q39
// City Names: Write a function called city_country() that takes in the name of a city and its country. The function should return a string formatted like this:
// "Lahore, Pakistan"
// Call your function with at least three city-country pairs, and print the value that’s returned.
// var describe_city=(city:string, country = "Unknown")=>{
//     return `"${city} ${country}"`    
// }
//   // Call the function for three different cities
// console.log(describe_city("Karachi", "Pakistan"));
// console.log(describe_city("Paris", "France"));
// console.log(describe_city("New York"));
//Q40
// Album: Write a function called make_album() that builds a Object describing a music album. The function should take in an artist name and an album title, and it should return a Object containing these two pieces of information. Use the function to make three dictionaries representing different albums. Print each return value to show that Objects are storing the album information correctly. Add an optional parameter to make_album() that allows you to store the number of tracks on an album. If the calling line includes a value for the number of tracks, add that value to the album’s Object. Make at least one new function call that includes the number of tracks on an album.
// Define the make_album function
// function make_album(artist:string, title:string, tracks = 0) {
//     const album = {
//       artist: artist,
//       title: title,
//       tracks:tracks
//     };
//     if (tracks > 0) {
//       album.tracks = tracks;
//     }
//     return album;
//   }
//   // Create dictionaries representing different albums
//   const album1 = make_album("Artist1", "Album Title 1");
//   const album2 = make_album("Artist2", "Album Title 2", 12); // Includes number of tracks
//   const album3 = make_album("Artist3", "Album Title 3");
//   // Print each return value to show album information
//   console.log(album1);
//   console.log(album2);
//   console.log(album3);
//Q41
//Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array.
// var show_magicians=(magician:string[])=>{
//     console.log(`Magician names are ${magician}`);
// }
// var arr:string[]=["tayyab","zain","sami"]
// show_magicians(arr);
//Q42
// Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified.
// var show_magicians=(magician:string[])=>{
//     console.log(`Magician names are ${magician}`);
// }
// // Define the make_great function
// var make_great=(magicians:any)=> {
//     for (let i = 0; i < magicians.length; i++) {
//     magicians[i] = magicians[i] + " the Great";
//     console.log(magicians[i]);
//     }
// }
// var arr:string[]=["tayyab","zain","sami"]
// show_magicians(arr);
// make_great(arr);
//Q43
//Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.
// Define the show_magicians function
// function show_magicians(magicians:any) {
//     for (const magician of magicians) {
//     console.log(magician);
//     }
// }
//   // Define the make_great function
// function make_great(magicians:any) {
//     const modifiedMagicians = []; // Create a new array to store the modified names
//     for (const magician of magicians) {
//     modifiedMagicians.push(magician + " the Great");
//     }
//     return modifiedMagicians; // Return the new array
// }
//   // Create an array of magician's names
// const originalMagicianNames = ["David Copperfield", "Harry Houdini", "Penn Jillette", "Teller"];
//   // Create a copy of the original array and modify it
// const modifiedMagicianNames = make_great([...originalMagicianNames]);
//   // Call show_magicians to display the original names
// console.log("Original Magician Names:");
// show_magicians(originalMagicianNames);
//   // Call show_magicians to display the modified names
// console.log("\nModified Magician Names:");
// show_magicians(modifiedMagicianNames);
//Q44
// Sandwiches: Write a function that accepts a array of items a person wants on a sandwich. The function should have one parameter that collects as many items as the function call provides, and it should print a summary of the sandwich that is being ordered. Call the function three times, using a different number of arguments each time.
// var make_sandwich=(sandwichItems:any[])=> {
//     console.log("Sandwich Order:");
//     if (sandwichItems.length === 0) {
//     console.log("No items selected for the sandwich.");
//     } else {
//     console.log("Items selected for the sandwich:");
//     for (const item of sandwichItems) {
//         console.log("- " + item);
//     }
//     }
//     console.log("Enjoy your sandwich!\n");
// }
//   // Call the function three times with different numbers of arguments
// make_sandwich(["Turkey", "Lettuce", "Tomato", "Mayo"]);
// make_sandwich(["Ham", "Cheese"]);
// make_sandwich([]);
//Q45
// Cars: Write a function that stores information about a car in a Object. The function should always receive a manufacturer and a model name. It should then accept an arbitrary number of keyword arguments. Call the function with the required information and two other name-value pairs, such as a color or an optional feature. Print the Object that’s returned to make sure all the information was stored correctly.
// function createCar(manufacturer:any, modelName:any, ...options:any) {
//     const car:any = {
//     manufacturer: manufacturer,
//     modelName: modelName
//     };
//     // Process optional keyword arguments
//     for (let i = 0; i < options.length; i += 2) {
//     const key = options[i];
//     const value = options[i + 1];
//     car[key] = value;
//     }
//     return car;
// }
//   // Call the function with required and optional information
// const carInfo = createCar("Toyota", "Camry", "color", "Blue", "year", 2022);
//   // Print the returned object to verify the information
// console.log( carInfo);
// var a:number=2;
