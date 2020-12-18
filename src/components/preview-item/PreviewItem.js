import React from 'react';
import AnimationItem from '../../additional-components/animation-item/AnimationItem';
// import './preview-item.scss'
export default function PreviewItem({id, ...others}) {
  console.log('animation', others.anim_items)
    return (
        <div className="preview-item"> 
          <div className="preview-item-card preview-item-card-front">
            <div className="preview-item-card-img"  style={{backgroundImage:`url(${others.imgUrl})`}}/>
            <div className="preview-item-card-footer">
                <span className="name">{others.name}</span>
                <span className="price">${others.price}</span>
            </div>          
          </div> 

          <div className="preview-item-card preview-item-card-back">
            <AnimationItem images={others.anim_items}/>
          </div>        
        </div>
    )
}
