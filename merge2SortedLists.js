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

    return node.val
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

let l1 = createList([1,2,5,6])
let l2 = createList([1,3,4])

// let u=readVal(l2,2)
//console.log(u)

// let node = l1
// node=node.next
// d(node.val)
// node=node.next
// d(node.val)

console.log(readVal(l1,4))


// let i=0;
// let j=0
// let res = new ListNode("head")
// for (let m=0;m<4;m++){
//     let a= readVal(l1,i)
//     let b= readVal(l1,j)
//     if(a<b){
//         addNode(res,a)
//         i++
//     }
//     if(a>b){
//         addNode(res,b)
//         j++
//     } else{
//         addNode(res,a)
//         i++
//         j++

//     }

// }
// d(readVal(res,0))






// let n1 = new ListNode(3)
// let n2 = new ListNode(4)
// let n3 = new ListNode(5)
// let n4 = new ListNode(6)
// let n5 = new ListNode(16)

// h=addNode(h, n1)
// h = addNode(h,n2)
// h = addNode(h,n3)
// h = addNode(h,n4)
// h = addNode(h,n5)


