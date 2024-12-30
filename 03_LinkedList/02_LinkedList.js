// Create Node
class Node{
    constructor(data, next=null){
        this.data = data
        this.next = next
    }
}

// Create LinkedList
class LinkedList{
    constructor(){
       this.head = null
    }
}

// Insert at the start/head
LinkedList.prototype.insertAtBegining = function(data){
    const newNode = new Node(data)
    this.head = newNode
}