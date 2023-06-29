import {useState,useEffect} from 'react'
import {Box,Typography} from '@mui/material';//typography is replacement for all text elements like p a h
import { fetchFromAPI } from '../utils/fetchFromAPI';
import {Videos} from './';//import directly from index.js
import { useParams } from 'react-router-dom';
//same as feed
//url:/search/:/searchTerm
//obatin searchTerm from useParams
//render only videos
const SearchFeed = () => {
 
  const [videos, setvideos] = useState([])
  const {searchTerm}=useParams();
  useEffect(() =>{
    fetchFromAPI(`search?part=snippet&q=${searchTerm}`)
    .then((data)=>{setvideos(data.items)})//fetch API async func so cant put in const var so as a promise use then
  },[searchTerm])//recall function whenever new category selected
  return (//px:padding horizontal
    //Stack provides container component for arranging elements vertically or horizontally.
    //Box for overall styling for css utility needs(in this case the grey line column  division)
    //typography for text replacement(copyright)
    
      <Box p={2} sx={{overflowY:'auto' , height:'90vh' ,flex:2}}>
        <Typography variant='h4' fontWeight={'bold'} mb={2} sx={{color:'white'}}>
        Search Results for <span style={{color:'#FC1503'}}>{searchTerm}</span> videos
        </Typography>
        <Videos videos={videos}//pass videos as prop by fetching through api
         />
      </Box>
    
  )
}

export default SearchFeed