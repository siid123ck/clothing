import React, { Component } from 'react'
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
                {collections.map(({id, ...otherCollectionProps})=>
                <Previewcollection key={id} {...otherCollectionProps} />
                )}
            </div>
        )
    }
}
