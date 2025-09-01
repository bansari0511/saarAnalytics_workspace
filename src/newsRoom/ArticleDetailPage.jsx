import { useState, useEffect } from 'react';
import {
  Box, Typography, Paper, CircularProgress, IconButton,
} from '@mui/material';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import mockNewsDetails from '@/_mocks/mockNewsDetails';
import '@/assets/css/ArticleDetailPage.css';

// Function to extract <data> tag image URLs and replace them with <img> tags
const renderImagesInContent = (htmlString) =>
  htmlString.replace(
    /<data\s+value="([^"]+)"[^>]*data-caption="([^"]+)"[^>]*>/g,
    (match, imgUrl, caption) => `
      <figure style="display: flex; flex-direction: column; align-items: center; margin: 16px 0;">
        <img
          src="${imgUrl}"
          alt="${caption}"
          style="width: auto; height: 300px; object-fit: cover; border-radius: 8px;"
        />
        <figcaption style="font-size: 14px; color: #666; margin-top: 8px; text-align: center;">
          ${caption}
        </figcaption>
      </figure>
    `
  );

// Function to highlight content based on the provided highlights
const renderHighlightedContent = (htmlString, highlights) => {
  let content = renderImagesInContent(htmlString);

  // Highlight terms by wrapping them in a <span> with the "highlight" class
  highlights.forEach((term) => {
    const regex = new RegExp(`(${term})`, 'gi');
    content = content.replace(regex, (match) => `<span class="highlight">${match}</span>`);
  });

  return content;
};

function ArticleDetailPage({ userId, reqId, docId }) {
  const [article, setArticle] = useState(null);
  const [loading, setLoading] = useState(true);
  const [showRelatedInfo, setShowRelatedInfo] = useState(true);

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
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh' }}>
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

  // Combine both image processing and highlighting
  const highlightedContent = renderHighlightedContent(article.content, article.highlights);

  return (
    <Box
      component="main"
      sx={{
        display: 'flex',
        width: '100%',
        alignItems: 'stretch',
        boxSizing: 'border-box',
        padding: 1,
        gap: 2,
      }}
    >
      {/* Main Content */}
      <Box
        sx={{
          flexGrow: 1,
          boxSizing: 'border-box',
          minWidth: 0, // for flexbox overflow fix
        }}
      >
        <Paper elevation={3} sx={{ padding: 3 }}>
          <Box
            sx={{ lineHeight: 1.8, fontSize: '16px' }}
            dangerouslySetInnerHTML={{ __html: highlightedContent }}
          />
        </Paper>
      </Box>

      {/* Related Info Sidebar */}
      <Box
        sx={{
          width: showRelatedInfo ? 450 : 40,
          transition: 'width 0.3s ease',
          backgroundColor: '#1a4980',
          color: 'white',
          boxShadow: '-2px 0 5px rgba(0,0,0,0.1)',
          boxSizing: 'border-box',
          paddingTop: 1,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'stretch',
        }}
      >
        {/* Header with Toggle */}
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: showRelatedInfo ? 'space-between' : 'center',
            padding: '8px 12px',
            borderBottom: '1px solid rgba(255,255,255,0.2)',
            flexShrink: 0,
          }}
        >
          {showRelatedInfo && (
            <Typography variant="subtitle1" sx={{ fontWeight: 'bold', color: 'white' }}>
              Related Info
            </Typography>
          )}
          <IconButton
            size="small"
            onClick={() => setShowRelatedInfo(prev => !prev)}
            sx={{
              color: 'white',
              backgroundColor: 'rgba(255,255,255,0.1)',
              '&:hover': {
                backgroundColor: 'rgba(255,255,255,0.2)',
              },
              ml: 1,
            }}
          >
            {showRelatedInfo ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </Box>

        {/* Content */}
        {showRelatedInfo ? (
          <Box
            sx={{
              padding: 2,
              overflow: 'visible',
              flexGrow: 1,
            }}
          >
            {article.entities.map((entity, index) => {
              const [key, values] = Object.entries(entity)[0];
              return (
                <Paper
                  key={index}
                  elevation={1}
                  sx={{
                    padding: 1.5,
                    mb: 2,
                    backgroundColor: '#64a0de',
                    borderRadius: 2,
                  }}
                >
                  <Typography
                    variant="subtitle2"
                    sx={{
                      fontSize: '18px',
                      fontWeight: 600,
                      color: 'white',
                      textTransform: 'capitalize',
                      mb: 1,
                    }}
                  >
                    {key}
                  </Typography>
                  <Box
                    sx={{
                      display: 'flex',
                      flexDirection: 'column',
                      gap: 0.5,
                      color: 'white',
                      fontWeight: 600,
                    }}
                  >
                    {values.map((item, idx) => (
                      <Typography
                        key={idx}
                        variant="body2"
                        sx={{
                          borderBottom: '1px solid rgba(255,255,255,0.3)',
                          padding: '5px',
                          color: 'white',
                        }}
                      >
                        {item}
                      </Typography>
                    ))}
                  </Box>
                </Paper>
              );
            })}
          </Box>
        ) : (
          <Box
            sx={{
              flexGrow: 1,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              writingMode: 'vertical-rl',
              transform: 'rotate(180deg)',
              fontWeight: 'bold',
              letterSpacing: 1,
              color: 'rgba(255,255,255,0.7)',
              userSelect: 'none',
              minHeight: '100px',
              padding: 1,
            }}
            title="Expand Related Info"
          >
            Related Info
          </Box>
        )}
      </Box>
    </Box>
  );
}

export default ArticleDetailPage;
