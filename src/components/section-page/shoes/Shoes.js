import React, { Component } from 'react';
import SHOP_DATA from '../../data/ShopData';
import PreviewItem from '../../preview-item/PreviewItem';
import AnimationHeader from '../../../additional-components/animation-header/AnimationHeader'
import {ANIM_HEADER} from '../../data/AnimationData';

const anim_data = ANIM_HEADER.filter(el=>el.title==='shoes')[0].data[0];

export default class Shoes extends Component {
  state={
      ShopData:SHOP_DATA
  }
  render() {
    const shoes=this.state.ShopData.filter(item=>item.title==='Shoes')[0].items
        return (
            <div className="shoes">
                 <AnimationHeader anim_header={anim_data.header} text={anim_data.text}
                special_head={anim_data.special_head} special_text={anim_data.special_text}
               images={anim_data.img} direction='text-white' />
            <div className="preview">
                {shoes.map(({id, ...others})=>(
                    <PreviewItem key={id} {...others} />
                ))}
            </div>
            </div>
        )
    }
}
