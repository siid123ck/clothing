import React from 'react'
import PreviewItem from '../preview-item/PreviewItem';
import './preview-collection.scss'

 function Previewcollection({title, items}) {
    return (
        <div className="preview-collection">
            <h1 className="title">{title}</h1>
            <div className="preview">
                {items.map(({id, ...otherProps})=> 
                   <PreviewItem key={id} {...otherProps} />                   
                    )}
            </div>
        </div>
    )
}
export default Previewcollection;