
function intToRoman(s){
    let romDict = {
        1:"I",
        4:"IV",
        5:"V",
        9:"IX",
        10:"X",
        40:"XL",
        50:"L",
        90:"XC",
        100:"C",
        400:"CD",
        500:"D",
        900:"CM",
        1000:"M",
    
    }
    if (romDict.hasOwnProperty(s)){
        return romDict[s]
    }

    let nums = Object.keys(romDict).reverse()
    let result = ""
    for (num of nums){
        if(num<=s){
            let quo = parseInt(s/num)
            for (let count=0;count<quo;count++){
                result+=romDict[num]
            }
            s=s%num
        }
    }

    return result


}

console.log(intToRoman(1194))


