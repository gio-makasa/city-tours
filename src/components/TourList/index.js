import React, { Component } from 'react'
import './TourList.css'
import Tour from '../Tour/Tour'
import { TourData } from '../TourData'
export default class TourList extends Component {
    state = {
        tours: TourData
    };
    removeTour = Id => {
        const {tours} = this.state;
        const sortedtours = tours.filter(tour => tour.Id !== Id);
        this.setState({
            tours: sortedtours
        });
    }
  render() {
    const { tours } = this.state;
    return (
        <section className='tourlist'>
            {tours.map(tour =>{
                return <Tour key={tour.Id} tour={tour} removeTour={this.removeTour}/>
            })}
        </section>
    )
  }
}