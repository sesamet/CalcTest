import React, { useState, useEffect } from 'react';
import '../App.css'

function NumPad(props){
    const numButtonData = ['1','2','3','4','5','6','7','8','9','0','.'];

    const handleNumButtonClick = (input) => {
        if(input==='.'){
            props.setPoint(true);
        }
        if(props.operator===''){
            let totalString = !props.point || input!=='.' ? `${props.total}${input}` : `${props.total}`;
            totalString = totalString[0]==='0' ? totalString.slice(1) : totalString;
            props.setTotal(totalString);
        }else{
            let operandString = !props.point || input!=='.' ? `${props.operand}${input}` : `${props.operand}`;
            operandString = operandString[0]==='0' ? operandString.slice(1) : operandString;
            props.setOperand(operandString);
        }
    }

    const handleSignSwitchButtonClick = () => {
        if(props.operator===''){
            props.setTotal(props.total[0]==='-' ? props.total.slice(1) : `-${props.total}`)
        }else{
            props.setOperand(props.operand[0]==='-' ? props.operand.slice(1) : `-${props.operand}`)
            // if(props.operand[0]==='-'){
            //     props.setOperand(`${props.operand.slice(1)}`);
            // }else{
            //     props.setOperand(`-${props.operand}`);
            // }    
        }
    }
    const handlePercentButtonClick = () => {
        if(props.operator===''){
            props.setTotal(Number(props.total) / 100);
        }else{
            props.setOperand(Number(props.operand) / 100);
        }
    }

    const numButton = (input) => {
        let buttonList = input.map((item, idx) => {
            return (
                <button key={`numButton${idx}`} onClick={() => {handleNumButtonClick(item)}}>{item}</button>
            )
        })
        return buttonList;
    }

    return(
        <div>
            {numButton(numButtonData)}
            <button onClick={handleSignSwitchButtonClick}>+-</button>
            <button onClick={handlePercentButtonClick}>%</button>
        </div>
    )
}

export default NumPad