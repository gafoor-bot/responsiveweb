import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import {
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Button,
  Box,
} from '@mui/material';

const featuredPosts = [
  {
    id: 1,
    title: 'Getting Started with React',
    excerpt: 'Learn the basics of React and start building modern web applications.',
    image: 'https://picsum.photos/800/600?random=1',
  },
  {
    id: 2,
    title: 'Advanced TypeScript Patterns',
    excerpt: 'Explore advanced TypeScript patterns and best practices for better code.',
    image: 'https://picsum.photos/800/600?random=2',
  },
  {
    id: 3,
    title: 'Modern CSS Techniques',
    excerpt: 'Discover modern CSS techniques to create beautiful and responsive designs.',
    image: 'https://picsum.photos/800/600?random=3',
  },
];

const Home = () => {
  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    e.currentTarget.src = 'https://via.placeholder.com/800x600?text=Featured+Post';
  };

  return (
    <Container maxWidth="lg">
      {/* Hero Section */}
      <Box
        sx={{
          bgcolor: 'primary.main',
          color: 'white',
          py: 8,
          px: 4,
          borderRadius: 2,
          mb: 6,
          textAlign: 'center',
        }}
      >
        <Typography variant="h2" component="h1" gutterBottom>
          Welcome to My Blog
        </Typography>
        <Typography variant="h5" component="p" paragraph>
          Discover the latest insights about web development, programming, and technology.
        </Typography>
        <Button
          component={RouterLink}
          to="/blog"
          variant="contained"
          color="secondary"
          size="large"
          sx={{ mt: 2 }}
        >
          Read Our Blog
        </Button>
      </Box>

      {/* Featured Posts */}
      <Typography variant="h4" component="h2" gutterBottom>
        Featured Posts
      </Typography>
      <Grid container spacing={4}>
        {featuredPosts.map((post) => (
          <Grid item xs={12} sm={6} md={4} key={post.id}>
            <Card
              sx={{
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                transition: 'transform 0.2s',
                '&:hover': {
                  transform: 'scale(1.02)',
                },
              }}
            >
              <CardMedia
                component="img"
                height="200"
                image={post.image}
                alt={post.title}
                onError={handleImageError}
              />
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography gutterBottom variant="h5" component="h3">
                  {post.title}
                </Typography>
                <Typography>{post.excerpt}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Home; 