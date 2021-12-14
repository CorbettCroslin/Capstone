import React, { Component } from 'react';
import bannerPic from '../img/cincy.jpg'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import axios from 'axios'
import {BACKEND_URL} from '../config'

const FoodDrink = (props) => {
  return (
    <div className="main-contain">
   
    <div className="events-main-contain">
      <Card className="card-main">
        <Card.Img className="card-img" variant="top" src={props.fooddrink.imageURL} />
        <Card.Body>
          <Card.Title><h2 className="card-name">{props.fooddrink.name}</h2></Card.Title>
            <Card.Text>
              <h3 className="card-area">{props.fooddrink.area}</h3>
              <h4 className="card-address">{props.fooddrink.address}</h4>
              <p className="card-description">{props.fooddrink.description}</p>
          </Card.Text>
          <Button className="card-button-website right" variant="primary" href={props.fooddrink.website}>Website</Button>
        </Card.Body>
      </Card>
    </div>
  </div>
  )
  
}
 

class FoodDrinks extends Component{
  constructor(props){
    super(props)
    this.state = {
      fooddrinks: [],
      loading: true
    }
  }
  componentDidMount(){
    axios.get(BACKEND_URL + 'fooddrink/')
    .then(response => {
      this.setState({
        fooddrink : response.data,
        loading: false
      })
      console.log('fooddrink attractions')
    })
    .catch((error) => {
      console.log(error)
    });
  }
  fooddrinkList() {
    return this.state.fooddrink.map((currentFood) => {
      return <FoodDrink fooddrink = {currentFood} key={currentFood._id} />
    })
  }
    render() {
      return (
        this.state.loading === false ? (
          <div className="">
            <div className="banner-contain">
              <div className="banner-sub">
              <img className="banner-bg" src={bannerPic} alt="Logo" />
            </div>
          </div> 
            <div className="container-fluid">
              <div className="row justify-content-center">
                <div id='foodList'>
                  {this.fooddrinkList()}
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="">
            <h1>Loading...</h1>
          
          </div>
        )
    
      )
    }    
}

export default FoodDrinks