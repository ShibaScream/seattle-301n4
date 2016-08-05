var pets = {};

pets.isSpecialNeeds = function(pet) {
  if (pet.options.option) {
    var snOptsArray = pets.getSpecialNeedsOptions(pet.options.option);

    if (pets.$specialPet === true) {
      return snOptsArray.indexOf('specialNeeds') !== -1;
    } else {
      return snOptsArray.indexOf('specialNeeds') === -1;
    }
  }
};

pets.isSenior = function(pet) {
  if (pets.$seniorPet === true) {
    return 'Senior' === pet.age.$t;
  } else {
    return 'Senior' !== pet.age.$t;
  }
};

pets.isSizePet = function(pet) {
  if (pets.$petSize === 'S') {
    return pets.$petSize === pet.size.$t;
  } else if (pets.$petSize === 'M') {
    return pets.$petSize === pet.size.$t;
  } else if (pets.$petSize === 'L') {
    return pets.$petSize === pet.size.$t;
  } else {
    return pet.size.$t;
  }
};

pets.isSexPet = function(pet) {
  if (pets.$petSex === 'M') {
    return pets.$petSex === pet.sex.$t;
  } else if (pets.$petSex === 'F'){
    return pets.$petSex === pet.sex.$t;
  } else {
    return pet.sex.$t;
  }
};









pets.getMatchingPets = function() {
  return pets.all
    .filter(function(pet) {
      return pets.isSenior(pet);
    })
    .filter(function(pet) {
      return pets.isSpecialNeeds(pet);
    })
    .filter(function(pet) {
      return pets.isSizePet(pet);
    })
    .filter(function(pet) {
      return pets.isSexPet(pet);
    });
};
