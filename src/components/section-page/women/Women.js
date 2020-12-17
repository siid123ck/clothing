import React, { Component } from 'react';
import AnimationHeader from '../../../additional-components/animation-header/AnimationHeader';
import SHOP_DATA from '../../data/ShopData';
import PreviewItem from '../../preview-item/PreviewItem';
import {ANIM_HEADER} from '../../data/AnimationData';

const anim_data = ANIM_HEADER.filter(el=>el.title==='women')[0].data[0];

export default class Women extends Component {
  state={
      ShopData:SHOP_DATA
  }
  render() {
    const Women=this.state.ShopData.filter(item=>item.title==='Women')[0].items
        return (
            <div className="Women">
                    <AnimationHeader anim_header={anim_data.header} text={anim_data.text}
                special_head={anim_data.special_head} special_text={anim_data.special_text}
               images={anim_data.img} direction='direction-right' />
            <div className="preview">
                {Women.map(({id, ...others})=>(
                    <PreviewItem key={id} {...others} />
                ))}
            </div>
            </div>
        )
    }
}
