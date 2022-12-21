const Node = require("./nodeCreation");

class LinkedList{
    constructor(){
        this.head = null;
        this.length = 0;
    }
    insertAtHead(data){
        const newHead = new Node(data);
        const currentHead = this.head;
        this.head = newHead;
        if(currentHead){
            this.head.setNextNode(currentHead);
        }
        this.length++;
    }
    getNodeByIndex(index){
        if(index < 0 || index >= this.length){
            return null;
        }
        let currentNode = this.head;
        for(let a = 0; a < index; a++){
            currentNode = currentNode.next;
        }
        return currentNode;
    }
    insertAtTail(data){
        let tail = this.head // if null then no head and list is empty
        if(!tail){ //it tail doesnt exist its because no head exists
            this.head = new Node(data);
        } else {
            while (tail.getNextNode() != null){ // while the next node is present
                tail = tail.getNextNode(); // set the tail as the nextnode(), eventually this will fail when we reach the end
            }
            tail.setNextNode(new Node(data)); // new node is made with the data
        }
        this.length++;
    }

    removeNodeHead(){
     const removedHead = this.head;
     if(!removedHead){
        return;
     }
     this.head = removedHead.getNextNode();
     this.length--;
     return removedHead.data;
    }
    
    removeNodeTail(){
        const theOneBeforeTheTailToBeRemoved = this.getNodeByIndex((this.length-2));
        if(this.length <= 1) return null;
        //maybe we should add a getPreviousNode()?

        theOneBeforeTheTailToBeRemoved.next = null;
        this.length--;
    }
    print(){
        if(!this.head) console.log("This list is empty");
        let currentNode = this.head // starting at the "front"
        let output = "";

        while(currentNode != null){ //whilst there is a current node
           if(currentNode.getNextNode() == null){
            output += currentNode.data;
           }
            else{
                output += currentNode.data + " -> ";
            }
            currentNode = currentNode.getNextNode();
        }
        
        console.log(output);
    }
}

module.exports = LinkedList;