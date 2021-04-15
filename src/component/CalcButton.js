import React, { useState, useEffect } from 'react';


function CalcButton(props){
    const operators = ['+','-','*','/'];
      
    const handleOperatorClick = (input) => {
        if(props.operator===''){
            props.setOperator(input);
            props.setPoint(false);
        }else{
            handleEqualButtonClick();
            props.setOperator(input);
        }
    }

    const handleEqualButtonClick = () => {
        switch(props.operator){
            case '+':
                props.setTotal(String(Number(props.total) + Number(props.operand)));
                dismiss();
                break;
            case '-':
                props.setTotal(String(Number(props.total) - Number(props.operand)));
                dismiss();
                break;
            case '*':
                props.setTotal(String(Number(props.total) * Number(props.operand)));
                dismiss();
                break;
            case '/':
                props.setTotal(String(Number(props.total) / Number(props.operand)));
                dismiss();
                break;
            default:
                break;
        }
    }
    const handleResetButtonClick = () => {
        props.setTotal('0');
        props.setOperator('');
        props.setOperand('');
        props.setPoint(false);
    }
    const dismiss = () =>{
        props.setOperand('');
        props.setOperator('');
        props.setPoint(false);
    }

    const operatorButton = (input) => {
        let operatorList = input.map((item, idx) => {
            return (
                <button key={`operatorButton${idx}`} onClick={() => {handleOperatorClick(item)}}>{item}</button>
            )
        })
        return operatorList;
    }

    return(
        <div>
            {operatorButton(operators)}
            <button onClick={handleEqualButtonClick}>=</button>
            <button onClick={handleResetButtonClick}>AC</button>
        </div>
    )
}
export default CalcButton