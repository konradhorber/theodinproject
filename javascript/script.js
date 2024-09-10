function camelize(string) {
    let array = string.split("-");
    array = array.map((string) => capitalizeFirstLetter(string));
    return array.join("");
}

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function filterRange(array, lowerInclusiveBound, higherInclusiveBound) {
    return array.filter((number) => 
        number >= lowerInclusiveBound && number <= higherInclusiveBound);
}

function filterRangeInPlace(array, lowerInclusiveBound, higherInclusiveBound) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] < lowerInclusiveBound || array[i] > higherInclusiveBound) {
            array.splice(i,1);
            i--;
        }
    }
}

function copySorted(array) {
    return array.slice().sort();      
}

function transformPropertiesToArray(objectArray, propertyKey) {
    let names = objectArray.map((item) => item[propertyKey]);
    return names;
}

function transformMultiplePropertiesToArray(objectArray) {
    let propertiesArray = objectArray.map((item) => ({
        fullName: item.name.concat(" ", item.surname), id: item.id
    }));
    return propertiesArray;
}



function sortByAge(users) {
    users.sort((a, b) => a.age - b.age);
}

function shuffle(array) {
    let shuffledArray = []

    while(0 < array.length) {
        shuffledArray = shuffledArray.concat(
            array.splice(
                getRandomInt(0, array.length - 1),
                1)
        );
    };
    return shuffledArray;
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getAverageAge(users) {
    const sumAge = users.reduce(
        (accumulator, currentItem) => 
        accumulator + currentItem.age,
        0
    );
    return sumAge/users.length 
}


function returnUniqueItems(array) {
    let uniqueArray = [];
    array.forEach(item => {
        if(uniqueArray.includes(item) == false) {
            uniqueArray = uniqueArray.concat(item);
        }
    });
    return uniqueArray;
}


let users = [
    {id: 'john', name: "John Smith", age: 20},
    {id: 'ann', name: "Ann Smith", age: 24},
    {id: 'pete', name: "Pete Peterson", age: 31},
];

function groupById(array) {
    return array.reduce((accumulator, currentItem) => {
        accumulator = {...accumulator, [currentItem.id]: currentItem };
    },{});
}