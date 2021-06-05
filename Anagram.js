function isAnagram(s,t){

    if (s.length!==t.length){
        return false
    }

    let anaMap = new Map
    for (let char of s){
        anaMap.has(char) ? anaMap.set(char, anaMap.get(char)+1) : anaMap.set(char, 1) 
    }

    
    for (let char of t){
        if (!anaMap.has(char)) {return false}
        else{
            anaMap.set(char, anaMap.get(char) -1 ) 
        } 
    }

    for (let key of anaMap.keys()){
        if (anaMap.get(key)!==0){
            return false
        }
 
    }
    return true


}

console.log(isAnagram("nacthu","nautch"))




