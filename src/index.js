// import _ from 'lodash';
import './style.css';

const content = document.getElementById('content');

const board = document.createElement('div');

const possibleMoves = [[-1, 2], [-2, 1], [-1, -2], [-2, -1], [1, 2], [2, 1], [1, -2], [2, -1]];

// Knight class to store knight's current location (via its row and column), as well as its destination coordinates
class Node {
    constructor(row, col, distance){
        this.row = row;
        this.col = col;
        this.distance = distance;
    }
}

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

function getCurrentNeighbors(){

}

// Create function that takes in the knight's current location and it's destination coordinates, and uses breadth first traversal (level order) to scan the nodes created for the shortest path to the destination
function knightMoves (knightLocation, knightDestination) {
    // Create queue to house nodes that are processed in a FIFO fashion
    const queue = [];
    // Generate starting node (knight) with "center" coordinates and no destination yet
    const knight = new Node(3, 3, 0);
    // Push knight into queue
    queue.push(knight);

    // Create new Set to house visited nodes to avoid infinite cycles
    const visited = new Set();

    // While loop tracks length of queue and continues as long as its length is greater than 0
    while(queue.length > 0){
        // Remove first node from queue
        const current = queue.shift();
        // Destructure properties of knight class to current node
        const { row, col, distance } = current;

        // Process node
        
        // Add neighbors
        for (const neighbpr of getCurrentNeighbors(row, col)){
            // Use array destructuring to get neighbor coordinates
            const [neighborRow, neighborCol] = neighbor;

            // Check if neighboring node is outside of the board's boundaries
            if (neighborRow < 0 || neighborCol < 0){
                return;
            }
            if (visited.has()) continue;
        }
    }
}
// At start of app, call chessBoard function to generate board, then use Knight class to create a new knight at the "center" area of chessboard.
// will impliment user choice of starting location through newer iteration
chessBoard();


// Add event listener to respond to user's click action to receive data to assign the target destination of the knight to it's created class.
document.addEventListener('click', function(event){
    let destCol = event.target.getAttribute('column');
    let destRow = event.target.parentNode.getAttribute('row');
    knight.destCoor = [destRow, destCol];
    console.log(knight.destCoor);
})