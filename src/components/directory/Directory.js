import React from 'react'
import SECTIONS from '../menu-item/data/SECTIONS';
import MenuItem from '../menu-item/Menu-item';
import './directory.scss';

export default class Directory extends React.Component {
    state={
        sections: SECTIONS
    }
    render() {
        return (
            <div className="directory-menu">
                {this.state.sections.map(({title,imageUrl,size,id,linkUrl})=>(
                    <MenuItem key={id} title={title} imageUrl={imageUrl} size={size}
                    linkUrl={linkUrl}
                    />
                ))}
            </div>
        )
    }
}
