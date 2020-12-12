import React from 'react'
import AnimationHeader from '../../additional-components/animation-header/AnimationHeader';
import Directory from '../../components/directory/Directory'
import './homepage.styles.scss';

export default function Homepage() {
    return (
        <div>
            <div className="homepage">
                <AnimationHeader />
                <div className="homepage-header">
                    <h1>luxurious Store</h1>
                <h3>Most luxurious Brand in the world</h3>
                </div>
                <Directory />          
            </div>
        </div>
    )
}
