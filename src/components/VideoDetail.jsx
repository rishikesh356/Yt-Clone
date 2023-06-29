import { useState,useEffect } from "react"
import { Link,useParams } from "react-router-dom"
import ReactPlayer from "react-player"
import { Typography,Stack, Box } from "@mui/material"

import {Videos} from './'
import { fetchFromAPI } from "../utils/fetchFromAPI"
import { CheckCircle } from "@mui/icons-material"
const VideoDetail = () => {
  const [videoDetail, setVideoDetail] = useState(null);
  const [videos, setVideos] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    fetchFromAPI(`videos?part=snippet,statistics&id=${id}`)
      .then((data) => setVideoDetail(data.items[0]))
      fetchFromAPI(`search?part=snippet&relatedToVideoId=${id}&type=video`)
      .then((data)=>setVideos(data.items))
  }, [id]);//call again whenever id changed
  if(!videoDetail?.snippet) return "Loading..."//videoDetail fetching may take time so for the time being it is null 
  //this may throw error while fetching from null so we return Loading
  const { snippet: { title, channelId, channelTitle }, statistics: { viewCount, likeCount } } = videoDetail;
  console.log(videoDetail);
  return (
    <Box minHeight="95vh">
    <Stack direction={{ xs: "column", md: "row" }} //outer box conatins the video playing ,title,channel title,views
    >
      <Box flex={1}>
        <Box sx={{ width: "100%", position: "sticky", top: "86px" }} 
        >
          <ReactPlayer url={`https://www.youtube.com/watch?v=${id}`}//plays the video
           className="react-player" controls //control used to navigate and provide controlling option in video
          />
          <Typography color="#fff" variant="h5" fontWeight="bold" p={2}>
              {title}
            </Typography>
            <Stack direction="row" justifyContent="space-between" sx={{ color: "#fff" }} py={1} px={2} >
               <Link to={`/channel/${channelId}`}>
                <Typography variant={{ sm: "subtitle1", md: 'h6' }}  color="#fff" >
                  {channelTitle}
                  <CheckCircle sx={{ fontSize: "12px", color: "gray", ml: "5px" }} />
                </Typography>
              </Link>
              <Stack direction="row" gap="20px" alignItems="center">
                <Typography variant="body1" sx={{ opacity: 0.7 }}>
                   {parseInt(viewCount).toLocaleString() //add commas to viewcount number to make it readable
                   } views
                </Typography>
                <Typography variant="body1" sx={{ opacity: 0.7 }}>
                   {parseInt(likeCount).toLocaleString() //add commas to likecount number to make it readable
                   } likes
                </Typography>
              </Stack>
            </Stack>
          </Box>
          
        </Box>
        <Box px={2} py={{ md: 1, xs: 5 }} justifyContent="center" alignItems="center" >
           <Videos videos={videos} direction="column" //render related videos and pass direction as props
            />
          </Box>
      </Stack>
    </Box>
  )
}

export default VideoDetail