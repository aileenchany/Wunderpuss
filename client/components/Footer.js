import React from 'react';
import { Typography } from '@mui/material';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <Typography
      variant='body2'
      color='text.secondary'
      align='center'
      sx={{ mt: 15 }}
    >
      {'Copyright © '}
      <a
        href='https://github.com/Team-Wunderpuss-2-0/Wunderpuss'
        style={{ textDecoration: 'none' }}
        target='_blank'
      >
        Wunderpus{' '}
      </a>
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

export default Footer;
