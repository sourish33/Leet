


function generateInts(n){
    let ints=[]
    for (let count=3;count<n+1;count++){
        ints.push(count)
    }
    return ints
}

function subtractArrays(m, n){
    //longer array first, shorter array second
    return m.filter((p)=>!n.includes(p))
}




function generateMultiples(base, lim){
    let mults = []
    let n =1
    let mult = 0
    while(mult<=lim){
        mult = n*base
        mults.push(mult)
        n++
    }
    return mults
}

let n=37


// console.log(primes)


function countPrimes(n){
    let primes = []
    let intArray = generateInts(n)
    primes.push(2)

    while (intArray.length>0){
        let pMults = generateMultiples(primes[primes.length-1],n)
        intArray = subtractArrays(intArray, pMults)
        console.log(primes)
        console.log(intArray)
        primes.push(intArray.shift())
    }
    return primes
}

console.log(countPrimes(20))
