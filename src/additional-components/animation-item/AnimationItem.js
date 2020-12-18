import React,{useState} from 'react';
import './animation-item.scss';
import CustomButton from '../../components/custom-button/CustomButton'

export default function AnimationItem({images}) {
    const [index, setIndex] = useState(0);
    return (
       
        <div className="animation card-side card-side-back">
            <div className={`animation-item animation-item-${index}`}>
              <div className="animation-item-img">
                  <img alt="" src={images[0]} />
              </div>
              <div className="animation-item-img">
                  <img alt="" src={images[1]} />
              </div>
              <div className="animation-item-img">
                  <img alt="" src={images[2]} />
              </div>
              <div className="animation-item-img">
                  <img alt="" src={images[3]} />
              </div>
            </div>
            <CustomButton className="shop-button">shop this</CustomButton>
           
        <div className="item-navigator"> 
            <div className="animation-item-left animation-item-right-small" onClick={()=>index===0?setIndex(3):setIndex(index-1)}>
            <i className="fa fa-chevron-left" aria-hidden="true"></i>
            </div>
            <div className="animation-item-right animation-item-right-small" onClick={()=>index===3?setIndex(0):setIndex(index+1)}>
            <i className="fa fa-chevron-right" aria-hidden="true"></i>
            </div>
        </div>
    </div>
       
        
    )
}
