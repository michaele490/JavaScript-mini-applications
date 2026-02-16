function whatIsInAName(arr, obj) {
  let matchedObjects = [];

  // object = each object in array of objects
  // obj = object passed as an argument

  for (let object of arr) {
    let isMatch = true;

    for (let prop in obj) {
      if (object[prop] !== obj[prop]) {
        isMatch = false;
        break;
      }
    }

    if (isMatch) {
      matchedObjects.push(object);
    }
  }

  return matchedObjects;
}