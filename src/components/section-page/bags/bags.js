import React, { Component } from 'react';
import SHOP_DATA from '../../data/ShopData';
import PreviewItem from '../../preview-item/PreviewItem';

export default class Bags extends Component {
  state={
      ShopData:SHOP_DATA
  }
  render() {
    const jackets=this.state.ShopData.filter(item=>item.title==='Bags')[0].items
        return (
            <div className="bags">
            <div className="preview">
                {jackets.map(({id, ...others})=>(
                    <PreviewItem key={id} {...others} />
                ))}
            </div>
            </div>
        )
    }
}
