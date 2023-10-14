import React from "react";

import * as Styles from './styles';

import Navbar from '../../../../components/navbar';
import Divider from '../../../../components/divider';
import Platforms from '../../../../components/platforms';

import hero2 from '../../../../assets/images/hero2.png'
import {ButtonOutline} from '../../../../components/button/styles.js';
import {Button} from '../../../../components/button/index.jsx';

const BannerSection = () => {
    return (
        <Styles.BannerSection>
            <Navbar />
            <Divider />
            <Styles.BannerContainer>
                <Styles.BannerInfo>
                    <Styles.BannerText>
                        <h2>VALUE</h2>
                        <h1>DOTA 2</h1>
                        <p>Every day, millions of players worldwide enter the battle as one of over a hundred Dota Heroes in a 5v5 team clash. Dota is the deepest multi-player action RTS game ever made and there's always a new strategy or tactic to discover. It's completely free to play and always will be – start defending your ancient now.</p>
                        <Styles.BannerFlexButtons>
                            <Button className='large'>Play Game</Button>
                            <ButtonOutline className='large'>Watch Gameplay</ButtonOutline>
                        </Styles.BannerFlexButtons>
                        <Styles.BannerDivider />
                        <Styles.BannerPlataforms>
                            {/*<span className='transparent'>Play it on</span>*/}
                            <Platforms />
                        </Styles.BannerPlataforms>
                    </Styles.BannerText>
                </Styles.BannerInfo>

                <Styles.BannerMascotContainer>
                    <img src={hero2} alt='hero' style={{pointerEvents: 'none'}} />
                </Styles.BannerMascotContainer>

            </Styles.BannerContainer>
        </Styles.BannerSection>
    );
}

export default BannerSection;
