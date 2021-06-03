


function generateInts(n){
    let ints=[]
    for (let count=3;count<n;count++){
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
    let n =0
    let mult = 0
    while(mult<=lim){
        mult = base*base+n*base
        mults.push(mult)
        n++
    }
    return mults
}


function countPrimes(n){
    if (n<3){
        return 0
    }
    let primes = []
    let intArray = generateInts(n)
    primes.push(2)

    while (primes[primes.length-1]*primes[primes.length-1]<n){
        let pMults = generateMultiples(primes[primes.length-1],n)
        intArray = subtractArrays(intArray, pMults)
        primes.push(intArray.shift())
    }
    primes = primes.concat(intArray)
    return primes.length
}

console.log(countPrimes(49979))
