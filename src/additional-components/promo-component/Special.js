import React from 'react';
import "./special.scss";

export default function Special({header, sub_header, white}) {
    return (
        <div className={`promo-special ${white?"promo-special-white":""}`}>
            <h1 className="promo-special-header">{header}</h1>
            <span className="promo-special-sub_header">{sub_header}</span>
        </div>
    )
}
