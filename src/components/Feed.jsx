import {useState,useEffect} from 'react'
import {Box,Stack,Typography} from '@mui/material';//typography is replacement for all text elements like p a h
import { fetchFromAPI } from '../utils/fetchFromAPI';
import {SideBar,Videos} from './';//import directly from index.js

const Feed = () => {
  const [selectedCategory, setselectedCategory] = useState('New')
  const [videos, setvideos] = useState([])
  useEffect(() =>{
    fetchFromAPI(`search?part=snippet&q=${selectedCategory}`)
    .then((data)=>{setvideos(data.items)})//fetch API async func so cant put in const var so as a promise use then
  },[selectedCategory])//recall function whenever new category selected
  return (//px:padding horizontal
    //Stack provides container component for arranging elements vertically or horizontally.
    //Box for overall styling for css utility needs(in this case the grey line column  division)
    //typography for text replacement(copyright)
    <Stack sx={{flexDirection:{sx:'column',md:'row'}}}>
      <Box sx={{height:{sx:'auto',md:'92vh'},borderRight:'1px solid #3d3d3d',px:{sx:0 ,md:2}}}>
        <SideBar 
        selectedCategory={selectedCategory}
        setselectedCategory={setselectedCategory}
        />
        <Typography className='copyright' variant='body2' sx={{mt:1.5 , color:"#fff"}}>
          Copyright 2023 RT Media
        </Typography>
      </Box>
      <Box p={2} sx={{overflowY:'auto' , height:'90vh' ,flex:2}}>
        <Typography variant='h4' fontWeight={'bold'} mb={2} sx={{color:'white'}}>
          {selectedCategory} <span style={{color:'#FC1503'}}>videos</span>
        </Typography>
        <Videos videos={videos}//pass videos as prop by fetching through api
         />
      </Box>
    </Stack>
  )
}

export default Feed