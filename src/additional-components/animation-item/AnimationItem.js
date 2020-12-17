import React,{useState} from 'react';
import './animation-item.scss';

export default function AnimationItem() {
    const [index, setIndex] = useState(0);
    return (
       
        <div className="animation card-side card-side-back">
            <div className={`animation-item animation-item-${index}`}>
              <div className="animation-item-img">1</div>
              <div className="animation-item-img">2</div>
              <div className="animation-item-img">3</div>
              <div className="animation-item-img">4</div>
            </div>
        <div className="item-navigator"> 
            <div className="animation-item-left" onClick={()=>index===0?setIndex(3):setIndex(index-1)}>
            <i className="fa fa-chevron-left" aria-hidden="true"></i>
            </div>
            <div className="animation-item-right" onClick={()=>index===3?setIndex(0):setIndex(index+1)}>
            <i className="fa fa-chevron-right" aria-hidden="true"></i>
            </div>
        </div>
    </div>
       
        
    )
}
