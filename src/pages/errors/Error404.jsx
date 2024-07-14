import React, { useEffect, useState } from "react";
import {Link} from 'react-router-dom';
import "../../stylesheet/pagesStyle/main.css"
import "../../index.css"; 

export default function Error404() {


    return (
        <>
        <div className="error404_div">
            <div className="error404_div_s">
              <div className="error404">
                <h1>تعذر الحصول على هذه الصفحة</h1>
                <p>لقد اخترت صفحة غير موجودة! للعودة الى الصفحة الرئيسية اضغط الزر ادناه</p>
                <Link to="/">
                <button>الصفحة الرئيسية</button>
                </Link>
              </div>
            </div>
        </div>
        </>
    );
}



