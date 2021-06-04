

//console.log(primes)

function countPrimes(n){
    if (n<3){
        return 0
    }
    let sieve = Array(n).fill(true)
    sieve[0]=false
    sieve[1]=false


  
    for(let j=2; j*j<n;j++){

        if (sieve[j]){
          for (let m=0;j*j+m*j<n; m++){
            sieve[j*j+m*j] = false
          }
        }
  
      }
    let primes=[...sieve.keys()].filter((el)=>sieve[el])
    return primes.length
}

console.log(countPrimes(20))







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
