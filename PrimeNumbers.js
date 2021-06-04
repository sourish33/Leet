let n =10
let spots = Array(n).fill(true)
spots[0]=false
spots[1]=false
spots[2]=false

let primes = [2]
let lastPrime = 2


while(lastPrime*lastPrime<=n){
    let i=1
    while (lastPrime*i<=n){
        spots[lastPrime*i]=false
        i++
    }
    nextPrime = spots.indexOf(true)
    primes.push(nextPrime)
    lastPrime = primes[primes.length-1]
    spots[nextPrime]=false
    }
    // console.log(primes)
    // console.log(spots)
let remainders=[...spots.keys()].filter((el)=>spots[el])
primes = primes.concat(remainders)
console.log(primes)







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
