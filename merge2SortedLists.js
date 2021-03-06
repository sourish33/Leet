function d(x){
    console.log(x)
}
function ListNode(val, next) {
         this.val = (val===undefined ? 0 : val)
         this.next = (next===undefined ? null : next)
     }


function createList(arr){
    if (arr.length===0){
        return null
    }
    let h = new ListNode(arr[0])

    for (let i=1;i<arr.length;i++){
        let nextNode = new ListNode(arr[i])
        h= addNode(h,nextNode)
    }
    return h
}

function readList(list){
    if (list===null){
        return []
    }
    let node = list
    let vals = []
    while (node!==null){
        vals.push(node.val)
        node = node.next
    }
    return vals
}

///////////////////////////////////////////////////

function readVal(list, ind){
    let node = getSubNode(list, ind)
    return node === null ? null : node.val
}

function getSubNode(list, ind){
    let node = list
    let i=0
    for (i=0;i<ind;i++){  
        if (node.next===null){
            // console.log(`No index ${ind} for list of length ${i+1}`)
            return null
        } else {
            node = node.next
        }
       
    }

    return node
}

function addNode(list, node){

    if (node===null){
        return list
    }

    if (typeof(node)==='number'){
        node = new ListNode(node)
    }
    let last = findLast(list)
    if (last!==null){
        last.next=node
    }
    return list
}

function findLast(list){
    if (list === null){
        return null
    }
    if (list.next===null){
        return list
    }
    let last = list.next
    while(last.next!==null){
        last = last.next
    }
    return last
}

function findLength(list){
    if (list === null){
        return 0
    }
    if (list.next===null){
        return 1
    }
    let count = 2
    let last = list.next
    while(last.next!==null){
        last = last.next
        count++
    }
    return count
}




function mergeTwoLists(l1,l2){
    if (l1===null){
        return l2
    }
    if (l2===null){
        return l1
    }
    let N = findLength(l1)+findLength(l2)

    let i=0;
    let j=0
    let res = new ListNode("head")
    for(m=0;m<N;m++){
        let a= readVal(l1,i)
        let b= readVal(l2,j)  
        if (a===null){
            addNode(res,getSubNode(l2,j))
            return res.next

        } 
        if (b===null){
            addNode(res,getSubNode(l1,i))
            return res.next
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
            addNode(res,b)
            i++
            j++

        }
    }
    return res.next

}


let l1 = createList([5])
let l2 = createList([1,2,4])

let res = mergeTwoLists(l1,l2)
console.log(readList(res))










