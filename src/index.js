// import _ from 'lodash';
import './style.css';

const content = document.getElementById('content');

const board = document.createElement('div');

class Knight {
    constructor(row, col){
        this.row = row;
        this.col = col;
    }
}

class Destination {
    constructor(row, col){
        this.row = row;
        this.col = col;
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
    const destination = new Destination(destRow, destCol);
    console.log(destination);
})