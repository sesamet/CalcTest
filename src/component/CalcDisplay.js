import React, { useState, useEffect } from 'react';
import '../App.css'

function CalcDisplay(props){

    return(
        <div>
            <h1>{props.total}</h1>
            <h1>{props.operator}</h1>
            <h1>{props.operand}</h1>
        </div>
    )
}

export default CalcDisplay