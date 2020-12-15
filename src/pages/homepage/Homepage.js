import React from 'react'
import AnimationHeader from '../../additional-components/animation-header/AnimationHeader';
import Directory from '../../components/directory/Directory'
import './homepage.styles.scss';
import {anim_1, anim_2, anim_3, anim_4, anim_5} from '../../components/data/NavigationData';



export default function Homepage() {
    return (
        <div>
            <div className="homepage">
                <AnimationHeader anim_header="luxurious brand"
                 anim_1={anim_1} anim_2={anim_2} anim_3={anim_3} anim_4={anim_4} anim_5={anim_5}  />
                <div className="homepage-header">
                    <h1>luxurious Store</h1>
                <h3>Most luxurious Brand in the world</h3>
                </div>
                <Directory />          
            </div>
        </div>
    )
}
