
// pages/ArticleDetailPage.jsx - Article Detail Page
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import {
  Box,
  Typography,
  Paper,
  Chip,
  Avatar,
  Divider,
  Button,
  Container,
  useTheme,
  Breadcrumbs,
  Link,
} from '@mui/material';
import {
  ArrowBack as ArrowBackIcon,
  AccessTime as AccessTimeIcon,
  Home as HomeIcon,
  Share as ShareIcon,
  Bookmark as BookmarkIcon,
} from '@mui/icons-material';
import mockArticles from '@/_mocks/mockData';

function ArticleDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const theme = useTheme();

  const findArticle = () => {
    for (const category of Object.values(mockArticles)) {
      const article = category.find((a) => a.id === parseInt(id));
      if (article) return article;
    }
    return null;
  };

  const article = findArticle();

  const getCategoryColor = (category) => {
    const colors = {
      cybersecurity: '#d32f2f',
      defense: theme.palette.primary.main,
      geopolitics: '#388e3c',
      policy: '#f57c00',
      intelligence: '#7b1fa2',
      technology: '#0288d1',
    };
    return colors[category] || theme.palette.grey[600];
  };

  const getCategoryGradient = (category) => {
    const gradients = {
      cybersecurity: 'linear-gradient(135deg, #d32f2f 0%, #f44336 100%)',
      defense: 'linear-gradient(135deg, #1976d2 0%, #2196f3 100%)',
      geopolitics: 'linear-gradient(135deg, #388e3c 0%, #4caf50 100%)',
      policy: 'linear-gradient(135deg, #f57c00 0%, #ff9800 100%)',
      intelligence: 'linear-gradient(135deg, #7b1fa2 0%, #9c27b0 100%)',
      technology: 'linear-gradient(135deg, #0288d1 0%, #03a9f4 100%)',
    };
    return gradients[category] || theme.palette.grey[600];
  };

  const getAuthorInitials = (name) => {
    return name
      .split(' ')
      .map((word) => word[0])
      .join('');
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  if (!article) {
    return (
      <Container maxWidth="md">
        <Box sx={{ textAlign: 'center', py: 8 }}>
          <Typography variant="h4" gutterBottom>
            Article Not Found
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
            The article you're looking for could not be found.
          </Typography>
          <Button
            variant="contained"
            startIcon={<ArrowBackIcon />}
            onClick={() => navigate('/')}
          >
            Back to News
          </Button>
        </Box>
      </Container>
    );
  }

  return (
    <Container maxWidth="md">
      <Box sx={{ mb: 3 }}>
        <Breadcrumbs aria-label="breadcrumb" sx={{ mb: 2 }}>
          <Link
            color="inherit"
            href="/"
            onClick={(e) => {
              e.preventDefault();
              navigate('/');
            }}
            sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}
          >
            <HomeIcon fontSize="small" />
            Home
          </Link>
          <Typography color="text.primary" sx={{ textTransform: 'capitalize' }}>
            {article.category}
          </Typography>
        </Breadcrumbs>

        <Button
          startIcon={<ArrowBackIcon />}
          onClick={() => navigate('/')}
          sx={{ textTransform: 'none', fontWeight: 600 }}
        >
          Back to News
        </Button>
      </Box>

      <Paper
        elevation={3}
        sx={{
          borderRadius: 3,
          overflow: 'hidden',
          position: 'relative',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: '6px',
            background: getCategoryGradient(article.category),
          },
        }}
      >
        <Box sx={{ p: { xs: 3, md: 5 }, pt: { xs: 4, md: 6 } }}>
          <Box sx={{ mb: 3 }}>
            <Chip
              label={article.category.charAt(0).toUpperCase() + article.category.slice(1)}
              sx={{
                background: getCategoryGradient(article.category),
                color: 'white',
                fontWeight: 600,
                mb: 3,
                textTransform: 'capitalize',
              }}
            />

            <Typography
              variant="h3"
              component="h1"
              gutterBottom
              sx={{
                fontWeight: 700,
                lineHeight: 1.2,
                mb: 3,
                fontSize: { xs: '2rem', md: '3rem' },
              }}
            >
              {article.title}
            </Typography>

            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: 3,
                mb: 3,
                flexWrap: 'wrap',
              }}
            >
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                <Avatar
                  sx={{
                    width: 48,
                    height: 48,
                    background: getCategoryGradient(article.category),
                    fontWeight: 600,
                    fontSize: '1.1rem',
                  }}
                >
                  {getAuthorInitials(article.author)}
                </Avatar>
                <Box>
                  <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
                    {article.author}
                  </Typography>
                  <Typography variant="caption" color="text.secondary">
                    {article.role || 'Security Correspondent'}
                  </Typography>
                </Box>
              </Box>

              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 2,
                  flexWrap: 'wrap',
                }}
              >
                <Typography variant="body2" color="text.secondary">
                  {formatDate(article.publishedAt)}
                </Typography>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                  <AccessTimeIcon sx={{ fontSize: '1rem' }} color="disabled" />
                  <Typography variant="body2" color="text.secondary">
                    {article.readTime}
                  </Typography>
                </Box>
              </Box>
            </Box>

            <Box sx={{ display: 'flex', gap: 1, mb: 4 }}>
              <Button
                variant="outlined"
                startIcon={<ShareIcon />}
                size="small"
                sx={{ textTransform: 'none' }}
              >
                Share
              </Button>
              <Button
                variant="outlined"
                startIcon={<BookmarkIcon />}
                size="small"
                sx={{ textTransform: 'none' }}
              >
                Bookmark
              </Button>
            </Box>
          </Box>

          <Divider sx={{ mb: 4 }} />

          <Box sx={{ mb: 4 }}>
            <Typography
              variant="h6"
              gutterBottom
              sx={{ fontWeight: 600, mb: 2 }}
            >
              Summary
            </Typography>
            <Typography
              variant="body1"
              paragraph
              sx={{
                lineHeight: 1.8,
                fontSize: '1.1rem',
                mb: 4,
                fontStyle: 'italic',
                pl: 2,
                borderLeft: '4px solid',
                borderLeftColor: getCategoryColor(article.category),
              }}
            >
              {article.summary}
            </Typography>
          </Box>

          {article.tags && (
            <Box sx={{ mb: 4 }}>
              <Typography variant="subtitle2" sx={{ mb: 2, fontWeight: 600 }}>
                Tags:
              </Typography>
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                {article.tags.map((tag, index) => (
                  <Chip
                    key={index}
                    label={tag}
                    variant="outlined"
                    size="small"
                    sx={{ fontSize: '0.8rem' }}
                  />
                ))}
              </Box>
            </Box>
          )}

          <Typography
            variant="body1"
            sx={{
              lineHeight: 1.8,
              '& p': { mb: 3 },
              fontSize: '1rem',
            }}
          >
            <Typography variant="body1" paragraph>
              This comprehensive analysis examines the latest developments in{' '}
              {article.category} affairs, providing in-depth coverage of key
              events and their implications for national security. Our reporting
              team has conducted extensive research and interviews with key
              stakeholders to bring you accurate and timely information.
            </Typography>

            <Typography variant="body1" paragraph>
              The significance of these developments cannot be understated, as
              they represent a crucial turning point in defense policy and
              strategic planning. Stakeholders across the government and defense
              industry are closely monitoring the situation as it continues to
              evolve.
            </Typography>

            <Typography variant="body1" paragraph>
              In a real application, this would contain the full article content
              fetched from your API, including rich media, embedded content,
              quotes from officials, and detailed analysis from subject matter
              experts. The content would be dynamically loaded based on the
              article ID.
            </Typography>

            <Box
              sx={{
                p: 3,
                my: 4,
                borderLeft: '4px solid',
                borderLeftColor: getCategoryColor(article.category),
                backgroundColor: 'grey.50',
                borderRadius: 1,
              }}
            >
              <Typography variant="body1" sx={{ fontStyle: 'italic' }}>
                "This represents a significant milestone in our ongoing efforts
                to strengthen national security and maintain our technological
                advantage in an increasingly complex global environment."
              </Typography>
              <Typography variant="caption" color="text.secondary" sx={{ mt: 2, display: 'block' }}>
                — Senior Defense Official
              </Typography>
            </Box>

            <Typography variant="body1">
              As the situation continues to develop, we will provide ongoing
              coverage and analysis. Stay tuned for further updates and expert
              commentary on this important story.
            </Typography>
          </Typography>
        </Box>
      </Paper>
    </Container>
  );
}

export default ArticleDetailPage;

