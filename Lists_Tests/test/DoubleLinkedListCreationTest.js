const assert = require ("chai").assert;
const expect =  require ("chai").expect;

const doubleLinkedListCreator = require("../doubleLinkedListCreation")

describe("insertAtHead", ()=>{
    describe("add to an empty list", () =>{
        it("Adds a node at the first index of an empty list", () => {
            const newDoubleList = new doubleLinkedListCreator();
    
            newDoubleList.insertAtHead("node-1");
    
            expect(newDoubleList.head.data).to.equal("node-1"),
            expect(newDoubleList.head.next).to.be.null;
            expect(newDoubleList.length).to.equal(1);
        });
    });
    describe("add to a list with a current head", () =>{
        it("becomes the new head, sets the old head to the next node, and the old head sets the new head as its prev ", ()=>{
            const newDoubleList = new doubleLinkedListCreator();
    
            newDoubleList.insertAtHead("A");
            const oldHead = newDoubleList.head
            newDoubleList.insertAtHead("B");

            expect(newDoubleList.head.data).to.equal("B");
            expect(newDoubleList.head.next).to.equal(oldHead);
            expect(oldHead.prev).to.equal(newDoubleList.head);
            expect(newDoubleList.length).to.equal(2);
        })
    })
});
describe("insertAtTail", () => {
    //what to expect
    /**
     * if theres no head the node becomes both tail and head
     * length++
     * it should have no next
     * it should have the previous node = list's current tail
     */
    describe("added to empty list", () => {
        it("should be both the head and tail", () => {
            const newDoubleList = new doubleLinkedListCreator();

            newDoubleList.insertAtTail("A");

            expect(newDoubleList.head.data).to.equal("A");
            expect(newDoubleList.tail.data).to.equal("A");
            expect(newDoubleList.length).to.equal(1);
        });
        it("its prev and next node should return null", () => {
            const newDoubleList = new doubleLinkedListCreator();
            newDoubleList.insertAtTail("A");

            expect(newDoubleList.tail.next).to.equal(null);
            expect(newDoubleList.tail.prev).to.equal(null);
        });
    });
    describe("added to single noded list", () => {
        it("should set the head as its prev", () => {
            const newDoubleList = new doubleLinkedListCreator();
            newDoubleList.insertAtHead("A");            
            newDoubleList.insertAtTail("B");

            expect(newDoubleList.tail.prev).to.equal(newDoubleList.head);
        });
        it("should become the tail", () => {
            const newDoubleList = new doubleLinkedListCreator();
            newDoubleList.insertAtHead("A");
            
            newDoubleList.insertAtTail("B");
            expect(newDoubleList.tail.data).to.equal("B");
        });
        it("should return null for next node", () => {
            const newDoubleList = new doubleLinkedListCreator();
            newDoubleList.insertAtHead("A");
            
            newDoubleList.insertAtTail("B");
            expect(newDoubleList.tail.next).to.equal(null);
            expect(newDoubleList.length).to.equal(2);
        });
    });
})
describe("print", () =>{
   /*  describe("node has next only set", () => {
        it("prints ->", () => {
            const newDoubleList = new doubleLinkedListCreator();   
            newDoubleList.insertAtHead("A");
            newDoubleList.insertAtTail("B");
            newDoubleList.insertAtTail("C");

            expect(newDoubleList.print()).to.equal("<Head>  A -> B -> C <Tail>")
        });
    });
    describe("node has prev only set", () => {
        it("prints <-", () => {
            const newDoubleList = new doubleLinkedListCreator();
            newDoubleList.insertAtHead("A");
            newDoubleList.insertAtTail("B");
            newDoubleList.insertAtTail("C");

            expect(newDoubleList.print()).to.equal("<Head>  A <- B <- C <Tail>")
        });
    }); */
    describe("node has both next and prev set", () => {
        it("prints <->", () => {
            const newDoubleList = new doubleLinkedListCreator();
            newDoubleList.insertAtHead("A");
            newDoubleList.insertAtTail("B");
            newDoubleList.insertAtTail("C");

            expect(newDoubleList.print()).to.equal("<Head> A <-> B <-> C <Tail>")
        });
    });
});
describe("removeNodeHead", () => {
     describe("in a empty list", () => {
        it("should return null", () => {
            const newDoubleList = new doubleLinkedListCreator();

            expect(newDoubleList.removeNodeHead()).to.be.null;
        }); 
    }); 
    describe("in a n=1 list", () => {
        it("should return an empty list", () => {
            const newDoubleList = new doubleLinkedListCreator();
            newDoubleList.insertAtHead("A"); // head to remove
           
            newDoubleList.removeNodeHead();

            expect(newDoubleList.head).to.equal(null);
            expect(newDoubleList.length).to.equal(0);
        });
    });
    describe("in a list that has a head and n=2 nodes", ()=> {
        it("removes the head of the linked list", () =>{
            const newDoubleList = new doubleLinkedListCreator();
            newDoubleList.insertAtHead("A"); // head to remove
            newDoubleList.insertAtTail("B"); //new head value
            newDoubleList.insertAtTail("C");
    
            newDoubleList.removeNodeHead();
    
            expect(newDoubleList.head.data).to.equal("B");
            expect(newDoubleList.head.prev).to.be.null;
            expect(newDoubleList.length).to.equal(2);
        });
    });
});
describe("removeNodeTail", () => {
   describe("in an empty list", () => {
        it("should return null", () => {
            const newDoubleList = new doubleLinkedListCreator();

            expect(newDoubleList.removeNodeTail()).to.be.null;
        });
   });
   describe("in an n=1 list", () => {
        it("should return null", () => {
            const newDoubleList = new doubleLinkedListCreator();
            newDoubleList.insertAtHead("A"); // tail to remove
           
            newDoubleList.removeNodeTail();

            expect(newDoubleList.tail).to.equal(null);
            expect(newDoubleList.length).to.equal(0);
        });
   });
    describe("in an n=2 list", () => {
        it("should return null", () => {
            const newDoubleList = new doubleLinkedListCreator();
            newDoubleList.insertAtHead("A"); 
            newDoubleList.insertAtTail("B"); //new tail value
            newDoubleList.insertAtTail("C"); //tail to remove
    
            newDoubleList.removeNodeTail();
    
            expect(newDoubleList.tail.data).to.equal("B");
            expect(newDoubleList.tail.next).to.be.null;
            expect(newDoubleList.length).to.equal(2);
        });
   });
});
describe("getNodeByIndex", () => {
    describe("from non-existent indexes", () => {
        it("returns null", () =>{
            const newDoubleList = new doubleLinkedListCreator();

            newDoubleList.insertAtHead("A"); 
            newDoubleList.insertAtTail("B");             
            newDoubleList.insertAtTail("C"); 
    
            expect(newDoubleList.getNodeByIndex(-1)).to.be.null;
            expect(newDoubleList.getNodeByIndex(newDoubleList.length)).to.be.null;
        });
    });
    describe("index is head or tail", ()=>{
        it("should get tail or head values accordingly", ()=>{
            const newDoubleList = new doubleLinkedListCreator();

            newDoubleList.insertAtHead("A"); 
            newDoubleList.insertAtTail("B"); 
            newDoubleList.insertAtTail("C"); 
            
            expect(newDoubleList.getNodeByIndex(0)).to.equal(newDoubleList.head);
            expect(newDoubleList.getNodeByIndex(2)).to.equal(newDoubleList.tail);
         
        });
    });
    describe("index at position requested", () => {
        it("gets the node in the required position", () =>{
            const newDoubleList = new doubleLinkedListCreator();

            newDoubleList.insertAtHead("A"); 
            newDoubleList.insertAtTail("B"); 
            newDoubleList.insertAtTail("C"); 
            
            expect(newDoubleList.getNodeByIndex(1).data).to.equal("B");
        });
    });
});

describe("RemoveNodeByIndex", ()=>{
    describe("try to get from non-existent indexes", ()=>{
        it("should return null", ()=>{
            const newDoubleList = new doubleLinkedListCreator();

            newDoubleList.insertAtHead("A"); 
            newDoubleList.insertAtTail("B");             
            newDoubleList.insertAtTail("C"); 
    
            expect(newDoubleList.removeNodeByIndex(-1)).to.be.null;
            expect(newDoubleList.removeNodeByIndex(newDoubleList.length)).to.be.null;
        });
    });
    describe("node matches", ()=>{
        it("should remove the index by resetting the next and prev pointers", ()=>{
            const newDoubleList = new doubleLinkedListCreator();

            newDoubleList.insertAtHead("A"); 
            newDoubleList.insertAtTail("B"); 
            newDoubleList.insertAtTail("C"); 

            const removedNode = newDoubleList.removeNodeByIndex(1).data;

            expect(removedNode).to.equal("B");
            expect(newDoubleList.head.next.data).to.equal(newDoubleList.tail.data);
            expect(newDoubleList.tail.prev.data).to.equal(newDoubleList.head.data);
            expect(newDoubleList.length).to.equal(2);
        });
    });
}); 

