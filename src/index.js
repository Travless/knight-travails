// import _ from 'lodash';
import './style.css';

const content = document.getElementById('content');

const board = document.createElement('div');

class Knight {
    constructor(col, space){
        this.col = col;
        this.space = space;
    }
}

const chessBoard = (() => {
    for (let i = 0; i < 8; i++){
        let boardCol = document.createElement('div');
        boardCol.classList.add('column');
        boardCol.setAttribute('board-col', i);
        function spaceCreate (){
            for(let k = 0; k < 8; k++){
                const space = document.createElement('div');
                space.classList.add('space');
                space.setAttribute('space-num', k);
                boardCol.append(space);
            }
        }
        spaceCreate();
        content.append(boardCol);
    }
})

chessBoard();
const knight = new Knight(3, 3);
let knightCol = document.querySelector(`[board-col='${knight.col}']`);
let knightSpace = knightCol.childNodes[`${knight.space}`];

console.log(knightCol);
console.log(knightSpace);

document.addEventListener('click', function(event){
    let destSpace = event.target.getAttribute('space-num');
    let destCol = event.target.parentNode.getAttribute('board-col');
})