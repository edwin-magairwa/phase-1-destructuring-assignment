// Introduction
// As developers, sometimes we receive information in a collection (e.g., an Object) and we want to "pick and choose" elements out of the collection. It's a major pain to individually extract each property / value pair out of an Object and then assign it to a variable.

// Destructuring lets us type less and be more clear about what we want to pull out of an Object. Not only does destructuring help when working with data in your application, it's essential for understanding how to get JavaScript to include third-party code (like you find on npm).

// Use Destructuring Assignment to Assign Data to Variables
// In JavaScript, when we want to assign data from an object to single variables, we know how do it individually like so:

const doggie = {
  name: 'Buzz',
  breed: 'Great Pyrenees',
  furColor: 'black and white',
  activityLevel: 'sloth-like',
  favoriteFood: 'hot dogs'
};
const name = doggie.name;
const breed = doggie.breed;
console.log(name); // => "Buzz"
console.log(breed); // => "Great Pyrenees"

// This is repetitive code. The process is:
// Declare a variable with a name (e.g. name or breed)
// Use that variable's name to point to an attribute in the Object whose name matches the name of the variable (e.g. doggie.breed or doggie.name)
// Assign the attribute's value to the created variable
// JavaScript gives us the ability to perform this task with one simple line of code.

const { name: dogName, breed: dogBreed } = doggie;
console.log(dogName); // => "Buzz"
console.log(dogBreed); // => "Great Pyrenees"

// The {} around the variable names tells the JavaScript engine that it's going to be pulling values from an Object. The engine looks inside the doggie object for the attributes name and breed and assigns the values associated with those keys to the corresponding variable names. This is known as destructuring assignment.

// Note that because the engine is looking for the attributes by their keys, the order inside the {} doesn't matter — this works as well:

const { breed: dogBreed2, name: dogName2 } = doggie;
console.log(dogName2); // => "Buzz"
console.log(dogBreed2); // => "Great Pyrenees"

// We can also use destructuring assignment with a nested data structure:

const doggieNested = {
  name: 'Buzz',
  breed: 'Great Pyrenees',
  furColor: 'black and white',
  activityLevel: 'sloth-like',
  favoriteFoods: {
    meats: {
      ham: 'smoked',
      hotDog: 'Oscar Meyer',
    },
    cheeses: {
      american: 'kraft'
    }
  }
};

const { favoriteFoods: { meats: { ham, hotDog } } } = doggieNested;
console.log(ham); // => "smoked"
console.log(hotDog); // => "Oscar Meyer"

// We've simply "drilled down" to the object we want to access by chaining the keys: doggie.favoriteFoods.meats.

// Using Destructuring Assignment with Arrays
// Destructuring does not just work on objects — we can use the same syntax with Arrays.

const dogs = ['Great Pyrenees', 'Pug', 'Bull Mastiff'];
const [medium, small, giant] = dogs;
console.log(medium, small, giant); // LOG: Great Pyrenees Pug Bull Mastiff

// Note that, this time, we've wrapped the variables we're declaring in [] instead, so the engine knows we're destructuring an Array. In this case, the order does matter: the engine assigns the first element to medium, the second to small and the third to giant.

// The cool part is we can pick the parts of the Array that we want to assign!

const [, smallDog, giantDog] = dogs;
console.log(smallDog, giantDog); // LOG: Pug Bull Mastiff

// The initial comma tells the engine to skip the first element and start the assignments with the second element.

// Using Destructuring Assignment with Strings
// We can also destructure with strings by using the String.prototype.split() method to turn the string into an array:

const dogsName = 'Sir Woody BarksALot';
const [title, firstName, lastName] = dogsName.split(' ');
console.log(title, firstName, lastName); // LOG: Sir Woody BarksALot

// Because the split() method returns an array, we can pick and choose just as we did before:

const [titleOnly, , lastNameOnly] = dogsName.split(' ');
console.log(titleOnly, lastNameOnly); // LOG: Sir BarksALot

// Instructions
// Take a look in index.js. You'll see that we've given you several variables containing Strings, Arrays, and Objects. For this lab, you need to write several destructuring assignments for each. Specific instructions are provided at the bottom of the index.js file. Let the test output guide you through the process.

// STRING: Destructure five animal names from `farmAnimals`
const farmAnimals = 'cow horse sheep pig chicken';
const [bessie, horse, dolly, babe, little] = farmAnimals.split(' ');
console.log(bessie, horse, dolly, babe, little); // "cow horse sheep pig chicken"

// STRING: Destructure three traditional animal colors
const animalColors = 'black and white chestnut black';
const [blackAndWhite, chestnut, black] = animalColors.split(' ');
console.log(blackAndWhite, chestnut, black); // "black and white chestnut black"

// ARRAY: Destructure the seven rainbow colors
const rainbowColors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
const [red, orange, yellow, green, blue, indigo, violet] = rainbowColors;
console.log(red, orange, yellow, green, blue, indigo, violet);

// ARRAY: Destructure six rainbow colors using initials
const [r, o, y, g, b, , v] = rainbowColors;
console.log(r, o, y, g, b, v); // "r o y g b v"

// ARRAY: Destructure Indigo using `indg`
const [, , , , , indg] = rainbowColors;
console.log(indg); // "indigo"

// OBJECT: Destructure all muppet properties using their keys
const muppet = {
  muppetName: 'Miss Piggy',
  color: 'pink',
  song1: 'The Rainbow Connection',
  song2: 'Movin’ Right Along',
  song3: 'Bein’ Green',
  song4: 'I Hope That Something Better Comes Along',
  job: 'Host of The Muppet Show',
  partner: 'Kermit'
};

const { muppetName, color, song1, song2, song3, song4, job, partner } = muppet;
console.log(muppetName, color, song1, song2, song3, song4, job, partner);

// OBJECT: Destructure specific muppet properties (songs and Kermit's job)
const { song2: secondSong, song4: fourthSong, job: kermitJob, partner: kermitPartner } = muppet;
console.log(secondSong, fourthSong, kermitJob, kermitPartner);

// Additional fixes based on your instructions:

// STRING: Destructure five animal sounds
const farmAnimalSounds = 'cow horse sheep pig chicken';
const [moo, neigh, baa, oink, cluck] = farmAnimalSounds.split(' ');
console.log(moo, neigh, baa, oink, cluck); // "cow horse sheep pig chicken"

// STRING: Destructure the three traditional animal colors
const colors = 'cow horse sheep';
const [blackAndWhiteColor, chestnutColor, blackColor] = colors.split(' ');
console.log(blackAndWhiteColor, chestnutColor, blackColor); // "cow horse sheep"

// OBJECT: Destructure all appropriate variables using the keys as the variable names
const animalCharacters = {
  kermit: "Kermit",
  missPiggy: "Miss Piggy",
  bigBird: "Big Bird",
  elmo: "Elmo",
};
const { kermit, missPiggy, bigBird, elmo } = animalCharacters;
console.log(kermit);    // should log 'Kermit'
console.log(missPiggy); // should log 'Miss Piggy'
console.log(bigBird);   // should log 'Big Bird'
console.log(elmo);      // should log 'Elmo'

// Nested Object Destructuring
const muppetSongs = {
  song1: "Rainbow Connection",
  song2: "Bein' Green",
  song3: "Mahna Mahna",
  song4: "Movin' Right Along",
};
const kermitDetails = {
  name: "Kermit",
  job: "Host",
  partner: "Miss Piggy",
  address: {
    city: "Los Angeles",
    state: "California",
  },
};
const { song2: songTwo, song4: songFour } = muppetSongs;
const { job: nestedJob, partner: kermitPartner } = kermitDetails;
console.log(songTwo);    // should log 'Bein' Green'
console.log(songFour);   // should log 'Movin' Right Along'
console.log(nestedJob);  // should log 'Host'
console.log(kermitPartner); // should log 'Miss Piggy'

// Conclusion
// Destructuring assignment is a fast, and efficient way to assign data to variables from objects, arrays, and strings. It allows us to easily pick and choose the pieces of data that we want to assign. With practice, you'll be proficient at it in no time.

// Resources
// Destructuring assignment