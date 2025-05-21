import React, { useState } from 'react';
import {
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  TextField,
  InputAdornment,
  Box,
  Chip,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Stack,
  SelectChangeEvent,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import SortIcon from '@mui/icons-material/Sort';

const blogPosts = [
  {
    id: 1,
    title: 'Getting Started with React',
    excerpt: 'Learn the basics of React and start building modern web applications.',
    image: 'https://picsum.photos/800/600?random=1',
    category: 'React',
    date: '2024-03-15',
  },
  {
    id: 2,
    title: 'Advanced TypeScript Patterns',
    excerpt: 'Explore advanced TypeScript patterns and best practices for better code.',
    image: 'https://picsum.photos/800/600?random=2',
    category: 'TypeScript',
    date: '2024-03-14',
  },
  {
    id: 3,
    title: 'Modern CSS Techniques',
    excerpt: 'Discover modern CSS techniques to create beautiful and responsive designs.',
    image: 'https://picsum.photos/800/600?random=3',
    category: 'CSS',
    date: '2024-03-13',
  },
  {
    id: 4,
    title: 'JavaScript Best Practices',
    excerpt: 'Learn the best practices for writing clean and maintainable JavaScript code.',
    image: 'https://picsum.photos/800/600?random=4',
    category: 'JavaScript',
    date: '2024-03-12',
  },
  {
    id: 5,
    title: 'Web Performance Optimization',
    excerpt: 'Tips and tricks for optimizing your web application performance.',
    image: 'https://picsum.photos/800/600?random=5',
    category: 'Performance',
    date: '2024-03-11',
  },
  {
    id: 6,
    title: 'Responsive Design Principles',
    excerpt: 'Master the principles of responsive design for better user experience.',
    image: 'https://picsum.photos/800/600?random=6',
    category: 'Design',
    date: '2024-03-10',
  },
];

const categories = Array.from(new Set(blogPosts.map(post => post.category)));

const Blog = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('');
  const [sortBy, setSortBy] = useState<string>('date');
  const [dateRange, setDateRange] = useState<{ start: string; end: string }>({
    start: '',
    end: '',
  });

  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    e.currentTarget.src = 'https://via.placeholder.com/800x600?text=Blog+Post';
  };

  const handleCategoryChange = (event: SelectChangeEvent) => {
    setSelectedCategory(event.target.value);
  };

  const handleSortChange = (event: SelectChangeEvent) => {
    setSortBy(event.target.value);
  };

  const handleDateChange = (field: 'start' | 'end') => (event: React.ChangeEvent<HTMLInputElement>) => {
    setDateRange(prev => ({
      ...prev,
      [field]: event.target.value
    }));
  };

  const filteredPosts = blogPosts
    .filter((post) => {
      const matchesSearch = 
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.category.toLowerCase().includes(searchQuery.toLowerCase());
      
      const matchesCategory = selectedCategory ? post.category === selectedCategory : true;
      
      const postDate = new Date(post.date);
      const matchesDateRange = 
        (!dateRange.start || postDate >= new Date(dateRange.start)) &&
        (!dateRange.end || postDate <= new Date(dateRange.end));
      
      return matchesSearch && matchesCategory && matchesDateRange;
    })
    .sort((a, b) => {
      switch (sortBy) {
        case 'date':
          return new Date(b.date).getTime() - new Date(a.date).getTime();
        case 'title':
          return a.title.localeCompare(b.title);
        case 'category':
          return a.category.localeCompare(b.category);
        default:
          return 0;
      }
    });

  return (
    <Container maxWidth="lg">
      <Box sx={{ mb: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Blog Posts
        </Typography>
        
        <Stack spacing={2} sx={{ mb: 4 }}>
          <TextField
            fullWidth
            variant="outlined"
            placeholder="Search posts..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
          />

          <Grid container spacing={2}>
            <Grid item xs={12} sm={6} md={3}>
              <FormControl fullWidth>
                <InputLabel>Category</InputLabel>
                <Select
                  value={selectedCategory}
                  label="Category"
                  onChange={handleCategoryChange}
                >
                  <MenuItem value="">All Categories</MenuItem>
                  {categories.map((category) => (
                    <MenuItem key={category} value={category}>
                      {category}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>

            <Grid item xs={12} sm={6} md={3}>
              <FormControl fullWidth>
                <InputLabel>Sort By</InputLabel>
                <Select
                  value={sortBy}
                  label="Sort By"
                  onChange={handleSortChange}
                  startAdornment={
                    <InputAdornment position="start">
                      <SortIcon />
                    </InputAdornment>
                  }
                >
                  <MenuItem value="date">Date</MenuItem>
                  <MenuItem value="title">Title</MenuItem>
                  <MenuItem value="category">Category</MenuItem>
                </Select>
              </FormControl>
            </Grid>

            <Grid item xs={12} sm={6} md={3}>
              <TextField
                fullWidth
                type="date"
                label="Start Date"
                value={dateRange.start}
                onChange={handleDateChange('start')}
                InputLabelProps={{ shrink: true }}
              />
            </Grid>

            <Grid item xs={12} sm={6} md={3}>
              <TextField
                fullWidth
                type="date"
                label="End Date"
                value={dateRange.end}
                onChange={handleDateChange('end')}
                InputLabelProps={{ shrink: true }}
              />
            </Grid>
          </Grid>
        </Stack>
      </Box>

      <Grid container spacing={4}>
        {filteredPosts.map((post) => (
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
                <Box sx={{ mb: 2 }}>
                  <Chip
                    label={post.category}
                    size="small"
                    sx={{ mr: 1 }}
                  />
                  <Typography
                    variant="caption"
                    color="text.secondary"
                    component="span"
                  >
                    {new Date(post.date).toLocaleDateString()}
                  </Typography>
                </Box>
                <Typography gutterBottom variant="h5" component="h2">
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

export default Blog; 