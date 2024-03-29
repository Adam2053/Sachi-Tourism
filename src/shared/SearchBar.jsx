import React, {useRef} from 'react'
import './search-bar.css'
import { Col, Form, FormGroup } from 'reactstrap'

const SearchBar = () => {

    const locationRef = useRef('');

    const searchHandler = () => {
        const location = locationRef.current.value;

        if(location === '') {
            return alert('Please fill a location')
        }
    }

  return (
    <Col lg='12'>
        <div className="search__bar">
            <Form className='d-flex align-items-center gap-4' >
                <FormGroup className='d-flex gap-3 form__group form__group-fast' >
                    <span>
                        <i className="ri-map-pin-line"></i>
                    </span>
                    <div>
                        <h6>Location</h6>
                        <input type="text" placeholder='Where are you going?' ref={locationRef}/>
                    </div>
                </FormGroup>

                <span className="search__icon" type='submit' onClick={searchHandler} >
                    <i className="ri-search-line"></i>
                </span>
            </Form>
        </div>
    </Col>
  )
}

export default SearchBar