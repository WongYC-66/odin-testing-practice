export function capitalize(str) {
    return str[0].toUpperCase() + str.slice(1,)
}

export function reverseString(str) {
    return str.split('').reverse().join('')
}

export const calculator = {
    add: (x, y) => x + y,
    subtract: (x, y) => x - y,
    divide: (x, y) => x / y,
    multiply: (x, y) => x * y
}

export function caesarCipher(str, factor) {
    str = str.split('').map(x => {
        let num = Number(x.charCodeAt(0));
        let isUpper = (num >= 65 && num <= 90) ? true : false;
        num = isUpper ? num - 65 : num - 97
        num += factor
        num %= 26
        num = isUpper ? num + 65 : num + 97
        return String.fromCharCode(num)
    })
    return str.join('')
}

export function analyzeArray(arr){
    let obj = {}
    obj.length = arr.length
    obj.max = Math.max(...arr)
    obj.min = Math.min(...arr)
    obj.average = arr.reduce((s, x) => s + x, 0) / obj.length
    console.log(obj)
    return obj
}