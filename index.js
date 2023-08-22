
class ListNode {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

//1: Delete elements in a linked list whose sum is equal to zero
function deleteZeroSumNodes(head) {
    let dummy = new ListNode(0);
    dummy.next = head;
    let prefixSum = 0;
    let prefixSumMap = new Map();
    prefixSumMap.set(0, dummy);

    while (head) {
        prefixSum += head.val;

        if (prefixSumMap.has(prefixSum)) {
            let prev = prefixSumMap.get(prefixSum).next;
            let temp = prev;
            let currSum = prefixSum + prev.val;

            while (temp !== head) {
                temp = temp.next;
                currSum += temp.val;
                prefixSumMap.delete(currSum);
            }

            prev.next = head.next;
        } else {
            prefixSumMap.set(prefixSum, head);
        }

        head = head.next;
    }

    return dummy.next;
}



//2: Reverse a linked list in groups of given size
function reverseInGroups(head, k) {
        let current = head;
        let prev = null;
        let next = null;
        let count = 0;
        let temp = head;
        while (count < k && temp) {
            temp = temp.next;
            count++;
        }
    
        if (count === k) {
            while (count > 0) {
                next = current.next;
                current.next = prev;
                prev = current;
                current = next;
                count--;
            }
    
            if (next) {
                head.next = reverseInGroups(next, k);
            }
    
            return prev;
        }
        return head;
    }
    


//3: Merge a linked list into another linked list at alternate positions
function mergeAlternate(head1, head2) {
        let current1 = head1;
        let current2 = head2;
    
        while (current1 && current2) {
            let temp1 = current1.next;
            let temp2 = current2.next;
    
            current1.next = current2;
            current2.next = temp1;
    
            current1 = temp1;
            current2 = temp2;
        }
    
        return head1;
    }
    


//4: Count pairs with a given sum in an array
function countPairsWithSum(arr, sum) {
    let count = 0;
    let seen = {};

    for (let num of arr) {
        let target = sum - num;
        if (seen[target]) {
            count++;
        }
        seen[num] = true;
    }

    return count;
}



//5: Find duplicates in an array
function findDuplicates(arr) {
    let duplicates = [];
    let seen = {};

    for (let num of arr) {
        if (seen[num]) {
            duplicates.push(num);
        } else {
            seen[num] = true;
        }
    }

    return duplicates;
}



//6: Find the Kth largest and Kth smallest number in an array
function findKthLargest(arr, k) {
    arr.sort((a, b) => b - a);
    return arr[k - 1];
}

function findKthSmallest(arr, k) {
    arr.sort((a, b) => a - b);
    return arr[k - 1];
}



//7: Move all negative elements to one side of the array
function moveNegativesToOneSide(arr) {
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        if (arr[left] < 0 && arr[right] < 0) {
            left++;
        } else if (arr[left] >= 0 && arr[right] < 0) {
            let temp = arr[left];
            arr[left] = arr[right];
            arr[right] = temp;
            left++;
            right--;
        } else if (arr[left] >= 0 && arr[right] >= 0) {
            right--;
        }
    }

    return arr;
}



//8: Reverse a string using a stack
function reverseString(str) {
    let stack = [];
    for (let char of str) {
        stack.push(char);
    }
    let reversed = '';
    while (stack.length > 0) {
        reversed += stack.pop();
    }
    return reversed;
}



// 9: Evaluate a postfix expression using stack
function evaluatePostfix(expression) {
        let stack = [];
        
        for (let token of expression) {
            if (!isNaN(token)) {
                stack.push(parseFloat(token));
            } else {
                let operand2 = stack.pop();
                let operand1 = stack.pop();
                switch (token) {
                    case '+':
                        stack.push(operand1 + operand2);
                        break;
                    case '-':
                        stack.push(operand1 - operand2);
                        break;
                    case '*':
                        stack.push(operand1 * operand2);
                        break;
                    case '/':
                        stack.push(operand1 / operand2);
                        break;
                }
            }
        }
        
        return stack.pop();
    }
   

//10: Implement a queue using stack
class QueueUsingStacks {
    constructor() {
        this.stack1 = [];
        this.stack2 = [];
    }

    enqueue(value) {
        this.stack1.push(value);
    }

    dequeue() {
        if (this.stack2.length === 0) {
            while (this.stack1.length > 0) {
                this.stack2.push(this.stack1.pop());
            }
        }
        return this.stack2.pop();
    }
}



//1: Delete elements in a linked list whose sum is equal to zero

let head = new ListNode(3);
head.next = new ListNode(4);
head.next.next = new ListNode(-7);
head.next.next.next = new ListNode(5);
let newHead = deleteZeroSumNodes(head);
console.log("Linked list after deleting elements with zero sum",newHead); 


//2: Reverse a linked list in groups of given size

let inputHead2 = new ListNode(1);
inputHead2.next = new ListNode(2);
inputHead2.next.next = new ListNode(3);
inputHead2.next.next.next = new ListNode(4);
inputHead2.next.next.next.next = new ListNode(5);
let k = 3;
let outputHead2 = reverseInGroups(inputHead2, k);
console.log("Linked list after reversing in groups",outputHead2); 


//3: Merge a linked list into another linked list at alternate positions

let inputHead3_1 = new ListNode(1);
inputHead3_1.next = new ListNode(3);
inputHead3_1.next.next = new ListNode(5);

let inputHead3_2 = new ListNode(2);
inputHead3_2.next = new ListNode(4);
inputHead3_2.next.next = new ListNode(6);

let mergedHead = mergeAlternate(inputHead3_1, inputHead3_2);
console.log(" Merged linked list at alternate positions",mergedHead);


//4: Count pairs with a given sum in an array

let inputArr4 = [1, 5, 7, -1, 5];
let sum4 = 6;
let outputCount4 = countPairsWithSum(inputArr4, sum4);
console.log("Number of pairs with the given sum",outputCount4);


//5: Find duplicates in an array
let inputArr5 = [4, 3, 2, 7, 8, 2, 1];
let outputDuplicates5 = findDuplicates(inputArr5);


//6: Find the Kth largest and Kth smallest number in an array
let inputArr6 = [3, 1, 4, 4, 2, 2, 5];
let k6 = 3;
let outputKthLargest6 = findKthLargest(inputArr6, k6);
let outputKthSmallest6 = findKthSmallest(inputArr6, k6);
console.log("Kth largest numbers",outputKthLargest6,"Kth smallest numbers", outputKthSmallest6); 


// 7: Move all negative elements to one side of the array

let inputArr7 = [-1, 2, -3, 4, 5, 6, -7, 8, 9];
let outputArr7 = moveNegativesToOneSide(inputArr7);
console.log("Array with negative elements moved to one side",outputArr7);


// Task 8: Reverse a string using a stack

let inputStr8 = "Hello, World!";
let outputStr8 = reverseString(inputStr8);
console.log(" Reversed string",outputStr8); 


//9: Evaluate a postfix expression using stack

let inputExpression9 = ["2", "3", "*", "5", "+"];
let outputResult9 = evaluatePostfix(inputExpression9);
console.log(" Result of the postfix expression",outputResult9); 


//10: Implement a queue using stack

let queue10 = new QueueUsingStacks();
queue10.enqueue(1);
queue10.enqueue(2);
queue10.enqueue(3);
let dequeuedValue = queue10.dequeue();
console.log(" Dequeued value from the queue",dequeuedValue); 
