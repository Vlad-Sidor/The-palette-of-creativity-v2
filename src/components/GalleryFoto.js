import React from 'react';
import Title from "./Title";
import data from './dataFoto'
import Card from './Card';
import {Button} from "react-bootstrap";

export default class DemoCarousel extends React.Component {
 
    constructor(props){
      super(props);
      this.state = {
        properties: data.properties,
        property: data.properties[0]
      }
    }
  
    nextProperty = () => {
      const newIndex = this.state.property.index+1;
      this.setState({
        property: data.properties[newIndex]
      })
    }
  
    prevProperty = () => {
      const newIndex = this.state.property.index-1;
      this.setState({
        property: data.properties[newIndex]
      })
    }
  
   
    render() {
      const {properties, property} = this.state;
        return (
          <div>
  
          <div className="page">
          <Title title="Фотоконкурс" />
              <div className="col">
                <div className={`cards-slider active-slide-${property.index}`}>
                  <div className="cards-slider-wrapper" style={{
                    'transform': `translateX(-${property.index*(100/properties.length)}%)`
                  }}>
                    {
                      properties.map(property => <Card key={property._id} property={property} />)
                    }
                  </div>
                </div>
              </div>
          </div>

            <div className="buttonCard">
              <Button variant="primary" type="submit" className="ButtonRight" onClick={() => this.nextProperty()} 
              disabled={property.index === data.properties.length-1}>
              Далее
              </Button>
              <Button variant="primary" type="submit" className="ButtonLeft" onClick={() => this.prevProperty()} 
              disabled={property.index === 0}>
              Назад
              </Button>
            </div>
        </div>
        );
    }
  };