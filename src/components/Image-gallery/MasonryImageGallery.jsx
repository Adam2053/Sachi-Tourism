import React, { useEffect, useState } from 'react'
import galleryImages from './galleryImages'
import Masonry ,{ ResponsiveMasonry } from 'react-responsive-masonry'

const MasonryImageGallery = () => {
  const getData =()=>{
    fetch('/gallery.json'
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
      setData(myJson)
    })
  }

  useEffect(()=>{
    getData()
  },[])
  
  const [data,setData] = useState([])
  return (
    <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 768: 3, 992: 4 }} >
        <Masonry gutter='1rem' >
            {data?.map((item,index) => (
                <img
                className='masonry__img'
                    src={item.photo}
                    key={index}
                    alt=''
                    style={{width:"100%", display:"block", borderRadius:"10px"}}
                />
            ))}
        </Masonry>
    </ResponsiveMasonry>
  )
}

export default MasonryImageGallery