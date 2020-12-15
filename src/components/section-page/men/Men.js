import React, { Component } from 'react';
import AnimationHeader from '../../../additional-components/animation-header/AnimationHeader';
import SHOP_DATA from '../../data/ShopData';
import PreviewItem from '../../preview-item/PreviewItem';

export default class Men extends Component {
  state={
      ShopData:SHOP_DATA
  }
  render() {
    const men=this.state.ShopData.filter(item=>item.title==='Men')[0].items
        return (
            <div className="men">
                <AnimationHeader/>
            <div className="preview">
                {men.map(({id, ...others})=>(
                    <PreviewItem key={id} {...others} />
                ))}
            </div>
            </div>
        )
    }
}
