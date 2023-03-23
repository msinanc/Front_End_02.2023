import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import { Avatar } from '@mui/material';
import CameraAltOutlinedIcon from '@mui/icons-material/CameraAltOutlined';
import VideocamIcon from '@mui/icons-material/Videocam';
import TvRoundedIcon from '@mui/icons-material/TvRounded';

export default function ThinHeaderBar() {
  return (
    <Box sx={{ flexGrow: 1, display: 'flex' }}>
      <AppBar position="static"
        sx={{
          borderTopLeftRadius: '7px',
          borderTopRightRadius: '7px',
          height: '30px',
          bgcolor: '#1D2739'
        }} >
        <Toolbar variant='dense' sx={{ alignItems: 'center', minHeight: '30px' }} >
          <IconButton edge="start" color="inherit" aria-label="menu" >
            <CameraAltOutlinedIcon />
          <Typography variant="h6" component="div" 
                    sx={{ flexGrow: 1, ml: 1, mr: 2, fontSize: 16 }}>
            Foto Galeri
          </Typography>
          </IconButton>

          <IconButton edge="start" color="inherit" aria-label="menu" >
            <VideocamIcon />
          <Typography variant="h6" component="div" 
                    sx={{ flexGrow: 1, ml: 1, mr: 2, fontSize: 16 }}>
            Video Galeri
          </Typography>
          </IconButton>

          <IconButton edge="start" color="inherit" aria-label="menu" >
            <TvRoundedIcon />
          <Typography variant="h6" component="div" 
                    sx={{ flexGrow: 1, ml: 1, mr: 2, fontSize: 16 }}>
            Canlı Yayın
          </Typography>
          </IconButton>

          
          <Avatar sx={{ marginLeft: 'auto', width: 20, height: 20 }} src="My Work/React/project-00-newswebsite/public/assets/images/blank-profile-picture.webp" />
        </Toolbar>
      </AppBar>
    </Box>
  );
}