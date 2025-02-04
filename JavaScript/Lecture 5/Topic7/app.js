// Action that can be performed on an object

const calculator = {
    add: function(a,b){
        return a+b;
    },
    sub: function(a,b){
        return a-b;
    },
    multiple: function(a,b){
        return a*b;
    }
};

console.log(calculator.add(7,9));
console.log(calculator.sub(14,9));
console.log(calculator.multiple(7,9));

// Short handss

const expercalsi = {
    division(x,y){
        return x/y;
    },
    expon(x,y){
        return x**y;
    }
};
console.log(expercalsi.division(55,5));
console.log(expercalsi.expon(5,5));