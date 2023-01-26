// import _ from 'lodash';
import './style.css';

const content = document.getElementById('content');

const chessBoard = (() => {
    for (let i = 0; i < 8; i++){
        let boardCol = document.createElement('div');
        boardCol.classList.add('board-col');
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