// import _ from 'lodash';
import './style.css';

const content = document.getElementById('content');

const board = document.createElement('div');

const possibleMoves = [[-1, 2], [-2, 1], [-1, -2], [-2, -1], [1, 2], [2, 1], [1, -2], [2, -1]];


class Knight {
    constructor(row, col, destCoor){
        this.row = row;
        this.col = col;
        this.destCoor = destCoor;
    }
}

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

chessBoard();
const knight = new Knight(3, 3);
let knightRow = document.querySelector(`[row='${knight.row}']`);
let knightCol = knightRow.childNodes[`${knight.col}`];

console.log(knightRow);
console.log(knightCol);

document.addEventListener('click', function(event){
    let destCol = event.target.getAttribute('column');
    let destRow = event.target.parentNode.getAttribute('row');
})