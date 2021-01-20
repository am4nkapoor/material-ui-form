import React from 'react';
import './BasicDetails.css';

const basicDetails = () =>{
    return(
        <div className="MuiStepper-horizontal">
            <div className="NumberCircleOne">1</div>
            <div className="BasicSpacing">Basic Details</div>
            <div className="MuiStepConnector-root">
                <span className="MuiStepConnector-lineHorizontal"></span>
            </div>
            <div className="NumberCircleTwo">2</div>
            <div className="AdvanceSpacing">Advance Details</div>
        </div>
    );
}

export default basicDetails;