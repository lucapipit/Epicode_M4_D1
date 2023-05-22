// es 1

/* function check50(num1, num2){
    if(num1 === 50 || num2 === 50 || num1 + num2 === 50){
        return true;
    }
    return false;
}
console.log(check50(50, 50)); */

// es 2

/* let string = "marmellata"
let position = 3;
function editString(string, position){
    if(position > string.length && position < 0){
        return;
    }
    return (string.slice(0, position) + string.slice(position + 1));
}
console.log(editString(string, position)); */

// es 3

/* function check70(num1, num2){
    if (((num1 >= 40 && num1 <= 60)||(num1 >= 70 && num1 <= 100))
    &&((num2 >= 40 && num2 <= 60)||(num2 >= 70 && num2 <= 100))){
        return true;
    }
    return false;
    
    
}
console.log(check70(40, 100)); */

// es 4

/* let keywords = ["los", "new"];
function city(cityName){
    let cityNameMin = cityName.toLowerCase();
    for(i = 0; i < keywords.length; i++){
        if(cityNameMin.startsWith(keywords[i])){
            return cityName;
        }
    }
    return false;
}
console.log(city("york")); */

// es 5

/* let array = [3, 5, 6, 1]
function sumArray(array){
    sum = 0;
    for(i = 0; i < array.length; i++){
        sum += array[i];
    }
    return sum;
}
console.log(sumArray(array)); */

// es 6

/* let array = [4, 1, 5];

function checkArray(array){
    if(array.includes(3) || array.includes(1)){
        return true;
    }
    return false;
}
console.log(checkArray(array)); */

// es 7

/* function checkAngle(degree){
    if(degree > 180 || degree < 0){
        return "inserire angolo compreso tra 0 e 180 gradi"
    }else if(degree === 90){
        return "angolo retto";
    }else if(degree === 180){
        return "angolo piatto";
    }else if(degree < 90){
        return "angolo acuto";
    }else if(degree > 90){
        return "angolo ottuso";
    }
}
console.log(checkAngle(91)); */

// es 8

/* let slogan = "Fabbrica Italiana Automobili Torino";

function acronimo(slogan){
    let splitSlogan = slogan.split(" ");
    let result = "";
    for(i = 0; i < splitSlogan.length; i++){
        // result.push(splitSlogan[i][0]);
        result += splitSlogan[i][0];
    }
    // return result.join("");
   return result;
    
}

console.log(acronimo(slogan)); */

// esercizio extra 1

let string = "marmellata"

toFindDuplicates();

function toFindDuplicates(element, index) {
    
    let resultToReturn = false;
    count = 1;
    popular = "";

    for (let i = 0; i < string.length; i++) { // nested for loop
        for (let j = 0; j < string.length; j++) {
            // prevents the element from comparing with itself
            if (i !== j) {
                // check if elements' values are equal
                if (string[i] === string[j]) {
                    // duplicate element present                                
                    resultToReturn = true;
                    count += 1;
                    popular = string[i];
                    // terminate inner loop
                    break;
                }
            }
        }
        // terminate outer loop                                                                      
        if (resultToReturn) {
            break;
        }
    }
    if(resultToReturn) {
        console.log('Duplicate elements exist');
        console.log(popular + " - " + count);
    }else{
        console.log('Duplicates dont exist');
        }
    }
