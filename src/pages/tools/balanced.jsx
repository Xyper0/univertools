import React from "react";
import Services from "../../components/services";

import "../../stylesheet/pagesStyle/balanced.css"; 
import { useTranslation } from 'react-i18next';

export default function Balanced() {
    const {t} = useTranslation(); 
    return (
        <>
        <div>
            <h1>
                balanced page
            </h1>
        </div>
        </>
    );
}



