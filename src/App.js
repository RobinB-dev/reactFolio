import React from 'react';
import Card from './Card';
import Footer from './Footer';


import './style.css';

function App() {
  return (
    <div>
      <Card 
      // INFOS
      name="Wire punk"
      imgName="Wirepunk.JPG"
      description="Premier projet professionnel, développement d'un blog en front end."
      grade="Contrat"
      date="15/06/20"
      siteLink="http://wirepunk.space/"
      
      // LEGEND
      legend="Le blog technologique et informatique"
      legendLink=""
      legendLinkName=""
      lengend2=""
      
      // ICONS
      colorHeart='none'
      colorCheck='green'
      colorMobile='green'
      colorDesktop='green'

      // CONTRIBUTORS
      contributorsDisplay="none"
      
      // DETAIL GRADE
      detailGradeDisplay="none"
       />


      <Card
      // INFOS
      name="Savoir Magazine"
      imgName="savoir.JPG"
      description="Création d'un site pour le journal Savoir, projet de culture générale. La note correspond à l'ensemble du projet et non exclusivement au dev."
      grade="Note : 17"
      date="19/05/20"
      siteLink="https://robinb-dev.github.io/savoir/"
      
      // LEGEND
      legend="Site pour le journal de culture générale"
      legendLink=""
      legendLinkName=""
      lengend2=""
      
      // ICONS
      colorHeart='none'
      colorCheck='orange'
      colorMobile='orange'
      colorDesktop='green'

      // CONTRIBUTORS
      contributorsDisplay=""
      contributor1="Soliman"
      contributor1Link="https://github.com/soliman-halaby"
      contributorLast="Chris"
      contributorLastLink="https://github.com/Chriiiiiss"
      contributorLastDisplay=""
      
      // DETAIL GRADE
      detailGradeDisplay="none"
       />


      <Card
      // INFOS
      name="Drum Pad"
      imgName="DrumPad.JPG"
      description="Seul, réaliser un Drum Pad en JS. Avoir plusieurs sons et les contrôler + animations. Noté sur l'aspect, le respect des consignes, les features, la qualité et téchnicité du code."
      grade="Note : 18.75"
      date="12/05/20"
      siteLink="https://robinb-dev.github.io/drumpad/"
      
      // LEGEND
      legend="Devoir pour "
      legendLinkName="Bruno Simon"
      legendLink="https://github.com/brunosimon"
      legend2=" (facultatif)"
      
      // ICONS
      colorHeart='none'
      colorCheck='orange'
      colorMobile='green'
      colorDesktop='green'

      // CONTRIBUTORS
      contributorsDisplay="none"

      // DETAIL GRADE
      detailGradeDisplay=""
      grade1a='1'
      grade1b='/1'
      grade2a='4.25'
      grade2b='/5'
      grade3a='4'
      grade3b='/4'
      grade4a='5'
      grade4b='/5'
      grade5a='4.5'
      grade5b='/5'
       />


      <Card
      // INFOS
      name="Mille Boards"
      imgName="MilleBoards.JPG"
      description="En groupe, création d'un jeu original en Javascript."
      grade="Note : 12"
      date="24/04/20"
      siteLink="https://robinb-dev.github.io/milleBoards/"
      
      // LEGEND
      legend="Semaine intensive de Javascript"
      
      // ICONS
      colorHeart='none'
      colorCheck='red'
      colorMobile='red'
      colorDesktop='green'

      // CONTRIBUTORS
      contributorsDisplay=""
      contributor1="Soliman, "
      contributor1Link="https://github.com/soliman-halaby"
      contributor2="Paul, "
      contributor2Link="https://github.com/Umb3rs"
      contributor3="Philippe, "
      contributor3Link="https://github.com/Chompy0067"
      contributorLast="Alexandra"
      contributorLastLink="https://github.com/alexandrabernard"
      contributorLastDisplay=""
      
      // DETAIL GRADE
      detailGradeDisplay="none"
       />

      <Card
      // INFOS
      name="Dice Design"
      imgName="DiceRoller.JPG"
      description="Seul, réaliser un lanceur de dés (dice roller) en JS. Pouvoir lancer au minimum un dé. Noté sur l'aspect, le respect des consignes, les features, la qualité et téchnicité du code."
      grade="Note : 18.75"
      date="12/04/20"
      siteLink="https://robinb-dev.github.io/diceroller/"
      
      // LEGEND
      legend="Devoir pour "
      legendLinkName="Bruno Simon"
      legendLink="https://github.com/brunosimon"
      legend2=" (obligatoire)"
      
      // ICONS
      colorHeart='blue'
      colorCheck='orange'
      colorMobile='green'
      colorDesktop='green'

      // CONTRIBUTORS
      contributorsDisplay="none"

      // DETAIL GRADE
      detailGradeDisplay=""
      grade1a='1'
      grade1b='/1'
      grade2a='6'
      grade2b='/6'
      grade3a='3'
      grade3b='/3'
      grade4a='4'
      grade4b='/5'
      grade5a='4.75'
      grade5b='/5'
       />
       

      <Card
      // INFOS
      name="Oral B"
      imgName="OralB.JPG"
      description="En groupe, refonte du site internet de oralb.io"
      grade="Note : 12.50"
      date="08/02/20"
      siteLink="https://robinb-dev.github.io/milleBoards/"
      
      // LEGEND
      legend="Semaine intensive de développement"
      
      // ICONS
      colorHeart='none'
      colorCheck='red'
      colorMobile='red'
      colorDesktop='orange'

      // CONTRIBUTORS
      contributorsDisplay=""
      contributor1="Kylian "
      contributor1Link="https://github.com/KylianF"
      contributorLast="Ikram"
      contributorLastLink="https://github.com/Ikram123-cloud"
      contributorLastDisplay=""
      
      // DETAIL GRADE
      detailGradeDisplay="none"
       />


      <Footer/>
    </div>
  )
}

export default App;
