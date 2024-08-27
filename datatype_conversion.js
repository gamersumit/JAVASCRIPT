
// variables

let numberExample = 50
let numberZeroExample = 0
let stringExample = "Cryo"
let stringEmptyExample = ""
let stringDigitExample = "123"
let StringFalseExample = false
let StringTrueExample = true
let nullExample = null
let undefinedExample = undefined


console.table(["original    ","converted   ","type   "])

// converstion into int/number
// let numberResult = Number(stringEmptyExample)
// console.table([stringEmptyExample, numberResult, typeof numberResult])
// numberResult = Number(stringExample)
// console.table([stringExample, numberResult, typeof numberResult])
// numberResult = Number(stringDigitExample)
// console.table([stringDigitExample, numberResult, typeof numberResult])
// numberResult = Number(StringFalseExample)
// console.table([StringFalseExample, numberResult, typeof numberResult])
// numberResult = Number(StringTrueExample)
// console.table([StringTrueExample, numberResult, typeof numberResult])
// numberResult = Number(undefinedExample)
// console.table([undefinedExample, numberResult, typeof numberResult])
// numberResult = Number(nullExample)
// console.table([nullExample, numberResult, typeof numberResult])




// conversion into Boolean
// let booleanResult = Boolean(stringEmptyExample)
// console.table([stringEmptyExample, booleanResult, typeof booleanResult])
// booleanResult = Boolean(stringExample)
// console.table([stringExample, booleanResult, typeof booleanResult])
// booleanResult = Boolean(stringDigitExample)
// console.table([stringDigitExample, booleanResult, typeof booleanResult])
// booleanResult = Boolean(numberExample)
// console.table([numberExample, booleanResult, typeof booleanResult])
// booleanResult = Boolean(numberZeroExample)
// console.table([numberZeroExample, booleanResult, typeof booleanResult])
// booleanResult = Boolean(booleanFalseExample)
// console.table([booleanFalseExample, booleanResult, typeof booleanResult])
// booleanResult = Boolean(booleanTrueExample)
// console.table([booleanTrueExample, booleanResult, typeof booleanResult])
// booleanResult = Boolean(undefinedExample)
// console.table([undefinedExample, booleanResult, typeof booleanResult])
// booleanResult = Boolean(nullExample)
// console.table([nullExample, booleanResult, typeof booleanResult])





// Conversion to string
let stringResult = String(stringEmptyExample)
console.table([stringEmptyExample, stringResult, typeof stringResult])
stringResult = String(stringExample)
console.table([stringExample, stringResult, typeof stringResult])
stringResult = String(stringDigitExample)
console.table([stringDigitExample, stringResult, typeof stringResult])
stringResult = String(numberExample)
console.table([numberExample, stringResult, typeof stringResult])
stringResult = String(numberZeroExample)
console.table([numberZeroExample, stringResult, typeof stringResult])
stringResult = String(StringFalseExample)
console.table([StringFalseExample, stringResult, typeof stringResult])
stringResult = String(StringTrueExample)
console.table([StringTrueExample, stringResult, typeof stringResult])
stringResult = String(undefinedExample)
console.table([undefinedExample, stringResult, typeof stringResult])
stringResult = String(nullExample)
console.table([nullExample, stringResult, typeof stringResult])