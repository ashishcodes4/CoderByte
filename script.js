// Lok for solution... feel to make changes and submit pull request, if you find something worth changing to make the performance any better. 

// 1.) Calculate the factorila of any given number. 
function factorial(num) {
    let fact = 1;
    for (i=1;i<=num;i++) {
        fact = fact * i;
    }
    return fact;
}

// 2.) Count the largets word in any given string. 




// 3.) For this challenge you will be reversing a string.
function reverseString(str){
    let strArray = str.split(" ");
    let revStr = strArray.reverse();
    let joinArr = revStr.join(" ");
    return joinArr;

    //or you could use method chaininf to reduce the code, 
    return str.split(" ").reverse().join(" ");
}

// we can reduce the amount of code simply by using methode chaining...
