import React, { useState, useEffect } from 'react';
import CalcButton from './component/CalcButton';
import CalcDisplay from './component/CalcDisplay';
import NumPad from './component/NumPad';
import './App.css';



function App() {
    const [total, setTotal] = useState('0');
    const [operand, setOperand] = useState('');
    const [operator, setOperator] = useState('');
    //確認小數點是否已經使用
    const [point, setPoint] = useState(false);

    return(
    <div style={{textAlign: 'center'}}>
        <CalcDisplay 
            total={total}
            setTotal={setTotal}
            operand={operand}
            setOperand={setOperand}
            operator={operator}
            setOperator={setOperator}
            point={point}
            setPoint={setPoint} />
        <CalcButton
            total={total}
            setTotal={setTotal}
            operand={operand}
            setOperand={setOperand}
            operator={operator}
            setOperator={setOperator}
            point={point}
            setPoint={setPoint} />
        <NumPad
            total={total}
            setTotal={setTotal}
            operand={operand}
            setOperand={setOperand}
            operator={operator}
            setOperator={setOperator}
            point={point}
            setPoint={setPoint} />
    </div>
    );
}

export default App;
