import React, { useState, useReducer, useCallback } from 'react';
import Table from './Table';

const initialState = {
    winner: '',
    turn: '0',
    tableDate: [['','',''], ['','','',], ['','','',]],
};

const reducer = (state, action) => {

};

const TicTacTo = () => {
    const [state, dispatch] = useReducer(reducer, initialState);
    // const [winner, setWinner] = useState('');
    // const [turn, setTurn] = useState('0');
    // const [tableData, setTableData] = useState([['','',''], ['','','',], ['','','',]]);

    // 컴포넌트에 넣는 이벤트 함수들은 모두 useCallback
    const onClickTable = useCallback(() => {

    }, []);
    return (
        <>
            <Table onClick={onClickTable} />
            {winner && <div>{state.winner}님의 승리</div>}
        </>
    );
}

export default TicTacTo;