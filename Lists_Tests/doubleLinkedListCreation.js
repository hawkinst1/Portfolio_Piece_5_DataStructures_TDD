const Node = require("./nodeCreation");

class doubleLinkedListCreator{
    constructor(){
        this.head = null,
        this.tail = null,
        this.length = 0 
    }
    insertAtHead(data){
        const newHead = new Node(data); // the freshly baked nodes
        
        const headAtTheMoment = this.head; // shouldnt equal the new head yet
        
        if(headAtTheMoment){
           headAtTheMoment.setPreviousNode(newHead); // setting the old head's next to the freshly baked node
           newHead.setNextNode(headAtTheMoment); // setting the new heads next as our old head.
        } // no else, so as to always add the new head
        this.head = newHead; // sets the freshly baked node as the head for the next iteration.
        if(!this.tail){
            this.tail = newHead;
        }
        this.length++;
    }
    insertAtTail(data){
        const newTail = new Node(data);
        const currentTail = this.tail;

        if(currentTail){
            currentTail.setNextNode(newTail);
            newTail.setPreviousNode(currentTail);
        }
        this.tail = newTail;
        if(!this.head){
            this.head = newTail;
        }
        this.length++;
    }
    removeNodeHead(){
        const headToRemove = this.head;
        if(!headToRemove)return null;

        if(this.length == 1){
            this.head = null
            this.length--;
        } else{
            this.head = headToRemove.getNextNode();
            this.head.setPreviousNode(null);
            this.length--;
        } 
        return headToRemove.data;
    }
    removeNodeTail(){
        const tailToRemove = this.tail;
        
        if(!tailToRemove)return null;
        if(this.length == 1){
            this.tail = null
            this.length--;
        }else{
            this.tail = tailToRemove.getPreviousNode();
            this.tail.setNextNode(null);
            this.length--;
        }
        return tailToRemove.data;
    }
    getNodeByIndex(index){
        if(index < 0 || index >= this.length) return null;
        let currentNode = this.head;

        for (let a = 0; a < index; a++) {
          currentNode = currentNode.getNextNode();        
        }
        return currentNode;
    }
    removeNodeByIndex(index){
        if(index < 0 || index >= this.length) return null;
        let nodeToRemove;
        let currentNode = this.head;

        for (let a = 0; a < index; a++) {
            currentNode = currentNode.getNextNode();
            nodeToRemove = currentNode;
        }
       
        if(nodeToRemove == this.head){
            this.removeNodeHead(); 
        } else if(nodeToRemove == this.tail){
            this.removeNodeTail(); 
        } else{
            const nextNode = nodeToRemove.getNextNode();
            const previousNode = nodeToRemove.getPreviousNode();

            nextNode.setPreviousNode(previousNode);
            previousNode.setNextNode(nextNode);
        }
        this.length--;
        return nodeToRemove;
    }
    print(){
        let currentNode = this.head;
        let output = "<Head> ";

        while(currentNode != null){
            if(currentNode.next == null){
                output+= currentNode.data
            } else{
            output+= currentNode.data + " <-> ";
            }
            currentNode = currentNode.getNextNode();
        }
        output+=" <Tail>";
        console.log(output);
        return output;
    }
}

module.exports = doubleLinkedListCreator;