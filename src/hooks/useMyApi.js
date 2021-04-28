import React, { useEffect, useState } from 'react';
import getMyApi from '../services/importApi';
import Card from '../Card'

class UseMyApi extends React.Component {
  constructor(props){
    super(props);
  }
  
  state = {
    data: this.props.data
  }

  render() {
    const {data} = this.state
    return (
      <React.Fragment>
        {this.createCard()}
      </React.Fragment>
    )
  }

  createCard() {
    const {data} = this.state

    return data.map((item, index) => {
      // console.log(item);
      return (
        <React.Fragment>
          <Card 
            // INFOS
            name= {item.name}
            imgName= {item.imgName}
            description= {item.description}
            grade= {item.grade}
            date= {item.date}
            siteLink= {item.siteLink}

            // LEGEND
            legend= {item.legend}
            legendLink= {item.legendLink}
            legendLinkName= {item.legendLinkName}
            lengend2= {item.legend2}
            
            // ICONS
            colorHeart= {item.colorHeart}
            colorCheck= {item.colorCheck}
            colorMobile= {item.colorMobile}
            colorDesktop= {item.colorDesktop}

            // CONTRIBUTORS
            contributorsDisplay= {item.contributorsDisplay}
            contributor1= {item.contributor1}
            contributor1Link= {item.contributor1Link}
            contributor2= {item.contributor2}
            contributor2Link= {item.contributor2Link}
            contributor3= {item.contributor3}
            contributor3Link= {item.contributor3Link}
            contributor4= {item.contributor4}
            contributor4Link= {item.contributor4Link}
            contributorLast= {item.contributorLast}
            contributorLastLink= {item.contributorLastLink}
            contributorLastDisplay= {item.contributorLastDisplay}
            
            // DETAIL GRADE
            detailGradeDisplay= {item.detailGradeDisplay}
            grade1a= {item.grade1a}
            grade1b= {item.grade1b}
            grade2a= {item.grade2a}
            grade2b= {item.grade2b}
            grade3a= {item.grade3a}
            grade3b= {item.grade3b}
            grade4a= {item.grade4a}
            grade4b= {item.grade4b}
            grade5a= {item.grade5a}
            grade5b= {item.grade5b}
          />
        </React.Fragment>
      )
    })
  }
}

export default UseMyApi;
