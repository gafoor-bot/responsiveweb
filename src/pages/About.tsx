import React from 'react';
import {
  Container,
  Typography,
  Card,
  CardContent,
  Avatar,
  Box,
} from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';

const teamMembers = [
  {
    name: 'John Doe',
    role: 'Lead Developer',
    bio: 'Passionate about web development and creating amazing user experiences.',
    avatar: 'https://i.pravatar.cc/300?img=1',
  },
  {
    name: 'Jane Smith',
    role: 'UI/UX Designer',
    bio: 'Design enthusiast with a keen eye for detail and user-centered design.',
    avatar: 'https://i.pravatar.cc/300?img=2',
  },
  {
    name: 'Mike Johnson',
    role: 'Content Writer',
    bio: 'Technical writer with expertise in explaining complex concepts simply.',
    avatar: 'https://i.pravatar.cc/300?img=3',
  },
];

const About = () => {
  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    e.currentTarget.src = 'https://via.placeholder.com/150';
  };

  return (
    <Container maxWidth="lg">
      {/* Mission Section */}
      <Box sx={{ mb: 6, textAlign: 'center' }}>
        <Typography variant="h3" component="h1" gutterBottom>
          About Our Blog
        </Typography>
        <Typography variant="h6" color="text.secondary" paragraph>
          We're passionate about sharing knowledge and helping developers grow
        </Typography>
        <Typography variant="body1" paragraph>
          Our mission is to provide high-quality content about web development,
          programming, and technology. We believe in learning by doing and
          sharing our experiences with the community.
        </Typography>
      </Box>

      {/* Team Section */}
      <Typography variant="h4" component="h2" gutterBottom sx={{ mb: 4 }}>
        Meet Our Team
      </Typography>
      <Grid container spacing={4}>
        {teamMembers.map((member) => (
          <Grid xs={12} sm={6} md={4} key={member.name}>
            <Card
              sx={{
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center',
                p: 2,
              }}
            >
              <Avatar
                src={member.avatar}
                alt={member.name}
                sx={{ width: 120, height: 120, mb: 2 }}
                onError={handleImageError}
              />
              <CardContent>
                <Typography variant="h5" component="h3" gutterBottom>
                  {member.name}
                </Typography>
                <Typography
                  variant="subtitle1"
                  color="primary"
                  gutterBottom
                >
                  {member.role}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {member.bio}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Values Section */}
      <Box sx={{ mt: 6, mb: 4 }}>
        <Typography variant="h4" component="h2" gutterBottom>
          Our Values
        </Typography>
        <Grid container spacing={3}>
          <Grid xs={12} md={4}>
            <Card sx={{ height: '100%' }}>
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  Quality Content
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  We strive to provide well-researched, accurate, and
                  up-to-date content that helps our readers learn and grow.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid xs={12} md={4}>
            <Card sx={{ height: '100%' }}>
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  Community First
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  We believe in building a strong community where developers
                  can learn from each other and share their experiences.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid xs={12} md={4}>
            <Card sx={{ height: '100%' }}>
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  Continuous Learning
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  We're committed to staying current with the latest
                  technologies and sharing our knowledge with the community.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default About; 