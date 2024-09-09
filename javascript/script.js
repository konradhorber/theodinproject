let user = {
    name: "John",
    surname: "Smith",
};

user.name = "Pete";

delete user.name;

let schedule = {};

function isEmpty(obj) {
    for(let key in obj) {
        return false;
    };
    return true;
}

let salaries = {
  }

let sum = 0;
for(let key in salaries) {
    sum += salaries[key];
}

let menu = {
    width: 200,
    height: 300,
    title: "my menu",
};

function multiplyNumeric(obj) {
    for (let key in obj) {
        if(Number.isInteger(obj[key])) {
            obj[key] = obj[key] * 2;
        }
    }
}

multiplyNumeric(menu);