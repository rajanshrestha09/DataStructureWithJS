// Step 1: Take data 
// Step 2: Convert data to Node
// Step 3: Add this node to head


// Consider Data as node and Array as LinkedList


// Create Node
class Node{
    constructor(data, next=null){
        this.data = data
        this.next = next
    }
}

// Create LinkedList
// if head is empty
class LinkedList{
    constructor(){
        this.head = null
    }
}