import React from 'react';
import {withRouter} from 'react-router-dom'
import './menu-item.scss';
 function MenuItem({title, imageUrl,size,linkUrl, history, match}) {
    return (
        <div className={`menu-item ${size}`} style={{backgroundImage:`url(${imageUrl})` }}
        onClick={()=>history.push(`${match.url}${linkUrl}`)}>
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
export default withRouter(MenuItem);
