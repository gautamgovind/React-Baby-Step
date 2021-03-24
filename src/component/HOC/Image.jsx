import React from 'react';
import ToggleHOC from './ToggleHOC';

const Image = props =>{
    const {active, toggleState} = props;
    const btnLabel = active ? "hide the image": "show the image";
    return(
        <div className="toggle-img-container clicked">
            <div>
                <button className="primary-btn" onClick={toggleState}>{btnLabel}</button>
            </div>
            {active &&
                <img className="toggle-img"
                src="https://www.telegraph.co.uk/content/dam/Travel/2018/September/El-Yunque-morning-mist-iStock-535499464.jpg" 
                alt="" />
            }
        </div>
    )
}

export default ToggleHOC(Image);