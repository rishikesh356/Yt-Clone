import { Link } from 'react-router-dom';
import { Typography, Card, CardContent, CardMedia } from '@mui/material';
//card - contents and actions abt single subject
//card content-api for card
//card media-media api for card
import { CheckCircle } from '@mui/icons-material';
import { demoThumbnailUrl, demoVideoUrl, demoVideoTitle, demoChannelUrl, demoChannelTitle } from '../utils/constants';
//demo used for those videos for which dont have proper data in api
const VideoCard = ({ video: { id: { videoId }, snippet } }) => {
  //Card->cardmedia(image link to video url)->cardcontent->cardtitle(title link to video url)->channeltitle & checkcircle(channel title link to channel url)
  return (
    <Card sx={{ width: { xs: '100%', sm: '358px', md: '20vw', }, boxShadow: "none", borderRadius: 0 }}>
      <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}//card image link to video url
      >
        <CardMedia
          image={snippet?.thumbnails?.high?.url || demoThumbnailUrl}//location for video image url
          alt={snippet?.title}
          sx={{ width: { xs: '100%', sm: '358px'}, height: 180 }}
        />
      </Link>
      <CardContent sx={{ backgroundColor: '#1e1e1e', height: '106px' }}>
        <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}//card title link to video url
        >
          <Typography variant="subtitle2" fontWeight="bold" color="gray">
            {snippet?.title.slice(0, 60) || demoVideoTitle(0, 60)}
          </Typography>
        </Link>
        <Link to={snippet?.channelId ? `/channel/${snippet?.channelId}` : demoChannelUrl}//card channel link to channel url
        >
          <Typography variant="subtitle1" fontWeight="bold" color="#FFF">
            {snippet?.channelTitle || demoChannelTitle}
            <CheckCircle sx={{ fontSize: "12px", color: "gray", ml: "5px" }}//the check crcile beside title
            />
          </Typography>
        </Link>
      </CardContent>

    </Card>
  )
}

export default VideoCard