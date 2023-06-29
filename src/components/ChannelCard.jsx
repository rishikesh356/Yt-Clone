import { Box,CardMedia,CardContent,Typography } from "@mui/material"
import { CheckCircle } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { demoProfilePicture } from "../utils/constants";
const ChannelCard = ({channelDetail,marginTop}) => 
//card->cardcontent(link to channel profile url)->cardmedia->channel title->subscriber
//in video card we resolve the video prop into video id and snippe but here we use channelDetail directly
(
    <Box 
    sx={{
      boxShadow: 'none',
      borderRadius: '20px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      width: { xs: '356px', md: '20vw' },
      height: '326px',
      margin: 'auto',
      marginTop//margin top used only when passed as prop
    }}
    >
     <Link to={`/channel/${channelDetail?.id?.channelId}`}//entire card links to cahnnel url
     >
      <CardContent sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', textAlign: 'center', color: '#fff' }}>
         <CardMedia 
         image={channelDetail?.snippet?.thumbnails?.high?.url || demoProfilePicture}//card image url
         alt={channelDetail?.snippet?.title}
          sx={{ borderRadius: '50%', height: '180px', width: '180px', mb: 2, border: '1px solid #e3e3e3' }}
         />
         <Typography variant="h6">
           {channelDetail?.snippet?.title//card contains channel title
           }
           <CheckCircle sx={{ fontSize: "15px", color: "gray", ml: "5px" }}//the check crcile beside title
            />
         </Typography>
           {channelDetail?.statistics?.subscriberCount &&(//chech if channel subscriber exists
            <Typography>
              {parseInt(channelDetail?.statistics?.subscriberCount).toLocaleString()//parse into readable text
              } Subscribers 
            </Typography>
           )}
      </CardContent>
     </Link>
    </Box>
  )


export default ChannelCard