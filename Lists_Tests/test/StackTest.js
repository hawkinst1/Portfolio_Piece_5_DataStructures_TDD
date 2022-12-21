const assert = require ("chai").assert;
const expect =  require ("chai").expect;
const Stack = require("../StackCreation");

describe('addToStack', () => { 
    describe('to empty stack', () => {  
        it("will be the top stack node and increase the length", () => {
            const stack = new Stack();
            const values = ["value 1"];
            stack.addToStack(values[0]);

            expect(stack.stack.head.data).to.equal(values[0]);
            expect(stack.size).to.equal(1)
        });
    });
    describe('to n>1 stack', () => {  
        it("will be the top stack node and increase the length", () => {
            const stack = new Stack();
            const values = ["value 1","value 2"];
            stack.addToStack(values[0]);
            stack.addToStack(values[1]);

            expect(stack.stack.head.data).to.equal(values[1]);
            expect(stack.size).to.equal(2)
        });
    });
    describe('to full stack', () => {  
        it("will be rejected from by the stack and not increase the length", () => {
            const stack = new Stack(1);
            const msg = "Cannot add, the stack is full";
            const values = ["value 1","value 2"];
            stack.addToStack(values[0]);
        
            expect(stack.addToStack(values[1])).to.equal(msg);
            expect(stack.size).to.equal(1);
        });
    });
});
describe('peekTopOfStack', () => { 
    describe('empty stack', () => { 
        it("should return null", () => {
            const stack = new Stack();

            expect(stack.topStack).to.be.null;
        });
    });
    describe('n <=1 node stack', () => {
        it("should reveal the topStack", () => {
            const stack = new Stack();
            const values = ["value 1","value 2"];
            stack.addToStack(values[0]);
            stack.addToStack(values[1]); // is the topstack value
            
            expect(stack.peekTopOfStack()).to.equal(values[1]);
        });
    });
});
describe('RemoveStack', () => {
    describe('empty stack', () => {
        it("returns null", () => {
            const stack = new Stack();
            
            expect(stack.removeStack()).to.equal(null);
        });
    });
    describe('n = 1 stack', () => {
        it("stack becomes empty ", () => {
            const stack = new Stack();
            const values = ["value 1"];
            stack.addToStack(values[0]);
            stack.removeStack();
            expect(stack.topStack).to.equal(null);
            expect(stack.size).to.equal(0);
        });
    });
    describe('n > 1 stack', () => {
        it("Top stack is removed, next is set to top and size decreases", () => {
            const stack = new Stack();
            const values = ["value 1","value 2"];
            stack.addToStack(values[0]);
            stack.addToStack(values[1]); // is the topstack value
            
            stack.removeStack();
            
            expect(stack.peekTopOfStack()).to.equal(values[0]);
            expect(stack.size).to.equal(1);
        });
    });
});
