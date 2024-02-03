import React, { useContext } from 'react'
import TourCard from '../shared/TourCard'
import tourData from './../assets/data/tours'
// import { Col } from 'reactstrap'
import "../styles/tours.css";
import FeaturedTourList from '../Featured-tours/FeaturedTourList';
import { Container, Row, Col } from "reactstrap";

import Subtitle from "./../shared/Subtitle";
// import { TourContext } from '../Context/TourContext';

const Tours = () => {
  
  // const {tours} = useContext(TourContext);
  // const {tourId} = useParams();


  return (
    <section>
        <Container >
          <Row className='align-items-center justify-content-between'>
            <Col lg="12" className="mb-5">
              <Subtitle subtitle={"Explore"} />
              <h2 className="featured__tour-title">Our featured tours</h2>
            </Col>
            <FeaturedTourList />
          </Row>
        </Container>
      </section>
        
  )
}

export default Tours