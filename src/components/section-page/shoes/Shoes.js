import React, { Component } from 'react';
import SHOP_DATA from '../../data/ShopData';
import PreviewItem from '../../preview-item/PreviewItem';

export default class Shoes extends Component {
  state={
      ShopData:SHOP_DATA
  }
  render() {
    const shoes=this.state.ShopData.filter(item=>item.title==='Shoes')[0].items
        return (
            <div className="shoes">
            <div className="preview">
                {shoes.map(({id, ...others})=>(
                    <PreviewItem key={id} {...others} />
                ))}
            </div>
            </div>
        )
    }
}
