import React, { Component } from 'react'
import AnimationHeader from '../../additional-components/animation-header/AnimationHeader';
import SHOP_DATA from '../data/ShopData'
import Previewcollection from "../preview-collection/Preview-collection";
import './shop-page.scss'

export default class ShopPage extends Component {
    state={
        collections: SHOP_DATA
    }
    render() {
        const {collections}=this.state;
        return (
            <div className="shop-page">
                <AnimationHeader />
                {collections.map(({id, ...otherCollectionProps})=>
                <Previewcollection key={id} {...otherCollectionProps} />
                )}
            </div>
        )
    }
}
