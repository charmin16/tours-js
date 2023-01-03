import React, { useEffect, useState } from 'react'
import './Tours.css'

function Tours() {

    const url = 'https://course-api.com/react-tours-project'
    const [tours, setTours] = useState([])
    const [errors, setErrors] = useState('')
    const [isPending, setIsPending] = useState(true)

    const [details, setDetails ] = useState(true)

    useEffect(() => {

        const fetchTour = async() => {
            const response = await fetch(url)
            const data = await response.json()
            setTours(data)
            setIsPending(false)
        }

        fetchTour()
        setIsPending(true)
    }, [url])

    const deleteHandler = (id) => {
        setTours(prevTours => prevTours.filter(tou => tou.id !== id))
    }

    const detailsHandler = (id) => {
        setDetails(false)
    }

    const detailzHandler = () => {
        setDetails(true)
    }

    

  return (
      <div className='container'>
          {isPending && <h2>Loading...</h2>}
           <h1>Our Tours</h1>
          {tours.map(tour => (
            <div key={tour.id} className='card-container'>
                 
                <img src={tour.image} alt="" />
                <div className='next'>
                <h3>{tour.name}</h3>
                <h3>${tour.price}</h3>
                </div>
                {/* <p>{tour.info.substring(0, 150)}... <span>Read More</span> </p> */}
                {details ? <p>{tour.info.substring(0, 150)}... <span onClick={detailsHandler}>Read More</span></p> : <p>{tour.info}... <span onClick={detailzHandler}>Read Less</span></p>}
                  
                <button onClick={() => deleteHandler(tour.id)}>Not Interested</button>
                  
              </div>
          ))}
    </div>
  )
}

export default Tours




