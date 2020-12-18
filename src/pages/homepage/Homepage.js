import React from 'react'
import AnimationHeader from '../../additional-components/animation-header/AnimationHeader';
import Directory from '../../components/directory/Directory'
import './homepage.styles.scss';
import {ANIM_HEADER} from '../../components/data/AnimationData';

const anim_data= ANIM_HEADER.filter(el=>el.title==='home')[0].data[0];




export default function Homepage() {
    return (
        <div>
            <div className="homepage">
                <AnimationHeader anim_header={anim_data.header} text={anim_data.text}
                special_head={anim_data.special_head} special_text={anim_data.special_text}
                images={anim_data.img}  />
                
                <div className="homepage-header">
                 <h1>luxurious Store</h1>
                 <h3>Most luxurious Brand in the world</h3>
                </div>
                <Directory />          
            </div>
        </div>
    )
}
