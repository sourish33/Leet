

//console.log(primes)

function countPrimes(n){
    if (n<3){
        return []
    }
    let sieve = Array(n).fill(true)
    sieve[0]=false
    sieve[1]=false
    sieve[2]=false

    let primes = [2]
    let lastPrime = 2


    while(lastPrime*lastPrime<=n){
        let i=1
        while (lastPrime*i<=n){
            sieve[lastPrime*i]=false
            i++
        }
        nextPrime = sieve.indexOf(true,lastPrime)
        primes.push(nextPrime)
        lastPrime = nextPrime
        sieve[nextPrime]=false
        }
        // console.log(primes)
        // console.log(sieve)
    let remainders=[...sieve.keys()].filter((el)=>sieve[el])
    primes = primes.concat(remainders)
    return primes
}

console.log(countPrimes(53))







// function generateMultiples(base, lim){
//     let mults = []
//     let n =0
//     let mult = 0
//     while(mult<=lim){
//         mult = base*base+n*base
//         mults.push(mult)
//         n++
//     }
//     return mults
// }


// function countPrimes(n){
//     if (n<3){
//         return 0
//     }
//     let primes = []
//     let intArray = generateInts(n)
//     primes.push(2)

//     while (primes[primes.length-1]*primes[primes.length-1]<n){
//         let pMults = generateMultiples(primes[primes.length-1],n)
//         intArray = subtractArrays(intArray, pMults)
//         primes.push(intArray.shift())
//     }
//     primes = primes.concat(intArray)
//     return primes.length
// }

// console.log(countPrimes(49979))
