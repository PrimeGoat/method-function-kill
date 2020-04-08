/******************
 * YOUR CODE HERE *
 ******************/

const newPerson = function(first = "Anonymous", last = "Person", years = 0, marriage = false) {
  return {
    firstName: first,
    lastName: last,
    age: years,
    married: marriage,

    goingOn: function() {
      return this.age + 1;
    },

    ageUp: function() {
      this.age++;
    },

    getFullName: function() {
      return this.firstName + ' ' + this.lastName;
    },

    marry: function(person) {
      this.married = true;
      person.married = true;
      this.spouseName = person.firstName + ' ' + person.lastName;
      person.spouseName = this.firstName + ' ' + this.lastName;
    },

    divorce: function(person) {
      this.married = false;
      person.married = false;
      delete this.spouseName;
      delete person.spouseName;
    }
  };
}


/*********************************
 * OUR CODE BELOW; DO NOT TOUCH! *
 *********************************/

if (typeof newPerson === 'undefined') {
  newPerson = undefined;
}


module.exports = {
  newPerson,
}
