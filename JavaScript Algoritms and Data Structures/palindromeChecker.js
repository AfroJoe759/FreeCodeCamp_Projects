function palindrome(str) {
  str = str.toLowerCase();
  str = str.replace(/[^0-9a-zA-Z]/gi, '')

  for(let i = 0; i < str.length/2; i++){
    if(str[i] != str[str.length - 1 -  i]){
      return false;
    }
  }
  return true;
}



palindrome("eye");
