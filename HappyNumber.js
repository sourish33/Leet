//Make a function that splits digits, squares and adds

function tryToMakeHappy(n){
    let nStr = n.toString().split('')
    let digits=nStr.map((el)=>parseInt(el))
    let sumOfSquares=digits.reduce((acc, cur) => { 
        return acc+cur*cur
     }, 0 )
    return sumOfSquares
 }


 function happyNumber(n) {
    let results = new Set
    let h = tryToMakeHappy(n)
    while (h!==1){
        
        if (results.has(h)){
            return false
        } else{
            results.add(h)
        }
        h = tryToMakeHappy(h)
    }
    return true
 }


 console.log(happyNumber(97))