import React from "react";
import {Link} from 'react-router-dom';
import "../../stylesheet/pagesStyle/two-dates.css"; 

export default function TwoDates() {
    return (
        <>
        <div className="soon-pages">
            <h1>
                قريبا
                </h1>
                <Link to="/">
                <button className="home-button">الصفحة الرئيسية</button>
                </Link>
        </div>
        </>
    );
}



