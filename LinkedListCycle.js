function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
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

function createList(arr, pos=-1){
    if (arr.length===0){
        return null
    }
    let h = new ListNode(arr[0])

    for (let i=1;i<arr.length;i++){
        let nextNode = new ListNode(arr[i])
        h= addNode(h,nextNode)
    }
    if (pos!==-1){
        let last = findLast(h)
        last.next = getSubNode(h,pos)
    }
    return h
}

let u = createList([3,2,0,-4], 0)
let v = createList([1,2,3,4])

function hasCycle(h){
    let nexts = new Set()

    while (h!==null ){
        let next = h.next
        if (next === null) { 
            return false
        }
        if (nexts.has(next)){
            return true
        } else{
            nexts.add(next)
        }
        h=next  
    }
    return false
    
}

console.log(hasCycle(u))

