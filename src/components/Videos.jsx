import { Stack,Box } from "@mui/material"
import {VideoCard,ChannelCard} from './'
const Videos = ({videos,direction}) => {
  //console.log(videos)
  if(!videos?.length) return "Loading..."//if videos is not yet fetched return loading
  return (
    <Stack direction={direction || "row"} //if direction is passed then columns else row
    flexWrap="wrap" justifyContent="start" alignItems="start" gap={2}>
     {videos.map((item,idx)=>(
      <Box key={idx} //idx is unique video id used for map
      >
         {item.id.videoId && <VideoCard video={item}/>//if element has video id then show all videos w/o profile
         }
         {item.id.channelId && <ChannelCard channelDetail={item}//if element has channel id show profile alaong with videos
         />}
      </Box>
     ))}
    </Stack>
  )
}

export default Videos