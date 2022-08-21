import React, { useState } from "react";
import Die from "../Die/Die"
import "./RollDice.css"



function RollDice(props){


    const [die1,setDie1] = useState("one");
    const [die2,setDie2] = useState("one");
    const [isRolling,setRolling] = useState(false);

    function roll(){
        const newDie1 = props.sides[Math.floor(Math.random() * props.sides.length)];
        const newDie2 = props.sides[Math.floor(Math.random() * props.sides.length)];

        setDie1(newDie1);
        setDie2(newDie2);
        setRolling(true);

        // wait one second and set rolling to false

        setTimeout(() => {
            setRolling(false)
        },1000);
    }

    return  (
        <div className="RollDice">
            <div className="RollDice-container">
                <Die face={die1} rolling={isRolling}/>
                <Die face={die2} rolling={isRolling}/>
            </div>
            <button onClick={roll} disabled={isRolling}>
                {isRolling ? "Rolling....." : "Roll Dice!"}
                </button>
        </div>
    );
}

RollDice.defaultProps = {
    sides: ["one","two","three","four","five","six"]
}

export default RollDice;