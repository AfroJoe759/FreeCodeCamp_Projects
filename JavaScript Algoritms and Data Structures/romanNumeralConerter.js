function convertToRoman(num) {
  let romanNumeral = "";
  console.log(num, romanNumeral);
  while (num != 0) {
    if (num >= 1000) {
      num -= 1000;
      romanNumeral += "M";
    }

    if (num < 1000 && num >= 900) {
      num -= 900;
      romanNumeral += "CM";
    }

    if (num < 900 && num >= 500) {
      romanNumeral += "D";

      if (num >= 800) {
        num -= 800;
        romanNumeral += "CCC";
      } else if (num < 800 && num >= 700) {
        num -= 700;
        romanNumeral += "CC";
      } else if (num < 700 && num >= 600) {
        num -= 600;
        romanNumeral += "C";
      } else {
        num -= 500;
      }
    }

    if (num < 500 && num >= 100) {

      if (num >= 400) {
        num -= 400;
        romanNumeral += "CD";
      } else if (num >= 300) {
        num -= 300;
        RomanNumeral += "CCC";
      } else if (num < 300 && num >= 200) {
        num -= 200;
        RomanNumeral += "CC";
      } else {
        num -= 100;
        RomanNumeral += "C";
      }
    }

    if (num < 100 && num >= 90) {
      num -= 90;
      romanNumeral += "XC";
    }

    if (num < 90 && num >= 50) {
      romanNumeral += "L";

      if (num >= 80) {
        num -= 80;
        romanNumeral += "XXX";
      } else if (num < 80 && num >= 70) {
        num -= 70;
        romanNumeral += "XX";
      } else if (num < 70 && num >= 60) {
        num -= 60;
        romanNumeral += "X";
      } else {
        num -= 50;
      }
    }

    if (num < 50 && num >= 10) {

      if (num < 50 && num >= 40) {
        num -= 40;
        romanNumeral += "XL";
      } else if (num < 40 && num >= 30) {
        num -= 30;
        romanNumeral += "XXX";
      } else if (num < 30 && num >= 20) {
        num -= 20;
        romanNumeral += "XX";
      } else {
        num -= 10;
        romanNumeral += "X";
      }

    } else if (num < 10) {

      if (num == 9) {
        num -= 9;
        romanNumeral += "IX";
      }

      if (num == 8) {
        num -= 8;
        romanNumeral += "VIII";
      }

      if (num == 7) {
        num -= 7;
        romanNumeral += "VII";
      }

      if (num == 6) {
        num -= 6;
        romanNumeral += "VI";
      }

      if (num == 5) {
        num -= 5;
        romanNumeral += "V";
      }

      if (num == 4) {
        num -= 4;
        romanNumeral += "IV";
      }

      if (num == 3) {
        num -= 3;
        romanNumeral += "III";
      }

      if (num == 2) {
        num -= 2;
        romanNumeral += "II";
      }

      if (num == 1) {
        num -= 1;
        romanNumeral += "I";
      }

    }
  }

  console.log(num, romanNumeral);
  return romanNumeral;
}

convertToRoman(36);
