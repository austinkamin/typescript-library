function addNumbers(numOne: number, numTwo: number, text?: string) {
    return numOne + numTwo;
}

let addition = addNumbers(1,2);
console.log(addition);

//do something but different

function threeThings(first: number, second: string, third: boolean) : string {
    return first + second;
}

let theThings = threeThings(1,'2', true);
console.log(theThings)