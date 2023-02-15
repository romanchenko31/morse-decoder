const MORSE_TABLE = {
  ".-": "a",
  "-...": "b",
  "-.-.": "c",
  "-..": "d",
  ".": "e",
  "..-.": "f",
  "--.": "g",
  "....": "h",
  "..": "i",
  ".---": "j",
  "-.-": "k",
  ".-..": "l",
  "--": "m",
  "-.": "n",
  "---": "o",
  ".--.": "p",
  "--.-": "q",
  ".-.": "r",
  "...": "s",
  "-": "t",
  "..-": "u",
  "...-": "v",
  ".--": "w",
  "-..-": "x",
  "-.--": "y",
  "--..": "z",
  ".----": "1",
  "..---": "2",
  "...--": "3",
  "....-": "4",
  ".....": "5",
  "-....": "6",
  "--...": "7",
  "---..": "8",
  "----.": "9",
  "-----": "0",
};

function decode(expr) {
  let arr = [];
  let newArr = [];
  let ar = [];
  let argt = [];
  let qwer = [];
  expr.split("*").map((v) => {
    if (v !== "") {
      arr = v.split("");
      argt = v.split("");
      argt.length -= 10;
      do {
        if (argt.length === arr.length) {
          ar.push(newArr.reverse().join(""));
          newArr = [];

          argt.length -= 10;
        }

        if (Number(arr[arr.length - 1]) + Number(arr[arr.length - 2]) === 1) {
          newArr.push(".");
        } else if (
          Number(arr[arr.length - 1]) + Number(arr[arr.length - 2]) ===
          2
        ) {
          newArr.push("-");
        }

        arr.length -= 2;
      } while (arr.length > 0);

      if (arr.length === 0) {
        ar.push(newArr.reverse().join(""));
        qwer.push(ar.reverse());
        ar = [];
        newArr = [];
      }
    }
  });
  ar = qwer;
  ar.map((v) => {
    for (let i = 0; i < v.length; i += 1) {
      if (Object.keys(MORSE_TABLE).includes(v[i])) {
        newArr.push(MORSE_TABLE[v[i]]);
      }
    }
    newArr.push(" ");
  });

  return newArr.join("").trim();
}

module.exports = {
  decode,
};
