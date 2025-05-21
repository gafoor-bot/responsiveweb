import React from 'react';
import { Box, Container, Typography, Link, IconButton } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        py: 3,
        px: 2,
        mt: 'auto',
        backgroundColor: (theme) => theme.palette.grey[200],
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', sm: 'row' },
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <Typography variant="body2" color="text.secondary">
            © {new Date().getFullYear()} My Blog. All rights reserved.
          </Typography>
          <Box sx={{ mt: { xs: 2, sm: 0 } }}>
            <IconButton
              component={Link}
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FacebookIcon />
            </IconButton>
            <IconButton
              component={Link}
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <TwitterIcon />
            </IconButton>
            <IconButton
              component={Link}
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <InstagramIcon />
            </IconButton>
            <IconButton
              component={Link}
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <LinkedInIcon />
            </IconButton>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer; 