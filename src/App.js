import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Box } from '@mui/material';
import {  Navbar } from './components';

function App() {
  // <BrowserRouter>
  return(
    <Box sx={{ backgroundColor: '#000' }}>
    <Navbar />
  </Box>
  )
 
  {/* </BrowserRouter> */}
}

export default App;
