require('dotenv').config();

const mongoose = require('mongoose');
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });

const Schema = mongoose.Schema;
const personSchema = new Schema({
  name: { type: String, required: true },
  age: Number,
  favoriteFoods: [String]
});

const Person = mongoose.model("Person", personSchema);

const createAndSavePerson = function (done) {
  const bradPitt = new Person({ name: "Brad Pitt", age: 59, favoriteFoods: ["pizza", "vegetables", "fresh fruit"] });

  bradPitt.save(function (err, data) {
    if (err) return console.error(err);
    done(null, data)
  });
};

const arrayOfPeople = [
  { name: "Leonardo DiCaprio", age: 48, favoriteFoods: ["pasta", "pizza", "seafood"] },
  { name: "Adam Sandler", age: 56, favoriteFoods: ["lasagna", "sushi", "pancakes"] },
  { name: "Johnny Depp", age: 60, favoriteFoods: ["pork", "chocolate", "Mexican food"] }
];

const createManyPeople = function (arrayOfPeople, done) {
  Person.create(arrayOfPeople, function (err, people) {
    if (err) {
      return console.log(err);
    }
    else {
      return done(null, people);
    }
  });
};


const findPeopleByName = function (personName, done) {
  Person.find({ name: personName }, function (err, personFound) {
    if (err) {
      return console.log(err);
    }
    else {
      done(null, personFound);
    }
  });
};

const findOneByFood = function (food, done) {
  Person.findOne({ favoriteFoods: food }, function (err, data) {
    if (err) {
      return console.log(err);
    }
    else {
      done(null, data);
    }
  });
};

const findPersonById = function (personId, done) {
  Person.findById(personId, function (err, data) {
    if (err) {
      return console.log(err);
    }
    else {
      done(null, data);
    }
  });
};

const findEditThenSave = function (personId, done) {
  const foodToAdd = 'hamburger';
  // .findById() method to find a person by _id with the parameter personId as search key. 
  Person.findById(personId, function (err, person) {
    if (err) {
      return console.log(err);
    }
    else {
      // Array.push() method to add "hamburger" to the list of the person's favoriteFoods
      person.favoriteFoods.push(foodToAdd);
      // and inside the find callback - save() the updated Person.
      person.save(function (err, updatedPerson) {
        if (err) {
          return console.log(err);
        }
        else {
          done(null, updatedPerson)
        }
      });
    }
  });
};
// const findEditThenSave = (personId, done) => {
//   const foodToAdd = "hamburger";

//   done(null /*, data*/);
// };



const findAndUpdate = (personName, done) => {
  const ageToSet = 20;

  done(null /*, data*/);
};

const removeById = (personId, done) => {
  done(null /*, data*/);
};

const removeManyPeople = (done) => {
  const nameToRemove = "Mary";

  done(null /*, data*/);
};

const queryChain = (done) => {
  const foodToSearch = "burrito";

  done(null /*, data*/);
};

/** **Well Done !!**
/* You completed these challenges, let's go celebrate !
 */

//----- **DO NOT EDIT BELOW THIS LINE** ----------------------------------

exports.PersonModel = Person;
exports.createAndSavePerson = createAndSavePerson;
exports.findPeopleByName = findPeopleByName;
exports.findOneByFood = findOneByFood;
exports.findPersonById = findPersonById;
exports.findEditThenSave = findEditThenSave;
exports.findAndUpdate = findAndUpdate;
exports.createManyPeople = createManyPeople;
exports.removeById = removeById;
exports.removeManyPeople = removeManyPeople;
exports.queryChain = queryChain;
