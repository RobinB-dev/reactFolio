import React from 'react';

import iconHeart from './images/heart-red.svg';
import iconCheck from './images/check.svg';
import iconMobile from './images/mobile.svg';
import iconDesktop from './images/desktop.svg';

function Card(props) {
    return (
        <div className="card">
            <div className="image">
                <a href={props.siteLink} target="_blank">
                    <img className="image" src={require(`./images/${props.imgName}`).default} alt=""></img>
                </a>
            </div>
            <div className="text-container">
                <div className="H1contain">
                    <a href={props.siteLink} target="_blank">
                        <h1>{props.name}</h1>
                    </a>
                    <div className="icons">
                        <div className="icon" id={props.colorHeart}>
                            <img src={iconHeart} alt=""></img>
                            <span className="icon-text" id={props.colorHeart}>coup de ♡ personel</span>
                        </div>
                        <div className="icon" id={props.colorCheck}>
                            <img src={iconCheck} alt=""></img>
                            <span className="icon-text" id={props.colorCheck}>Avancement du projet</span>
                        </div>
                        <div className="icon" id={props.colorMobile}>
                            <img src={iconMobile} alt=""></img>
                            <span className="icon-text" id={props.colorMobile}>Compatibilité mobile</span>
                        </div>
                        <div className="icon" id={props.colorDesktop}>
                            <img src={iconDesktop} alt=""></img>
                            <span className="icon-text" id={props.colorDesktop}>Compatibilité ordinateur</span>
                        </div>
                    </div>
                </div>
                <h2>{props.legend}<a href={props.legendLink} target="_blank">{props.legendLinkName}</a>{props.legend2}</h2>
                <p>{props.description}</p>
                <div className="foot">
                    <div className="foot-contain">
                        <div className="made">
                            <h4>fait le {props.date}</h4>
                            <h4 className={props.contributorsDisplay}>avec <a href={props.contributor1Link} target="_blank">{props.contributor1}</a><a href={props.contributor2Link} target="_blank">{props.contributor2}</a><a href={props.contributor3Link} target="_blank">{props.contributor3}</a><a href={props.contributor4Link} target="_blank">{props.contributor4}</a><span className={props.contributorLastDisplay}> et <a href={props.contributorLastLink} target="_blank">{props.contributorLast}</a></span></h4>
                        </div>
                        <div className="note">
                            <h3>{props.grade}</h3>
                            <div className="info" id={props.detailGradeDisplay}>i</div>
                            <div className="detailNote" id={props.detailGradeDisplay}>
                                <div className="consignesCategory">
                                    <div className="titleCategory">Consignes</div>
                                    <div className="noteCategory">{props.grade1a}<span>{props.grade1b}</span></div>
                                </div>
                                <div className="spaceCategory"></div>
                                <div className="featuresCategory">
                                    <div className="titleCategory">Features</div>
                                    <div className="noteCategory">{props.grade2a}<span>{props.grade2b}</span></div>
                                </div>
                                <div className="spaceCategory"></div>
                                <div className="aspectCategory">
                                    <div className="titleCategory">Aspect</div>
                                    <div className="noteCategory">{props.grade3a}<span>{props.grade3b}</span></div>
                                </div>
                                <div className="spaceCategory"></div>
                                <div className="codeQCategory">
                                    <div className="titleCategory">Code</div>
                                    <div className="noteCategory">{props.grade4a}<span>{props.grade4b}</span></div>
                                </div>
                                <div className="spaceCategory"></div>
                                <div className="techniciteCategory">
                                    <div className="titleCategory">Technicité</div>
                                    <div className="noteCategory">{props.grade5a}<span>{props.grade5b}</span></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Card;
