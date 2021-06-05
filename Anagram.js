function isAnagram(s,t){

    if (s.length!==t.length){
        return false
    }

    let anaMap1 = new Map
    for (let char of s){
        anaMap1.has(char) ? anaMap1.set(char, anaMap1.get(char)+1) : anaMap1.set(char, 1) 
    }

    
    let anaMap2 = new Map
    for (let char of t){
        anaMap2.has(char) ? anaMap2.set(char, anaMap2.get(char)+1) : anaMap2.set(char, 1) 
    }

    for (let key of anaMap1.keys()){
        if (!anaMap2.has(key)){
            return false
        } else{
            if (anaMap1.get(key)!==anaMap2.get(key)){
                return false
            }
        }

    }
    return true


}
console.log(isAnagram("maan","naam"))




