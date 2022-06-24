import React, { Component } from 'react'
import './Tour.css'
export default class Tour extends Component {
    state = {
        showinfo: false
    }
    ShowHide = () => {
        this.setState({
            showinfo: !this.state.showinfo
        }
        )
    }
  render() {
    const{Id,city,img,name,info} = this.props.tour;
    const { removeTour } = this.props;
    return (
        <article className='tour'>
            <div className='img-container'>
                <img src={img} alt='city_image'/>
                <span className='close-btn' onClick={() => {
                    removeTour(Id);
                    }}>
                    <i class="fa-solid fa-rectangle-xmark"></i>
                </span>
            </div>
            <div className='tour-info'>
                <h3>{city}</h3>
                <h4>{name}</h4>
                <h5>
                    info{" "}
                    <span onClick={this.ShowHide}><i class="fas fa-caret-square-down"></i></span>
                </h5>
                {this.state.showinfo && <p>{info}</p>}
            </div>
        </article>
    )
  }
}