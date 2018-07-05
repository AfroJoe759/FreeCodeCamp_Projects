function rot13(str) {
    let newString = "";
    for(let i = 0; i < str.length; i++){
        if(str.charCodeAt(i) < 78 && str.charCodeAt(i) >= 65){
            newString += String.fromCharCode(str.charCodeAt(i) + 13);
        }

        else if(str.charCodeAt(i) < 91 && str.charCodeAt(i) >= 78){
            newString += String.fromCharCode(str.charCodeAt(i) - 13);
        }

        else{
            newString += str[i];
        }
    }
    console.log(newString);
  return newString;
}

// Change the inputs below to test
rot13("SERR PBQR PNZC");
