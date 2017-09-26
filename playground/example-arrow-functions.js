var names = ['alvaro','sammy','sofia'];

names.forEach(function (name) {
    console.log('forEach',name);
});

names.forEach((name) => {
    console.log('arrowFunc',name);
});

names.forEach((name) => console.log(name));

var returnMe = (name) => name + '!';

console.log(returnMe('alvarito'));


var person = {
    name: 'AlvaritoKore',
    greet: function () {
        names.forEach(function (name) {
            console.log(this.name + ' say hi to '+ name);
        });
    }
};

person.greet();


var person2 = {
    name: 'Amallinalli',
    greet: function () {
        names.forEach( (name) => {
            console.log(this.name + ' say hi to '+ name);
        });
    }
};

person2.greet();

//Challenge Area
function add (a, b) {
    return a + b;
}

console.log(add(3,4));
console.log(add(4,4));

var addStatement = (a, b) => {
    return a + b;
}

console.log(addStatement(1,2));
console.log(addStatement(2,3));


var addExpression = (a, b) => a + b;

console.log(addExpression(3,4));
console.log(addExpression(2,2));
