const numberToWords = (number) => {
  const units = [
    "",
    "One",
    "Two",
    "Three",
    "Four",
    "Five",
    "Six",
    "Seven",
    "Eight",
    "Nine",
  ];
  const teens = [
    "Eleven",
    "Twelve",
    "Thirteen",
    "Fourteen",
    "Fifteen",
    "Sixteen",
    "Seventeen",
    "Eighteen",
    "Nineteen",
  ];
  const tens = [
    "",
    "",
    "Twenty",
    "Thirty",
    "Forty",
    "Fifty",
    "Sixty",
    "Seventy",
    "Eighty",
    "Ninety",
  ];

  function convertBelowThousand(num) {
    if (num === 0) {
      return "";
    } else if (num < 10) {
      return units[num];
    } else if (num < 20) {
      return teens[num - 11];
    } else if (num < 100) {
      const tenDigit = Math.floor(num / 10);
      const remainder = num % 10;
      return tens[tenDigit] + " " + convertBelowThousand(remainder);
    } else {
      const hundredDigit = Math.floor(num / 100);
      const remainder = num % 100;
      return (
        units[hundredDigit] + " Hundred " + convertBelowThousand(remainder)
      );
    }
  }

  if (number === 0) {
    return "Zero";
  } else {
    const billion = Math.floor(number / 1000000000);
    const million = Math.floor((number % 1000000000) / 1000000);
    const thousand = Math.floor((number % 1000000) / 1000);
    const remainder = number % 1000;

    let result = "";
    if (billion > 0) {
      result += convertBelowThousand(billion) + " Billion ";
    }
    if (million > 0) {
      result += convertBelowThousand(million) + " Million ";
    }
    if (thousand > 0) {
      result += convertBelowThousand(thousand) + " Thousand ";
    }
    if (remainder > 0) {
      result += convertBelowThousand(remainder);
    }

    return result.trim();
  }
};
const hello = () => {
  console.log("hello");
};
// Example usage:

module.exports = {
  numberToWords,
  hello
};
