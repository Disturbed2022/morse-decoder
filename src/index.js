const MORSE_TABLE = {
  '.-': 'a',
  '-...': 'b',
  '-.-.': 'c',
  '-..': 'd',
  '.': 'e',
  '..-.': 'f',
  '--.': 'g',
  '....': 'h',
  '..': 'i',
  '.---': 'j',
  '-.-': 'k',
  '.-..': 'l',
  '--': 'm',
  '-.': 'n',
  '---': 'o',
  '.--.': 'p',
  '--.-': 'q',
  '.-.': 'r',
  '...': 's',
  '-': 't',
  '..-': 'u',
  '...-': 'v',
  '.--': 'w',
  '-..-': 'x',
  '-.--': 'y',
  '--..': 'z',
  '.----': '1',
  '..---': '2',
  '...--': '3',
  '....-': '4',
  '.....': '5',
  '-....': '6',
  '--...': '7',
  '---..': '8',
  '----.': '9',
  '-----': '0',
};

function decode(expr) {
  let array = []
  let array1 = []
  let str = ''
  let str2 = ''
  let str3 = ''
  let step = 10
  let result = []
  for (let i = 0; i < expr.length; i += step) {
    str = expr.slice(i, i + step)
    str2 = str.slice(str.indexOf('1'))
    array.push(str2)
    str = 0
    str2 = ''
  }
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j <= array[i].length; j += 2) {
      if (array[i].slice(j, j + 2) === '11') {
        str3 += '-'
      } else if (array[i].slice(j, j + 2) === '10') {
        str3 += '.'
      } else if (array[i] === '*') {
        str3 = '*'
      }
    }
    array1.push(str3)
    str3 = ''
  }
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] === "*") {
      result.push(' ')
    } else {
      array1[i] = MORSE_TABLE[array1[i]]
      result.push(array1[i])
    }
  }
  return result.join('').toString()
}

module.exports = {
  decode
}