function TreeNode(val, left, right) {
         this.val = (val===undefined ? 0 : val)
        this.left = (left===undefined ? null : left)
        this.right = (right===undefined ? null : right)
    }



function sortedArrayToBST(arr){

    if (arr.length>1){
        let mid = Math.floor(arr.length/2)
        let ll = arr.slice(0,mid)
        let rr = arr.slice(mid+1, arr.length)
        return new TreeNode(arr[mid], sortedArrayToBST(ll), sortedArrayToBST(rr))
    }

    if (arr.length===1){
        return new TreeNode(arr[0])
    }

}


//Some rando's implementation
var chor = function(nums) {
    if (nums.length == 0) return null;
    // build the actual tree
    let build = (l = 0, r = nums.length) => {
        if (r <= l) return null;
        // build current node
        let m = Math.trunc((l + r) / 2);
        let node = new TreeNode(nums[m], null, null);
        // divide & conquer
        [node.left, node.right] = [build(l, m), build(m+1, r)];
        return node;
    }
    return build();
};



