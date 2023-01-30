// import _ from 'lodash';
import './style.css';

const content = document.getElementById('content');

const board = document.createElement('div');

// Generates traditional 8x8 chess board to visually represent knight's moves and provides user a simple "point and click" UI
const chessBoard = (() => {
    for (let i = 0; i < 8; i++){
        let boardRow = document.createElement('div');
        boardRow.classList.add('row');
        boardRow.setAttribute('row', i);
        function spaceCreate (){
            for(let k = 0; k < 8; k++){
                const space = document.createElement('div');
                space.classList.add('column');
                space.setAttribute('column', k);
                boardRow.append(space);
            }
        }
        spaceCreate();
        content.append(boardRow);
    }
})


const directions = [[-2,-1], [-2,1], [-1,2], [1,2], [2,1], [2,-1], [1,-2], [-1,-2]];

// Knight class to store knight's current location (via its row and column), as well as its destination coordinates
class Node {
    constructor(row, col, distance){
        this.row = row;
        this.col = col;
        this.distance = distance;
    }

    getPositionToString(){
        return `${this.row}, ${this.col}`;
    }
}

// will take the current row and col, and try to make a move in any of the possibleMoves available
const getCurrentNeighbors = (row, col) => {
    // Create empty array to house neighbors
    const neighbors = [];

    // loop through possibleMoves array assigning either coordinate (rowChange, colChange) to a direction
    for (const direction of directions){
        const [rowChange, colChange] = direction;

        // Assign neighborRow and neighborCol via the row/col in addition to their respective change amounts
        const neighborRow = row + rowChange;
        const neighborCol = col + colChange;

        neighbors.push([neighborRow, neighborCol]);
    }
    // return list of neighbots
    return neighbors;
}

// Create function that takes in the knight's current location and it's destination coordinates, and uses breadth first traversal (level order) to scan the nodes created for the shortest path to the destination
function knightMoves (destinationRow, destinationCol){
    // Create queue to house nodes that are processed in a FIFO fashion
    const queue = [];
    // Generate starting node (knight) with "center" coordinates and no destination yet
    const startNode = new Node (0, 0, 0);
    // Push knight into queue
    queue.push(startNode);

    // Create new Set to house visited nodes to avoid infinite cycles
    const visited = new Set();

    // While loop tracks length of queue and continues as long as its length is greater than 0
    while(queue.length > 0){
        // Remove first node from queue
        const node = queue.shift();
        // Destructure properties of knight class to current node
        const { row, col, distance } = node;

        // Process node

        // if the destination row and column are equivalent to the row and column of the knight, return the distance
        if(row === destinationRow && col === destinationCol){
            return distance;
        }
        visited.add(node.getPositionToString());

        // Add neighbors

        for(const neighbor of getCurrentNeighbors(row, col)) {
            // Use array destructuring to get neighbor coordinates
            const [neighborRow, neighborCol] = neighbor;
            const neighborNode = new Node(neighborRow, neighborCol, distance + 1);

            // Pass in Current Neighbor Node with getPositionToString method, that will return a specific string that identifies a node on its location
            if(visited.has(neighborNode.getPositionToString())) continue;

            // push current neighbor onto queue to be processed
            queue.push(neighborNode);
        }
    }
}

console.log(knightMoves(3,4));






// At start of app, call chessBoard function to generate board, then use Knight class to create a new knight at the "center" area of chessboard.
// will impliment user choice of starting location through newer iteration
chessBoard();



// Add event listener to respond to user's click action to receive data to assign the target destination of the knight to it's created class.
document.addEventListener('click', function(event){
    // let destCol = event.target.getAttribute('column');
    // let destRow = event.target.parentNode.getAttribute('row');
    // console.log(destRow);
    // console.log(destCol);
    // knight.destCoor = [destRow, destCol];
    // console.log(knight.destCoor);
    // console.log(knightMoves(destRow, destCol));
})