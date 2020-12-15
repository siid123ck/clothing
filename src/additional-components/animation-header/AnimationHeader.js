import React,{useState} from 'react'
import { Link } from 'react-router-dom';
import CustomButton from '../../components/custom-button/CustomButton';
import Special from '../promo-component/Special';
import "./animation-header.scss";

export default function AnimationHeader({anim_header, ...others}) {
    const [index, setIndex] = useState(0);
    return (
        <div className="animation-header">
          <div className="carousel slide" data-ride="carousel"  >
              <div className={`carousel-inner carousel-inner-${index}`}  role="listbox">
                  <div className="carousel-item carousel-item-1" >
                      <img src={others.anim_1} className="img-1" alt="anim 1"/>
                      <img src={others.anim_2} className="img-2" alt="anim 1" />
                      <div className="carousel-caption">
                          <Special header={others.special_head[0]} sub_header={others.special_text[0]}/>
                          <h2>{anim_header[0]}</h2>
                          <p>{others.text[0]}  </p>
                          <div className="btn-collection">
                              <Link to="/shop/men">
                              <CustomButton id="btn-black">Men</CustomButton>
                              </Link>
                              <Link to="/shop/women">
                              <CustomButton id="btn-black">Women</CustomButton>
                              </Link>
                          </div>
                      </div>
                  </div>
                  <div className="carousel-item carousel-item-2" style={{
                      backgroundImage:`url(${others.anim_3})`,
                      backgroundSize:'cover',
                      backgroundPosition:'top',
                     
                      }}>
                      <div className="carousel-caption carousel-caption-2"> 
                          <Special header={others.special_head[1]} sub_header={others.special_text[1]}/>
                           <h2>{anim_header[1]}</h2>
                          <p>{others.text[1]} </p>
                          <div className="btn-collection">
                              <Link to="/shop">
                              <CustomButton id="btn-black">Find Out More</CustomButton>
                              </Link>
                          </div>
                      </div>
                  </div>
                  <div className="carousel-item carousel-item-3" >
                      <img src={others.anim_4} className="img-1" alt="anim 1" />
                      <img src={others.anim_5} className="img-2" alt="anim 1" />
                      <div className="carousel-caption">
                          <Special white header={others.special_head[2]} sub_header={others.special_text[2]}/>
                          <h2>{anim_header[2]}</h2>
                          <p>{others.text[2]}</p>
                          <div className="btn-collection">
                              <Link to="/shop/men">
                              <CustomButton id="btn-white">Men</CustomButton>
                              </Link>
                              <Link to="/shop/women">
                              <CustomButton id="btn-white">Women</CustomButton>
                              </Link>
                          </div>
                      </div>
                  </div>
              </div>
                  <div className="navigator" >
                      <div className="left" onClick={()=>index===0?setIndex(2):setIndex(index-1)}>
                      <i className="fa fa-chevron-left" aria-hidden="true"></i>
                      </div>
                      <div className="right" onClick={()=>index===2?setIndex(0):setIndex(index+1)}>
                      <i className="fa fa-chevron-right" aria-hidden="true"></i>
                      </div>
                  </div>                
          </div>
        </div>
    )
}
