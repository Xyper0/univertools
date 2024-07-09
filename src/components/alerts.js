import React, { useEffect, useState } from "react";
import { MdErrorOutline } from "react-icons/md";


import "../stylesheet/pagesStyle/main.css"


function AlertRed(props) {
    return (
        <>
        <div className="alerts">
            <div className="alert-container">
                <div className="alert-red">
                    <div className="alert_icon">
                        <MdErrorOutline size={30} color="red"/>
                    </div>
                    <div className="alert_text">
                        <a style={{color:'red'}}>{props.alert_text}</a>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}


function AlertSuccess() {
    return (
        <>

        </>
    );
}

function AlertInfo() {
    return (
        <>

        </>
    );
}



export  {AlertInfo , AlertRed , AlertSuccess};

