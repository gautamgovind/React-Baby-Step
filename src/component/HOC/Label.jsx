import React from 'react';
import ToggleHOC from './ToggleHOC';

const Label = props =>{
    const {active, toggleState} = props;
    const btnLabel = active ? "Make me inactive" : "Make me active";
    const toggleMsg = active => {
        return active && <div>Feel free to change, i'm not constant ....</div>; 
    }
    return(
        <div className="component-with-label-msg">
            <p className="toggle-msg">{toggleMsg(active)}</p>
            <button className="primary-btn" onClick={toggleState}>{btnLabel}</button>
        </div>
    )
}

export default ToggleHOC(Label);