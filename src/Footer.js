import React from 'react';
import CVpdf from './images/CV.pdf'

function Footer(props) {
    return (
        <div className="designBy">
            <div className="links">
                <h4>Design et création par <a href="https://github.com/RobinB-dev" target="_blank">Robin Bourachot</a></h4>
            </div>
            <div className="links">
                <h4>Télécharger <a href={CVpdf} target="_blank">mon CV</a></h4>
            </div>
            <div className="links">
                <h4>Fait avec <a href="https://reactjs.org/" target="_blank">React.js</a></h4>
            </div>
      </div>
    )
}


export default Footer;