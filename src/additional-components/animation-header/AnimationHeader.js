import React from 'react'
import { Link } from 'react-router-dom';
import CustomButton from '../../components/custom-button/CustomButton';
import { anim_1, anim_2, anim_3, anim_4, anim_5, anim_6 } from '../../components/data/NavigationImg';
import Special from '../promo-component/Special';
import "./animation-header.scss";

export default function AnimationHeader() {
    return (
        <div className="animation-header">
          <div className="carousel slide" data-ride="carousel"  >
              <div className="carousel-inner" role="listbox">
                  <div className="carousel-item carousel-item-1" >
                      <img src={anim_1} className="img-1" alt="anim 1" />
                      <img src={anim_2} className="img-2" alt="anim 1" />
                      <div className="carousel-caption">
                          <Special header="1/2" sub_header="Price"/>
                          <h2>luxurious brand</h2>
                          <p>dicover the collections  </p>
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
                      backgroundImage:`url(${anim_3})`,
                      backgroundSize:'cover',
                      backgroundPosition:'top',
                     
                      }}>
                      <div className="carousel-caption carousel-caption-2"> 
                          <Special header="25%" sub_header="off"/>
                          <h2>the sustainable collection</h2>
                          <p>We have the best brand clothing we guarantee to satisfied our customers </p>
                          <div className="btn-collection">
                              <Link to="/shop">
                              <CustomButton id="btn-black">Find Out More</CustomButton>
                              </Link>
                          </div>
                      </div>
                  </div>
                  <div className="carousel-item carousel-item-3" >
                      <img src={anim_4} className="img-1" alt="anim 1" />
                      <img src={anim_5} className="img-2" alt="anim 1" />
                      <div className="carousel-caption">
                          <Special white header="free" sub_header="online"/>
                          <h2>Summer popular</h2>
                          <p>win 1 Million dollar </p>
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
                  {/* <div className="carousel-item active">
                      <img src={anim_3} alt="anim 1" />
                      <img src={anim_4} alt="anim 1" />
                      <div className="carousel-caption">
                          <h2>Most popular items of the summer</h2>
                          <p>Have one of the most luxurious brand jackets</p>
                      </div>
                  </div> */}
                  {/* <div className="carousel-item">
                      <img src={anim_5} alt="anim 1" />
                      <img src={anim_6} alt="anim 1" />
                      <div className="carousel-caption">
                          <h2>Most popular items of the summer</h2>
                          <p>Have one of the most luxurious brand jackets</p>
                      </div>
                  </div> */}
              </div>
          </div>
        </div>
    )
}
