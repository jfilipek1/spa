function isCar(car1, car2, car3) {
    var arr = [car1, car2, car3];
    return arr.every(Boolean);
}

console.log(isCar(true, true, true));
console.log(isCar(false, false, false));
console.log(isCar(true, true, false));
console.log(isCar(false, false, true));
console.log(isCar(true, false, true));

