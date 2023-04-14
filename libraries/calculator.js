// module 5 - pg 51 - 53
//class is used to make objects like a blueprint 
class Calculator {

    constructor() {
        this.id=Date.now()
    }

    // log is a private method (Can only be called from inside the function)
    #log=(value)=>{
        console.log(`[Calculator:${this.id}]:${value}`)
    }

    add(num1, num2) {
        const value=num1+num2
        this.#log(value)        //private method 
        return value
    }
}
/* EXERCISE 6 PART 2
function generateRandomId() {
    const randomNumber = Math.floor(Math.random() * 1000000);
    return randomNumber.toString();
  }
  */
module.exports=Calculator