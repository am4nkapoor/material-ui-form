import React from 'react';
import CloseIcon from '@material-ui/icons/Close';
import "./Header.css";

const header = () =>{
    return(
        <div className="Header">
            <div className="FloatLeft">
                Important Leave Type
            </div>
            <div className="FloatRight">
                <CloseIcon />
            </div>
        </div>
    )
}

export default header;