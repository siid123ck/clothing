import React from 'react'
import AnimationHeader from '../../additional-components/animation-header/AnimationHeader';
import Directory from '../../components/directory/Directory'
import './homepage.styles.scss';
import {ANIM_HEADER} from '../../components/data/AnimationData';

const anim_data= ANIM_HEADER.filter(el=>el.title==='home')[0].data[0];
const images = anim_data.img;
console.log(anim_data.header)



export default function Homepage() {
    return (
        <div>
            <div className="homepage">
                <AnimationHeader anim_header={anim_data.header} text={anim_data.text}
                special_head={anim_data.special_head} special_text={anim_data.special_text}
                 anim_1={images[0]} anim_2={images[1]} anim_3={images[2]} anim_4={images[3]} anim_5={images[4]}  />
                <div className="homepage-header">
                 <h1>luxurious Store</h1>
                <h3>Most luxurious Brand in the world</h3>
                </div>
                <Directory />          
            </div>
        </div>
    )
}
