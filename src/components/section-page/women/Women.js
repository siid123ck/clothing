import React, { Component } from 'react';
import AnimationHeader from '../../../additional-components/animation-header/AnimationHeader';
import SHOP_DATA from '../../data/ShopData';
import PreviewItem from '../../preview-item/PreviewItem';

export default class Women extends Component {
  state={
      ShopData:SHOP_DATA
  }
  render() {
    const Women=this.state.ShopData.filter(item=>item.title==='Women')[0].items
        return (
            <div className="Women">
                <AnimationHeader/>
            <div className="preview">
                {Women.map(({id, ...others})=>(
                    <PreviewItem key={id} {...others} />
                ))}
            </div>
            </div>
        )
    }
}
