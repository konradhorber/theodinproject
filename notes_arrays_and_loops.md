# arrays and loops
## arrays
* create array: const array_name = [item1, item2, ...];
* access array by index number: let item = array_name[0];
* change array element: array_name[0] = item1Adjusted;

* access array document.getElementById("demo").innerHTML = array_name;

* arrays are a special kind of object
    * objects use names to access its "members":  const person = {firstName:"John", lastName:"Doe", age:46}; 
    * person.firstName would return John
    * arrays use numbers to access its "elements", e.g., person[0]
* you can have variables of different types in one array
    * myArray[0] = Date.now;
    * myArray[1] = myFunctions;
    * myArray[2] = myCars;

* you can nest arrays

## methods
* array's strength is their built-in properties and methods, e.g.,
myArray.length, myArry.sort()
* accessing last array element: 
let myArrayElement = myArray[myArray.length -1];
* identify array:
    * Array.isArray(myArray);
    * (myArray instanceof Array)
* convert array to string: 
    * documents.getElementById("demo").innerHTML = 
array_name.toString();
    * document.getElementById("demo").innerHTML = arrayName.join(" * ");

* Remove and add element
    * .pop() removes last element
    * add to array with push method: myArray.push("newItem");
    * you can also add elements with length property: myArray[myArray.length] = "newItem";
    * .shift() removes first element and shifts other elements before
    * .unshift("element") adds element and shifts back the other elements
* concatenate: myArrayConcat = myArrayOne.concat(myArrayTwo);, also works threeways MyArrayConcat = myArrayOne.concat(myArrayTwo, MyArrayThree)
* copyWithin to copy in array: 
    * myArray.copyWithin(2,0); copies to 2 from 0
    * myArray.copyWithin(2,0,2); copies to 2 from index 0 to 2 (multiple items)
* flatten nested array with myArray.flat();
* flatMap to do a function on the array, e.g.,: 
newArr = myArr.flatMap (x => [x * 10]);

* Splicing and slicing array
    * splice() to add element to array: myArr.splice(2, 0, "element1", "element2")
    * slice() to remove elements myArr.slice(1,2)
## loops
* loop through array: for (let i = 0; i < myArray.length; i++) {action;}
* you can also use forEach() method: 
    * myArray.forEach(doFunction) 
    * function doFunction(value) {action;}
* this syntax also works for (const person of people) {action}


