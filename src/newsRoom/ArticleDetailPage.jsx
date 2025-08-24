import { useState, useEffect } from 'react';
import {
  Box, Typography, Grid, Paper, CircularProgress,
  Breadcrumbs, Button
} from '@mui/material';
import { useLocation } from 'react-router-dom';
import mockNewsDetails from '@/_mocks/mockNewsDetails';
import PageHeader from '@/components/pageHeader';
import '@/assets/css/ArticleDetailPage.css';

  const highlightTermsInHTMLString = (htmlString, highlights) => {
    if (!htmlString || !highlights?.length) return htmlString;
    const escapeRegex = (term) => term.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    const regex = new RegExp(`\\b(${highlights.map(escapeRegex).join('|')})\\b`, 'gi');
    return htmlString.replace(regex, (match) => `<span style="color: #1176f0;font-size: 17px;">${match}</span>`);
  };


function ArticleDetailPage() {
  const [article, setArticle] = useState(null);
  const [loading, setLoading] = useState(true);
  const location = useLocation();

  const { userId, reqId, docId } = location.state || {};

  useEffect(() => {
    const loadArticle = async () => {
      try {
        setLoading(true);
        const articleDetails = await mockNewsDetails(userId, reqId, docId);
        setArticle(articleDetails);
      } catch (error) {
        console.error('Error fetching article:', error);
        setArticle(null);
      } finally {
        setLoading(false);
      }
    };

    loadArticle();
  }, [userId, reqId, docId]);

  if (loading) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <CircularProgress />
      </Box>
    );
  }

  if (!article) {
    return (
      <Box sx={{ textAlign: 'center', py: 4 }}>
        <Typography variant="h6" color="text.secondary">
          Article not found.
        </Typography>
      </Box>
    );
  }

   const highlightTerms = article.highlights || [];

const highlightedContent = highlightTermsInHTMLString(article.content, highlightTerms);

  return (
    <>
       <PageHeader title="News Details">
      <Breadcrumbs aria-label="breadcrumb" sx={{ textTransform: 'uppercase' }}>
        <Button variant="outlined" size="small" href="/NewsHomePage">
          BACK TO NEWSROOM
        </Button>
      </Breadcrumbs>
    </PageHeader>

    <Grid container spacing={2}>
      {/* Article Content Section */}
      <Grid item xs={12} sm={10} md={10}>
        <Paper elevation={3} sx={{ padding: 3 }}>
          <Box
            sx={{ lineHeight: 1.8, fontSize: '16px' }}
            dangerouslySetInnerHTML={{ __html: highlightedContent }}
          />
        </Paper>
      </Grid>


        {/* Entities Section */}
       <Grid item xs={12} sm={2} md={2}>
  <Box
    sx={{
      backgroundColor: '#ffffff',
      padding: 2,
      borderRadius: 2,
      boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
      height: '100%',
      overflowY: 'auto',
      
    }}
  >
    <Typography variant="h6" sx={{ mb: 2, fontWeight: 'bold' }}>
      <h2>Related Info</h2>
    </Typography>

    {article.entities.map((entity, index) => {
      const [key, values] = Object.entries(entity)[0];
      return (
        <Paper
          key={index}
          elevation={1}
          sx={{
            padding: 1.5,
            mb: 2,
            backgroundColor: '#aac8ed',
            backgroundImage: 'linear-gradient(90deg, #1a4980, #64a0de)',
            borderRadius: 5,            
          }}
        >
          {/* Key (title) */}
          <Typography
            variant="subtitle2"
            sx={{
              fontSize:'18px',
              fontWeight: 600,
              color: '#cacaca', // corrected color
              textTransform: 'capitalize',
              mb: 1,
            }}
          >
            {key}
          </Typography>

          {/* Values (list of related items) */}
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              gap: 0.5,
              maxHeight: '150px',
              overflowY: 'auto',
              color:'#004d99',
              fontWeight:600,
            }}
          >
            {values.map((item, idx) => (
              <Typography key={idx} variant="body2" sx={{ color: 'white',borderBottom: '1px solid',padding: '5px' }}>
                {item}
              </Typography>
            ))}
          </Box>
        </Paper>
      );
    })}
  </Box>
</Grid>
      </Grid>
    </>
  );
}

export default ArticleDetailPage;
