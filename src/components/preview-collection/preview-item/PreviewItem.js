import React from 'react'
export default function PreviewItem({id,imgUrl, name, price}) {
    return (
        <div className="preview-item">
            <div className="preview-item-img"  style={{backgroundImage:`url(${imgUrl})`}}/>
            <div className="preview-item-footer">
                <span className="name">{name}</span>
                <span className="price">${price}</span>
            </div>
        </div>
    )
}
