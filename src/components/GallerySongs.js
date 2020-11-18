import React from 'react';
import Title from "./Title";
import data from './dataSong'
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
        <div className="margin-bottom">
        <Title title="Студенческий листопад" />
        <div className="page">
     
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

        </div >
        
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

/*export default class Sample extends React.Component {
    render() {
	return (
	    <Gallery photos={PHOTO_SET} />
	);
    }
}
const PHOTO_SET = [
  {
    src: img1,
    width: 4,
    height: 3
  },
  {
    src: img2,
    width: 4,
    height: 3
  },
  {
    src: img3,
    width: 4,
    height: 3
  },
  {
    src: img4,
    width: 4,
    height: 3
  },
  {
    src: img31,
    width: 2,
    height: 3
  },
  {
    src: img6,
    width: 3,
    height: 2
  },
  {
    src: img7,
    width: 3,
    height: 2
  },
  {
    src: img8,
    width: 3,
    height: 2
  },
  {
    src: img9,
    width: 4,
    height: 3
  },
  {
    src: img10,
    width: 4,
    height: 3
  },
  {
    src: img11,
    width: 5,
    height: 4
  },
  {
    src: img12,
    width: 4,
    height: 3
  },
  {
    src: img13,
    width: 2,
    height: 3
  },
  {
    src: img14,
    width: 4,
    height: 3
  },
  {
    src: img15,
    width: 4,
    height: 3
  },
  {
    src: img16,
    width: 4,
    height: 3
  },
  {
    src: img17,
    width: 4,
    height: 3
  },
  {
    src: img18,
    width: 2,
    height: 3
  },
  {
    src: img19,
    width: 4,
    height: 3
  },
  {
    src: img20,
    width: 2,
    height: 3
  },
  {
    src: img21,
    width: 4,
    height: 3
  },
  {
    src: img22,
    width: 4,
    height: 3
  },
  {
    src: img23,
    width: 4,
    height: 3
  },
  {
    src: img24,
    width: 4,
    height: 3
  },
  {
    src: img25,
    width: 4,
    height: 3
  },
  {
    src: img26,
    width: 4,
    height: 3
  },
  {
    src: img27,
    width: 2,
    height: 3
  },
  {
    src: img28,
    width: 4,
    height: 3
  },
  {
    src: img29,
    width: 4,
    height: 3
  },
  {
    src: img30,
    width: 2,
    height: 3
  },
  {
    src: img5,
    width: 4,
    height: 3
  },
  {
    src: img32,
    width: 4,
    height: 3
  },
  {
    src: img33,
    width: 4,
    height: 3
  },
  {
    src: img34,
    width: 4,
    height: 3
  }
];*/