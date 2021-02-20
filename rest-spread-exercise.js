/*function filterOutOdds() {
    var nums = Array.prototype.slice.call(arguments);
    return nums.filter(function(num) {
        return num % 2 === 0
    });
  }
  */

// solution


const filterOutOdds = (...nums) => {
    //const arr = [nums]
    return nums.filter(val => val % 2 === 0)
}



// findMIN

const findMin = (...min) => {
    return min.reduce((acc, curr) => {
        if (acc < curr) { curr = acc }
        return curr
    })
}

// mergeObjects

const mergeObjects = (obj1, obj2, ...newObj) => {
    newObj = {...obj1, ...obj2 }
    return newObj
}

// double And Return Args

const doubleAndReturnArgs = (arr, ...nums) => {
    for (let i of nums) {
        let double = i * 2
        arr.push(double)
    }
    return arr
}

// slice an dice

/** remove a random element in the items array
and return a new array without that item. */

//function removeRandom(items) {
//}

const removeRandom = (item, ...items) => {
    let remove = items.indexOf(item)
    if (remove !== -1) {
        items.splice(remove, 1)
    }
    return items
}

/** Return a new array with every item in array1 and array2. */

//function extend(array1, array2) {
//}

const extend = (array1, array2) => {
    const newArr = [...array1, ...array2]
    return newArr
}

/** Return a new object with all the keys and values
from obj and a new key/value pair */

//function addKeyVal(obj, key, val) {

//}

const addKeyVal = (obj, key, val) => {
    const newObj2 = {...obj, key: val }
    return newObj2
}

/** Return a new object with a key removed. */

//function removeKey(obj, key) {

//}

const removeKey = (obj, key) => {
    const removedKeyObj = {...obj }
    delete removeKeyObj[key]
    return removedKeyObj
}

/** Combine two objects and return a new object. */

//function combine(obj1, obj2) {}

const combine = (object1, object2) => {
    const together = {...object1, ...object2 }
    return together
}

/** Return a new object with a modified key and value. */

//function update(obj, key, val) {}

const update = (obj, key, val) => {
    const updatedObj = {...obj }
    delete updatedObj[key]
    updatedObj[key] = val

    return updatedObj
}