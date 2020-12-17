import React, { Component } from 'react';
import SHOP_DATA from '../../data/ShopData';
import PreviewItem from '../../preview-item/PreviewItem';
import AnimationHeader from '../../../additional-components/animation-header/AnimationHeader'
import {ANIM_HEADER} from '../../data/AnimationData';

const anim_data = ANIM_HEADER.filter(el=>el.title==='bags')[0].data[0];

export default class Bags extends Component {
  state={
      ShopData:SHOP_DATA
  }
  render() {
    const jackets=this.state.ShopData.filter(item=>item.title==='Bags')[0].items
        return (
            <div className="bags">
                 <AnimationHeader anim_header={anim_data.header} text={anim_data.text}
                special_head={anim_data.special_head} special_text={anim_data.special_text}
               images={anim_data.img}  />
            <div className="preview">
                {jackets.map(({id, ...others})=>(
                    <PreviewItem key={id} {...others} />
                ))}
            </div>
            </div>
        )
    }
}
