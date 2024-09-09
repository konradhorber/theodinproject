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

let array = [5, 2, 1, -10, 8];

console.log(array);