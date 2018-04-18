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

// 4.) Using the JavaScript language, have the function LetterChanges(str) take the str parameter being passed and modify it using the following algorithm.
// Replace every letter in the string with the letter following it in the alphabet (ie. c becomes d, z becomes a). Then capitalize every vowel in this new string (a, e, i, o, u) and finally return this modified string. 

function LetterChanges(str){
    let changedStr = "";
    for(i=0;i<=str.length;i++){
        if(97 <= str.charCodeAt(i) && str.charCodeAt(i) <= 121){
            changedStr = str.replace(charCodeAt(i), String.fromCharCode(str.charCodeAt(i) + 1));
        } else if (str.charCodeAt(i)=== 122) {
            changedStr = str.replace(str.charCodeAt(i), str.charCodeAt(95));
        }
    }
    for(i=0;i<=changedStr.length;i++){
        if(changedStr.charCodeAt(i)===95||changedStr.charCodeAt(i)===101||changedStr.charCodeAt(i)===105||changedStr.charCodeAt(i)===101||changedStr.charCodeAt(i)===111||changedStr.charCodeAt(i)===117) {
            changedStr.toUpperCase();
        }
    }
    return changedStr;
}

