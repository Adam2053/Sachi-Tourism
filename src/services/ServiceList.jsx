import React from 'react'
import ServiceCard from './ServiceCard'
import { Col } from 'reactstrap'
import weatherImg from '../assets/images/weather.png'
import guideImg from '../assets/images/guide.png'
import customizationImg from '../assets/images/customization.png'

const servicesData = [
    {
        imgUrl: weatherImg,
        title: "Calculate Weather",
        desc: "Get accurate weather reports"
    },
    {
        imgUrl: guideImg,
        title: "Best Tour Guide",
        desc: "We provide with the best tour guide available"
    },
    {
        imgUrl: customizationImg,
        title: "Customization",
        desc: "Full tour customization available"
    }
]

const ServiceList = () => {
  return (
    <>
        {servicesData.map((item,index) => (
            <Col lg='3' key={index} >
                <ServiceCard item={item} />
            </Col>
        ))}
    </>
  )
}

export default ServiceList