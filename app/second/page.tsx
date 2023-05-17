"use client"

import '../globals.css'
import { useState, useEffect } from 'react';
// import Link from 'next/link'


   export default async function Page() {
    const [movies, setMovies] = useState([]);
    useEffect(() => {
        const index = Math.floor(Math.random()*10)
        fetch(`https://dog-facts-api.herokuapp.com/api/v1/resources/dogs?index=${index}`)
        .then(res => res.json())
        .then(data => setMovies(data.fact))
      
        
      }, [])
    
    return (
      <p>
        {movies}
      </p>
    );
  }