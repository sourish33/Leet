
function twoSum(nums, target){

    let partners = nums.map((el)=>{
        return target-el
    })

    let numMap = new Map()

    for (let i=0;i<nums.length;i++){
        numMap.set(nums[i],i)
    }

    for (let i=0;i<nums.length;i++){
        if (numMap.has(partners[i]) && i!==numMap.get(partners[i])){
                return([i,numMap.get(partners[i])])
        }
    }

}

console.log(twoSum([3,2,4],6))



// let partnerMap = new Map()

// for (let i=0;i<nums.length;i++) {
//     partnerMap.set(nums[i],partners[i])
// }

// for (let key of partnerMap.keys()) {
//     let partner = partnerMap.get(key)
//     if (key+partner===target && nums.indexOf(partner)!==-1){
//         console.log(`a: ${nums.indexOf(key)}, b:${nums.indexOf(partner)}`)
//     }
// }

// function twoSum(nums, target) {
//     let partners = nums.map((el)=>{
//         return target-el
//     })

//     let partnerMap = new Map()

//     for (let i=0;i<nums.length;i++) {
//         partnerMap.set(nums[i],partners[i])
//     }

//     for (let key of partnerMap.keys()) {
//         let partner = partnerMap.get(key)
//         let keyIndex = nums.indexOf(key)
//         let partnerIndex = partners.indexOf(partner)
//         //this leads to a problem if partner and key have the same numerical value, since then indexOf will give the same  value so
//         partnerIndex = partnerIndex === keyIndex ? partnerIndex=nums.indexOf(partner,partnerIndex+1) : partnerIndex
//         if (key+partner===target && partnerIndex!==-1){
//             return [keyIndex, partnerIndex]
//         }
//     }
// }
// ///////fix the following
// console.log(twoSum([3,5,3,10,3],6))