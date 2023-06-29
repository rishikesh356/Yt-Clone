import { useState,useEffect } from "react";
import { useParams } from "react-router-dom";//access parameters of current route
import { Box } from "@mui/material";
import { Videos,ChannelCard } from "./";
import { fetchFromAPI } from "../utils/fetchFromAPI";
//Channel Detail fetches the current channel id using params
//it fetches the first channel detail into channelDetail
// it fetches data items(video details) into videos
//it then creates a linear gradient and calls channel card
//it then calls videos to mapp all the videos
const ChannelDetail = () => {
  const [channelDetail, setchannelDetail] = useState(null)
  const [videos, setvideos] = useState([])
  const {id}=useParams();//access channelId from path domain/channel/channelId
  useEffect(() => {
    fetchFromAPI(`channels?part=snippet&id=${id}`)
    .then((data)=>setchannelDetail(data?.items[0]))//set channel detail to first channel in the list
    fetchFromAPI(`search?channelId=${id}&part=snippet&order=date`)
    .then((data)=>setvideos(data?.items))//set videos to fetched video data
  }, [id])
  //console.log(channelDetail,videos);
  return (
    <Box minHeight='95vh'>
      <Box>
        <div 
        style={{
          height:'300px',
          background: 'linear-gradient(90deg, rgba(0,238,247,1) 0%, rgba(206,3,184,1) 100%, rgba(0,212,255,1) 100%)',
          zIndex: 10,
        }}/>
        <ChannelCard channelDetail={channelDetail} marginTop="-93px"//margin top passed as prop reauseable components
         />
      </Box>
      <Box p={2} display="flex">
      <Box sx={{ mr: { sm: '100px' } }}/>
        <Videos videos={videos} />
      </Box>
    </Box>
  )
}

export default ChannelDetail