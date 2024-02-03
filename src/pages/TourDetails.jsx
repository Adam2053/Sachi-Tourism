import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
// import { TourContext } from '../Context/TourContext';
import tours from '../assets/data/tours';
import kashmir from '../assets/images/imad-clicks-g9wFEJv2pA4-unsplash.jpg'
import '../styles/tourdetails.css'
import { Container,Row,Col, Form, ListGroup } from 'reactstrap';
import Booking from '../components/Booking/Booking';

const TourDetails = (props) => {
  const tourId = useParams();
  const {id} = tourId;
  const [tours,setTours] = useState([])
  const getData =()=>{
    fetch('/tours.json'
      ,{
        headers: {
          'Content-Type':'application/json',
          'Accept':'application/json'
        }
      }
    ).then(function(res){
      return res.json()
    }).then(function(myJson){
      // console.log(myJson);
      setTours(myJson)
    })
  }

  useEffect(()=>{
    getData()
    console.log('render');
  },[])
  
  const tour = tours.find((e)=>e.id===parseInt(id))
  console.log(tours);

  // let tour = tours.find((e)=>e.id===parseInt(id))
  // console.log(tour);

  return (
    <>
      <section>
        <Container>
          <Row>
            <Col lg='8'>
              <div className="tour__content">
                <img style={{height:'80vh'}} src={tour?.photo} alt="" />
                <div className="tour__info">
                  <h2>{tour?.title}</h2>
                  <div className="tour__extra-details">
                    <span><i className="ri-map-pin-2-line"></i>{tour?.city}</span>
                    <span><i className="ri-money-dollar-circle-line"></i>&#x20B9; {tour?.price}</span>
                    <span><i className="ri-group-line"></i>{tour?.maxGroupSize}</span>
                  </div>
                  <h5>Description</h5>
                  <p>{tour?.desc}</p>
                </div>
              </div>
            </Col>
            <Col lg='4'>
              <Booking tour={tour?tour:''}/>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  )
}

export default TourDetails