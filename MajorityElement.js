

//Awful O(n^2 implementation)
function countInstances(arr, instance) {
    return arr.filter((el)=>el===instance).length
}


function MajorityElement(arr){
    let uniques = new Set(arr)
    let threshold = Math.floor(arr.length/2)
    for (el of uniques){
        if (countInstances(arr, el)>threshold){
            return el
        }
    }
    console.log("Maj El doesn't exist")
    return null
}

nums = [3,2,3]
// console.log(MajorityElement(nums))


///Better O(n) implementation

let freqs = new Map
for (el of nums){
    if (freqs.has(el)){
        freqs.set(el, freqs.get(el)+1)
    } else{
        freqs.set(el,1)
    }
}

function getFrequencies(arr){
    let freqs = new Map
    for (el of arr){
        if (freqs.has(el)){
            freqs.set(el, freqs.get(el)+1)
        } else{
            freqs.set(el,1)
        }   
    }
    return freqs
}

function majorityElement(arr){
    let freqMap = getFrequencies(arr)
    let n = Math.floor(arr.length/2)
    
    for (let key of freqMap.keys()) {
        if (freqMap.get(key)>n){
            return key
        }
    }
    return null

}

let myMap = getFrequencies(nums)
let n = Math.floor(nums.length/2)
console.log(majorityElement(nums))

myMap
console.log(myMap.get(2)>n)

console.log(n)




