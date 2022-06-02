var numberCount = 0,
  sum = 0,
  oddCount = 0,
  evenCount = 0,
  oddNumbers = " ",
  sumOdd = 0,
  evenNumbers = " ",
  sumEven = 0,
  number;

function sumAndOddEvenCount(number) {
  for (let i = 2; i < number; i++) {
    if (i % 2 == 0) {
      evenCount++;
      sum += i;
      numberCount++;
    } else if (i % 2 != 0 && i != 7) {
      oddCount++;
      sum += i;
      numberCount++;
    }
  }
}

function oddAndEvenNumbers(number) {
  for (let i = 2; i < number; i++) {
    if (i % 2 == 0) {
      evenNumbers += i + " ";
      sumEven += i;
    } else if (i % 2 != 0 && i != 7) {
      oddNumbers += i + " ";
      sumOdd += i;
    }
  }
}

do {
  if (number < 1 && number != undefined) {
    number = Number(prompt("1'den küçük giremezsiniz. Sayı:"));
  } else if (number > 100 && number != undefined) {
    number = Number(prompt("100'den büyük giremezsiniz. Sayı:"));
  } else if (isNaN(number) && number != undefined) {
    number = Number(prompt("Sayı girmelisiniz. Sayı:"));
  } else {
    number = prompt("Sayı:");
    if (number != null) number = Number(number);
  }
} while (isNaN(number) || number < 1 || number > 100);

if (number == 44) {
  console.log("Secret-Key");
} else {
  sumAndOddEvenCount(number);
  oddAndEvenNumbers(number);
}

document.write("Verilen sayı ", number, "<br>");
document.write(
  "1 ile ",
  number,
  " arasında ",
  numberCount,
  " sayı vardır.<br>"
);
document.write(
  "1 ile ",
  number,
  " arasındaki sayıların toplamı ",
  sum,
  "<br><br>"
);
document.write(
  "1 ile ",
  number,
  " arasındaki tek sayı sayısı ",
  oddCount,
  "<br>"
);
document.write(
  "1 ile ",
  number,
  " arasındaki tek sayılar ",
  oddNumbers,
  "<br>"
);
document.write(
  "1 ile ",
  number,
  " arasındaki tek sayılar toplamı ",
  sumOdd,
  "<br><br>"
);
document.write(
  "1 ile ",
  number,
  " arasındaki çift sayı sayısı ",
  evenCount,
  "<br>"
);
document.write(
  "1 ile ",
  number,
  " arasındaki çift sayılar ",
  evenNumbers,
  "<br>"
);
document.write(
  "1 ile ",
  number,
  " arasındaki çift sayılar toplamı ",
  sumEven,
  "<br>"
);
