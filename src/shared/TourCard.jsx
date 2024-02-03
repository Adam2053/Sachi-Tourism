import React from "react";
import { Card, CardBody } from "reactstrap";
import { Link } from "react-router-dom";
import "./tour-card.css";

const TourCard = ({ tour }) => {
  const { id, title, city, photo, price, featured, avgRating, reviews } = tour;
  const openInNewTab = (url)=> {
    window.open(url, "_blank", "noreferrer")
  }

  return (
    <div className="tour__card">
      <Card>
        <div className="tour__img">
          <img style={{height:'350px', width:'350px'}}src={photo} alt="tour-img" />
          <span>Featured</span>
        </div>
        <CardBody>
          <div className="card__top d-flex align-items-center justify-content-between">
            <span className="tour__location d-flex align-items-center gap-1">
              <i className="ri-map-pin-line"></i> {city}
            </span>
            <span className="tour__rating d-flex align-items-center gap-1">
              <i className="ri-star-fill"></i> {avgRating}{" "}
              {/* <span>({reviews.length})</span> */}
            </span>
          </div>

          <h5 className="tour__title"
            // role="link"
            // onClick={()=>{
            //   openInNewTab('https://whatsapp.com/channel/0029VaJK06YK5cDBBxjcUd1S')
            // }}
          >
            {title}
          </h5>

          <div className="card__bottom d-flex align-items-center justify-content-between mt-3">
            <h5>
              &#x20B9;{price} <span> /per person</span>
            </h5>

            <button style={{textDecoration:'none', color:'white'}} className="btn booking__btn"
              // role="link"
              // onClick={()=>{
              //   openInNewTab('https://whatsapp.com/channel/0029VaJK06YK5cDBBxjcUd1S')
              // }}
            >
              Book Now
            </button>
          </div>
        </CardBody>
      </Card>
    </div>
  );
};

export default TourCard;
