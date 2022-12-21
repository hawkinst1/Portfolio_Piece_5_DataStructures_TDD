const linkedList = require("./LinkedListCreation");

class queue{
    constructor(maxSize = Infinity){
        this.queue = new linkedList();
        this.size = 0;
        this.maxSize = maxSize;
    }
    isEmpty = () => {
        return this.size === 0;
    }
    hasRoom = () => {
        return this.size < this.maxSize;
    }
    enqueue =(data) => {
       if(!this.hasRoom()) throw new Error("Queue is full, cannot add.");
    
       this.queue.insertAtTail(data);
       this.size++;
    }
    dequeue = () => {
        if(this.isEmpty()) throw new Error("Nothing in the queue to remove.");

        const data = this.queue.removeNodeHead();
        this.size--;
        console.log(`Removed ${data} from the queue, size: ${this.size}`);
        return data;

    }
    
}

module.exports = queue;