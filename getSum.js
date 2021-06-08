let a=3
let b=-2

// function Car(make, model, year) {
//     this.make = make;
//     this.model = model;
//     this.year = year;
//   }

function Num(){
    this.pos =[]
    this.neg =[]
    this.addone = function(){
        if (this.neg.length>0){
            this.neg.pop()
        } else{
            this.pos.push(true)
        }
    }
    this.subtractone = function(){
        if (this.pos.length>0){
            this.pos.pop()
        } else{
            this.neg.push(true)
        }
    }
    this.result = function(){
        if (this.pos.length===0 && this.neg.length===0){
            return 0
        }
        if (this.pos.length>0){
            return this.pos.length
        } else{
            return -this.neg.length
        }
    }  

}
  

function getSum(a,b){
    let num = new Num
    let aArray = Array(Math.abs(a)).fill(true)
    let bArray = Array(Math.abs(b)).fill(true)
    if (a>0){
        while(aArray.length>0){
            num.addone()
            aArray.pop()
        }
    }
    if (a<0){
        while(aArray.length>0){
            num.subtractone()
            aArray.pop()
        }
    }
    if (b>0){
        while(bArray.length>0){
            num.addone()
            bArray.pop()
        }
    }
    if (b<0){
        while(bArray.length>0){
            num.subtractone()
            bArray.pop()
        }
    }

    return num.result()
}

console.log(getSum(-10,1))

