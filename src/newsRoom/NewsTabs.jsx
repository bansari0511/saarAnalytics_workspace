import { useState, useEffect } from 'react';
import {
  Box, Tabs, Tab, Paper, Typography, Grid, Pagination,
  useTheme, useMediaQuery, Fade, Card ,Button
} from '@mui/material';
import fetchNews from '@/_mocks/mockData'; // Adjust the path as needed
import { Link as RouterLink } from 'react-router-dom';

function NewsTabs() {
  const [selectedTab, setSelectedTab] = useState(0);
  const [page, setPage] = useState(1);
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const itemsPerPage = 10;

  const countries = [
    { label: '🇨🇳 China', value: 'cn' },
    { label: '🇺🇸 USA', value: 'us' },
    { label: '🇮🇳 India', value: 'in' },
    { label: '🇩🇪 Germany', value: 'de' },
    { label: '🇧🇩 Bangladesh', value: 'bd' },
  ];

  const currentCountry = countries[selectedTab].value;

  useEffect(() => {
  const loadNews = async () => {
    setLoading(true);
    const newsData = await fetchNews(currentCountry);
    console.log('Fetched newsData:', newsData.cn); // 👈 log it
    setArticles(newsData.cn);
    setPage(1);
    setLoading(false);
  };

  loadNews();
}, [currentCountry]);

  const totalPages = Math.ceil(articles.length / itemsPerPage);
  const startIndex = (page - 1) * itemsPerPage;
  const currentArticles = articles.slice(startIndex, startIndex + itemsPerPage);
 console.log("currentArticles",currentArticles)
  const handleTabChange = (_, newIndex) => {
    setSelectedTab(newIndex);
  };

  const handlePageChange = (_, newPage) => {
    setPage(newPage);
  };

  let content;

  if (loading) {
    content = (
      <Typography variant="body1" sx={{ py: 4, textAlign: 'center', fontWeight: 500 }}>
        Loading articles...
      </Typography>
    );
  } else if (currentArticles.length > 0) {
    content = (
      <Grid container spacing={2}>
        {currentArticles.map((article) => (         
          <Grid
            item
            xs={12}
            key={article.link || article.title}
            sx={{
              display: 'flex',
              alignItems: 'flex-start',
              borderBottom: '1px solid',
              borderColor: 'divider',
              pb: 2,
              background: '#fdfdfd',
            }}
          >
            {article.image_url && (
              <Box
                component="img"
                src={article.image_url}
                alt={article.title}
                sx={{
                  width: 150,
                  height: 100,
                  objectFit: 'cover',
                  borderRadius: 1,
                  mr: 2,
                }}
              />
            )}
            <Box sx={{ flexGrow: 1 }}>
              <Typography
                variant="h6"
                sx={{
                  fontSize: '20px',
                  fontWeight: '600',
                  color: '#0F4C97',
                }}
              >
                <RouterLink
                  to="/ArticleDetailPage"
                  state={{  userId:'1', reqId:'1', docId:'1' }}
                  style={{ textDecoration: 'none', color: 'inherit' }}
                   >
                  {article.title}
                </RouterLink>
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {article.description}
              </Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    );
  } else {
    content = (
      <Typography variant="body1" color="text.secondary" sx={{ py: 4, textAlign: 'center' }}>
        No articles available for this country.
      </Typography>
    );
  }

  return (
    <Card sx={{ height: 'inherit', padding: '0px' }}>
      <Box sx={{ width: '100%' }}>
        <Paper
          elevation={2}
          sx={{
            mb: 5,
            background: 'linear-gradient(to top, #eee 0%, #327ab9 100%)',
            padding: '0px',
          }}
        >
          <Tabs
            value={selectedTab}
            onChange={handleTabChange}
            variant={isMobile ? 'scrollable' : 'fullWidth'}
            scrollButtons={isMobile ? 'auto' : false}
            textColor="inherit"
            TabIndicatorProps={{ style: { height: 0 } }}
            sx={{
              '& .MuiTab-root': {
                color: 'white',
                textTransform: 'none',
                fontWeight: 600,
                fontSize: '22px',
                mx: 0.2,
                my: 1,
                px: 0,
                transition: 'all 0.3s ease',
                '&:hover': {
                  color: 'white',
                  boxShadow: 2,
                },
              },
              '& .Mui-selected': {
                boxShadow: 6,
              },
            }}
          >
            {countries.map((country) => (
              <Tab key={country.value} label={country.label} sx={{ fontSize: '20px' }} />
            ))}
          </Tabs>
        </Paper>

        <Fade in>
          <Card sx={{ height: '100%', borderRadius: '5px', marginTop: '-4px' }}>
            <Box>{content}</Box>
          </Card>
        </Fade>

        {totalPages > 1 && (
          <Box sx={{ display: 'flex', justifyContent: 'center', mt: 3 }}>
            <Pagination count={totalPages} page={page} onChange={handlePageChange} />
          </Box>
        )}
      </Box>
    </Card>
  );
}

export default NewsTabs;
