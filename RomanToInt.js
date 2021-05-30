

function romanToInt(s){
    let romDict = {"I":1, "V":5, "X":10, "L":50, "C":100, "D":500, "M": 1000, 
                    "a": 4,
                    "b": 9,
                    "c": 40,
                    "d": 90,
                    "e": 400,
                    "f": 900
                    }
    if (romDict.hasOwnProperty(s)){
        return romDict[s]
    }
    
    s = s.replace(/IV/g, 'a');
    s = s.replace(/IX/g, 'b');
    s = s.replace(/XL/g, 'c')
    s = s.replace(/XC/g, 'd');
    s = s.replace(/CD/g, 'e')
    s = s.replace(/CM/g, 'f');;

    let letters = s.split('')
    let chars = s.split('')
    const reducer = (accumulator, currentValue) => accumulator + romDict[currentValue]
    return chars.reduce(reducer, initialValue=0);

}


console.log(romanToInt("XLV"))

// console.log(romAdd("X", "D"))
// let romDict = {"I":1, "V":5, "X":10, "L":50, "C":100, "D":500, "M": 1000, 
// "IV":5, 
// "IX":9, 
// "XL":40,
// "XC":90,
// "CD":400,
// "CM":900}
// let s="VXII"
// console.log(romDict.hasOwnProperty(s))
// let chars = s.split('')
// console.log(chars)
// const reducer = (accumulator, currentValue) => accumulator + romDict[currentValue]
// console.log(chars.reduce(reducer, initialValue=0));