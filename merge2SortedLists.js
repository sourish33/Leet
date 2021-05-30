function d(x){
    console.log(x)
}
function ListNode(val, next) {
         this.val = (val===undefined ? 0 : val)
         this.next = (next===undefined ? null : next)
     }

function findLast(list){
    if (list.next===null){
        return list
    }
    let last = list.next
    while(last.next!==null){
        last = last.next
    }
    return last
}

function addNode(list, node){

    if (typeof(node)==='number'){
        node = new ListNode(node)
    }
    let last = findLast(list)
    if (last!==null){
        last.next=node
    }
    return list
}




function createList(arr){
    let h = new ListNode(arr[0])

    for (let i=1;i<arr.length;i++){
        let nextNode = new ListNode(arr[i])
        h= addNode(h,nextNode)
    }
    return h
}

function readVal(list, ind){
    // let node = list
    // let i=0
    // for (i=0;i<ind;i++){  
    //     if (node.next===null){
    //         console.log(`No index ${ind} for list of length ${i+1}`)
    //         return null
    //     } else {
    //         node = node.next
    //     }
       
    // }

    // return node.val
    let node = getSubNode(list, ind)
    return node === null ? null : node.val
}

function getSubNode(list, ind){
    let node = list
    let i=0
    for (i=0;i<ind;i++){  
        if (node.next===null){
            console.log(`No index ${ind} for list of length ${i+1}`)
            return null
        } else {
            node = node.next
        }
       
    }

    return node
}

function readList(list){
    let node = list
    let vals = []
    while (node!==null){
        vals.push(node.val)
        node = node.next
    }
    return vals
}

let l1 = createList([1,2,5,8])
let l2 = createList([3,4,9,11])
console.log(readList(l1))
console.log(readList(l2))


let i=0;
let j=0
let res = new ListNode("head")
for(m=0;m<7;m++){
    let a= readVal(l1,i)
    let b= readVal(l2,j)  
    if (a===null){
           addNode(res,getSubNode(l2,j))
           break

    } 
    if (b===null){
           addNode(res,getSubNode(l1,j))
           break
    } 
    if(a<b){
        addNode(res,a)
        i++
    }
    else if(a>b){
        addNode(res,b)
        j++
    } else{
        addNode(res,a)
        i++
        j++

    }
}

console.log(readList(res.next))

console.log(readVal(l1,4)===null)






