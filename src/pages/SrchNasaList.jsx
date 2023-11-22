import { useState, useEffect } from 'react'

import viteLogo from '/vite.svg'
import Form from '../components/Form'
import NasaContentDisplay from '../components/NasaContentDisplay'

function SrchNasaList() {
  // create a variable to hold my api key
  //const apiKey = "myKey";

  // create state to hold the movie data
  const [content, setContent] = useState(null);

  //    ===== this part is new  =====
  // create a function that is given the search term then does the fetch request
  //    =====                   =====
  // Function getContent
  const getContent = async (searchTerm) => {
    // create a variable that combines the parts of the url into one
    // const baseUrl = 'https://www.omdbapi.com/';
    // const url = baseUrl + '?' + 'apikey=' + apiKey + '&' + 't=' + searchTerm;
    const baseUrl = 'https://images-api.nasa.gov/';
    const url = baseUrl + 'search?q=' + searchTerm;    
    // make fetch request and store response
    try {
      // fetch with the url, returns the same thing as when i put that url in the address bar
      const response = await fetch(url);
      console.log(url);
      const data = await response.json();
      console.log(data);
      setContent(data);
    } catch (e) {
      console.error(e);
    }
  }
    //This will run on the first render but not on subsquent renders
    // useEffect(() => {
    //   const movieArray = ["Clueless", "Mulan", "lilo & stitch", "batman", "air bud"];
    //   const firstMovie = movieArray[Math.floor(Math.random() * movieArray.length)];
    //   //getContent(firstMovie);
    // }, []);
  
  // pass the function down to the form via props
  // <Form nasasearch={getContent} />
  // that is passing our getContent method as props that are called nasasearch in the Form
  return (
    <div>
      <Form nasasearch={getContent}/>
      <NasaContentDisplay content={content}/>
    </div>
  )
}

export default SrchNasaList