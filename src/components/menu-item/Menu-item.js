import React from 'react';
import './menu-item.scss';
export default function MenuItem({title, imageUrl,size}) {
    return (
        <div className={`menu-item ${size}`} style={{backgroundImage:`url(${imageUrl})` }}>
           <div className='background-image' style={{
            backgroundImage:`url(${imageUrl})`
             }}/>
            <div className="content">
                <h1 className="title">{title.toUpperCase()}</h1>
                <span className="subtitle">shop now</span>
            </div>
        </div>
    )
}
