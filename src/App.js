import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Box } from '@mui/material';
import {  Navbar,Feed } from './components';

function App() {
  // <BrowserRouter>
  return(
    <BrowserRouter>
    <Box sx={{ backgroundColor: '#000' }}>
    <Navbar />
    <Routes>
        <Route exact path='/' element={<Feed />} />
        {/* <Route path='/video/:id' element={<VideoDetail />} />
        <Route path='/channel/:id' element={<ChannelDetail />} />
        <Route path='/search/:searchTerm' element={<SearchFeed />} /> */}
      </Routes>
    </Box>
    </BrowserRouter>
    
  )
 
  {/* </BrowserRouter> */}
}

export default App;
