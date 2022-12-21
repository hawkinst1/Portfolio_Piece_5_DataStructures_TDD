//this will create the node that will link to another
class Node {
    constructor(data){
        this.data = data;
        this.next = null;
        this.prev = null;
    }

    setNextNode(node){     
        if(node instanceof Node || node == null){ //if node is made via: const x = new Node(data)
            this.next = node; //calling this method on a node will set its next node to be what is passed in
        } else {
            throw new Error("Next node must be a member of the Node class");
        }
    }
    setPreviousNode(node){     
        if(node instanceof Node || node == null){ //if node is made via: const x = new Node(data)
            this.prev = node; //calling this method on a node will set its next node to be what is passed in
        } else {
            throw new Error("prev node must be a member of the Node class");
        }
    }
    getNextNode(){
        return this.next;
    }
    getPreviousNode(){
        return this.prev;
    }
}

module.exports = Node;