const linkedList = require("./LinkedListCreation");

class Stack{
    constructor(maxStack = Infinity){
        this.stack = new linkedList();
        this.topStack = null;
        this.size = 0;
        this.maxStack = maxStack;
    }

    hasRoom = () => {
        return this.size < this.maxStack;
    }
    addToStack = (data) =>{
        const msg = "Cannot add, the stack is full";
        if(!this.hasRoom()){console.log(msg); return msg;}
        
        this.stack.insertAtHead(data);
        this.topStack = data;
        this.size++;
    }
    peekTopOfStack(){
        this.topStack = this.stack.head.data;
        return this.topStack;
    }
    removeStack(){
        if(this.size == 0) return null;
        const value = this.stack.removeNodeHead();

        if(this.size == 1 ) {
            this.topStack = null;
        } else {
            this.topStack = this.stack.head.next;
        }
        this.size--;
        return value;
    }
    printStack(){
      let stackPrint = this.stack.print();
    }
}
module.exports = Stack;