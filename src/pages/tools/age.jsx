import React from "react";
import "../../stylesheet/pagesStyle/age.css"
import {Link} from 'react-router-dom';

export default function Age() {
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


