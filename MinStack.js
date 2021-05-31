var MinStack = function() {

    this.stack=[]
    
};

/** 
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function(val) {

    this.stack.push(val)
    
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    this.stack.pop()
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {

    return this.stack[this.stack.length-1]
    
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {

   return Math.min(...this.stack)
    
};


let ms = new MinStack
ms.push(332)
ms.push(43)
ms.push(62)
ms.push(61)

console.log(ms.top())