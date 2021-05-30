// function isValid(s){
//     while(s.includes("[]") || s.includes("()") || s.includes("{}")){
//         if (s.includes("[]")){
//             s=s.replace("[]",'')
//         }
//         if (s.includes("{}")){
//             s=s.replace("{}",'')
//         }
//         if (s.includes("()")){
//             s=s.replace("()",'')
//         }
//     }
//     return (s==='')
// }

function doesMatch(a,b){
    if (a==="(" && b===")"){
        return true
    }
    if (a==="{" && b==="}"){
        return true
    }
    if (a==="[" && b==="]"){
        return true
    }
    return false
}



function isValid(s){
    let stack =[]

    for (let i=0;i<s.length;i++){
        let last = stack.slice(-1)[0]
        let nnew = s[i]
        if (doesMatch(last,nnew)){
            stack.pop()
        } else{
            stack.push(nnew)
        }

    }
    return stack.length===0
}
let s="([])[{}]{"
// let stack=["("]
// console.log(s[1])
// console.log(stack.slice(-1)[0])
// console.log(doesMatch(stack.slice(-1)[0],s[1]))
// console.log(stack.slice(-1))


console.log(isValid(s))


