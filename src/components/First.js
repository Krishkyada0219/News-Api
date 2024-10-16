import React, { useState } from 'react'
import { useEffect } from 'react'

const First = () => {
    const [getdata, setgetdata] = useState([])
    const [data, setdata] = useState([])
    useEffect(() => {
        fetchdata()
    }, [])
    const fetchdata = async () => {
        const response = await fetch('https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=5fe26e819bf64e31ba75205fcc9a6a2f')
        if (response) {
            const data = await response.json()
            setgetdata(data.articles)
            console.log(data)
        }
    }
    return (    
        <div class="container mt-3">
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet"></link>
            {(getdata || []).map((item,index) =>{
                return(
                    <div class="card" style={{width: "400px"}}>
                    <img class="card-img-top" src={item.urlToImage} alt="Card image" />
                    <div class="card-body">
                      <h4 class="card-title" >{item.author}</h4>
                      <p class="card-text">{item.title}</p>
                      <a href={item.url} class="btn btn-primary" >See Profile</a>
                    </div>
                  </div>
                )
            })}
            
        </div>
    )
}

export default First