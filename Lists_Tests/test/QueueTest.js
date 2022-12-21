const assert = require ("chai").assert;
const expect =  require ("chai").expect;

const queueCreation = require("../QueueCreation");

describe('enqueue', () => { 
    describe('to an empty queue', () => { 
        it("should add to the tail", () => {
            const value = "Person 1";
            const q1 = new queueCreation();
            q1.enqueue(value);

            expect(q1.queue.head.data).to.equal(value);
            expect(q1.size).to.equal(1);
        });
    });
    describe('to a n=1 length queue', () => {
        it("should add to the tail, next should be the previous head", () => {
            const value = "Person 1";
            const value2 = "Person 2";
            const q1 = new queueCreation();
            q1.enqueue(value);
            q1.enqueue(value2);

            expect(q1.queue.head.next.data).to.equal(value2);
            expect(q1.size).to.equal(2);
        });
    });
   /*  describe('overflow potential', () => {
        it("should not allow the node to be added and return a message", () => {
            const value = "Person 1";
            const value2 = "Person 2";
            const value3 = "Person 3";
            const error = "Queue is full, cannot add."
            const q1 = new queueCreation(2);
            q1.enqueue(value);
            q1.enqueue(value2);

            expect(q1.enqueue(value3)).to.throw(error);
            expect(q1.size).to.equal(2);
        });
    }); */
});

describe('dequeue', () => {
    /* describe('empty queue', () => {
        it("should return an error", () =>{
            
        });
    }); */
    describe('a single node queue', () => {
        it("should return an empty list", () => {
            const value = "Person 1";
            const q1 = new queueCreation();
            q1.enqueue(value);
            q1.dequeue();
            expect(q1.queue.head).to.be.null;
        });
    });
    describe('a multi node queue', () => {
        it("should remove the head node", () => {
            const value = "Person 1";
            const value2 = "Person 2";
            const q1 = new queueCreation();
            q1.enqueue(value);
            q1.enqueue(value2);
         
            q1.dequeue();
            expect(q1.queue.head.data).to.equal(value2);

        });
    });
});