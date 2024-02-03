import React, { useRef, useState } from 'react'
import './Booking.css'
import { Form, FormGroup, ListGroup, ListGroupItem, Button } from 'reactstrap'
import emailjs from '@emailjs/browser'

const Booking = ({tour}) => { 
    const[total,setTotal] = useState(0)
    // console.log('render')
    const [loading,setLoading] = useState(false)
    const formref = useRef()
    const handleChange = (e)=>{
        e.target.reset()
    }
    const handleChangeMember = (e) => {
        if(e.target.value>=0){
            setTotal(e.target.value*tour.price)
        }
    }

    const sendEmail = (e) => {
        setLoading(true)
        e.preventDefault();
    
        emailjs.sendForm('service_jwkjuko', 'template_rhlv3ev', formref.current, 'JHWOeJmO-riqsCWjn')
          .then((result) => {
              console.log('this ran');
            //   console.log(result.text);
            //   e.target.reset();
              setLoading(false)
              alert('Email Sent')
              return;
            }, (error) => {
                // console.log(error.text);
                setLoading(false)
                return;
            });
        };
  return (
    <div className="booking">
        <div className="booking__top d-flex align-items-center justify-content-between">
            <h3>
                &#x20B9; {tour.price} <span>/per person</span>
            </h3>
        </div>
        
        <div className="booking__form">
            <h5>Fill Your Information</h5>
            <form ref={formref} id='form' onSubmit={sendEmail} className='booking__info-form' >
                <FormGroup>
                    <input type="text" placeholder='Full Name' name='name' id='fullName' required onChange={handleChange} />
                </FormGroup>
                <FormGroup>
                    <input type="number" placeholder='Phone' name='phone' id='phone' required onChange={handleChange} />
                </FormGroup>
                <FormGroup className='d-flex align-items-center gap-3'>
                    <input type="email" placeholder='Email Address' name='email' id='email' onChange={handleChange} />
                </FormGroup>
                <FormGroup className='d-flex align-items-center gap-3'>
                    <input type="number" min='0' placeholder='Members' name='members' required id='members' onChange={handleChangeMember}  />
                </FormGroup>
            </form>
        </div>
        <div className="booking__bottom">
            <ListGroup>
                <ListGroupItem className="border-0 px-0">
                    <h5 className="d-flex align-items-center gap-1">
                        &#x20B9; {tour.price} <i className="ri-close-line"></i> 1 person
                    </h5>
                    <span>&#x20B9; {tour.price}</span>
                </ListGroupItem>
                <ListGroupItem className="border-0 px-0 total">
                    <h5>Total</h5>
                    <span>&#x20B9; {total}</span>
                </ListGroupItem>
            </ListGroup>
            <Button form='form' type='submit' onClick={sendEmail} className='btn primary__btn w-100 mt-4'>Book Now</Button>
        </div>
    </div>
  )
}

export default Booking