import React, { Component } from 'react'
import AnimationHeader from '../../additional-components/animation-header/AnimationHeader';
import SHOP_DATA from '../data/ShopData'
import Previewcollection from "../preview-collection/Preview-collection";
import './shop-page.scss'
import {ANIM_HEADER} from '../data/AnimationData'

const anim_data = ANIM_HEADER.filter(el=>el.title==='shop_page')[0].data[0];

export default class ShopPage extends Component {
    state={
        collections: SHOP_DATA
    }
    render() {
        const {collections}=this.state;
        return (
            <div className="shop-page">
                   <AnimationHeader anim_header={anim_data.header} text={anim_data.text}
                special_head={anim_data.special_head} special_text={anim_data.special_text}
               images={anim_data.img} direction='direction-top' />
                {collections.map(({id, ...otherCollectionProps})=>
                <Previewcollection key={id} {...otherCollectionProps} />
                )}
            </div>
        )
    }
}
