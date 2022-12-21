class linkedList {
    constructor(){
        this.head = null;//first element in the list and references the next element
        this.length = 0; // keep track as we mutate the list.
    }
//add data to the head
  insertAtHead(data){
//take current head and replace it, then chnage the list so it references the new list 
        const newNode = new LinkedListNode(data, this.head) //(value, next)
        this.head = newNode; // this.head is the current head which now has the newNode value
        this.length++; // one element longer so it needs to increase
    }
    getByIndex(index){
        if(index < 0 || index >= this.length){ 
        return null;
        }

        let current = this.head;
        for(let i = 0; i < index; i++){
            current = current.next
        }
        return current;
  }
}
//for each element and the reference tracker
class LinkedListNode {
    constructor(value, next) { //value will be added
        this.value = value;
        this.next = next;
    }
}

//makes a list from inpput array
linkedList.fromValues = function(...values){
    const ll = new linkedList();
    for(let a = values.length -1; a >= 0; a--){
        ll.insertAtHead(values[1]);
    }
}

module.exports = linkedList;