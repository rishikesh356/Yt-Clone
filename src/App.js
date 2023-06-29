import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import {Box} from '@mui/material';//The Box component serves as a wrapper component for most of the CSS utility needs.
import {Navbar,Feed,VideoDetail,ChannelDetail,SearchFeed} from './components';//get all components by combining them in components/index.js
const App = () => 
   (//sx is used to style any component in material ui
    <BrowserRouter>
     <Box sx={{backgroundColor:'#000'}}>
       <Navbar />
       <Routes>
        <Route path='/' exact element={<Feed />} />
        <Route path='/video/:id'  element={<VideoDetail />} />
        <Route path='/channel/:id'  element={<ChannelDetail />} />
        <Route path='/search/:searchTerm'  element={<SearchFeed />} />
       </Routes>
     </Box>
    </BrowserRouter>
  )


export default App