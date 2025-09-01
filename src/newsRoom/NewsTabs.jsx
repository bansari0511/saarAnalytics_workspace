import { useState, useEffect, useRef } from 'react';
import {
  Box, Typography, Grid, Pagination, Card, Paper, Tabs, Tab,
  useTheme, useMediaQuery, Fade, List, ListItemButton, ListItemText, TextField
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import fetchNews from '@/_mocks/mockData'; // Adjust path if needed

function NewsTabs() {
  const [selectedTab, setSelectedTab] = useState(0);
  const [page, setPage] = useState(1);
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState('');
  const itemsPerPage = 5;
  const navigate = useNavigate();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const countries = [
    { label: '🇨🇳 China', value: 'cn' },
    { label: '🇺🇸 USA', value: 'us' },
    { label: '🇮🇳 India', value: 'in' },
    { label: '🇧🇩 Bangladesh', value: 'bd' },
    { label: '🇱🇰 Sri Lanka', value: 'lk' },
    { label: '🇦🇫 Afghanistan', value: 'af' },
    { label: '🇯🇵 Japan', value: 'jp' },
    { label: '🇬🇧 UK', value: 'gb' },
    { label: '🇨🇦 Canada', value: 'ca' },
    { label: '🇩🇪 Germany', value: 'de' },
    { label: '🇫🇷 France', value: 'fr' },
    { label: '🇦🇺 Australia', value: 'au' },
    { label: '🇧🇷 Brazil', value: 'br' },
    { label: '🇿🇦 South Africa', value: 'za' },
    { label: '🇷🇺 Russia', value: 'ru' },
    { label: '🇰🇷 South Korea', value: 'kr' },
  ];
  const [tabCountries, setTabCountries] = useState(countries.slice(0, 6));
  // Fix: use tabCountries to get current country
  const currentCountry = tabCountries[selectedTab]?.value || countries[0].value;

  // useEffect(() => {
  //   const loadNews = async () => {
  //     setLoading(true);
  //     const newsData = await fetchNews(currentCountry);
  //     setArticles(newsData.result || []);  // REPLACE the articles!
  //     setPage(1);                          // reset page to 1 on country change
  //     setLoading(false);
  //   };
  //   loadNews();
  // }, [currentCountry]);  // <-- only fetch when country changes, NOT on page change

  const effectRan = useRef(false);

  useEffect(() => {
    if (effectRan.current) return; // Skip subsequent calls in Strict Mode
    effectRan.current = true;

    const loadNews = async () => {
      setLoading(true);
      const newsData = await fetchNews(currentCountry);
      setArticles(newsData.result || []);
      setPage(1);
      setLoading(false);
    };
    loadNews();

    // Cleanup if needed
    return () => {
      effectRan.current = false;
    };
  }, [currentCountry]);

  const totalPages = Math.ceil(articles.length / itemsPerPage);
  const startIndex = (page - 1) * itemsPerPage;
  const currentArticles = articles.slice(startIndex, startIndex + itemsPerPage);

  const handleTabChange = (_, newIndex) => {
    setSelectedTab(newIndex);
    setPage(1);
  };

  const handlePageChange = (_, newPage) => {
    setPage(newPage);
  };

  const onArticleClick = ({ userId, reqId, docId }) => {
    navigate('/NewsHomePage', {
      state: { userId, reqId, docId },
    });
  };

  const handleCountrySelect = (country) => {
    const exists = tabCountries.find(c => c.value === country.value);
    if (exists) {
      const index = tabCountries.findIndex(c => c.value === country.value);
      setSelectedTab(index);
    } else {
      const updatedTabs = [...tabCountries];
      if (updatedTabs.length >= 6) {
        updatedTabs.shift();
      }
      updatedTabs.push(country);
      setTabCountries(updatedTabs);
      setSelectedTab(updatedTabs.length - 1);
    }
  };

  // Filter countries by search input
  const filteredCountries = countries.filter(c =>
    c.label.toLowerCase().includes(search.toLowerCase()) ||
    c.value.toLowerCase().includes(search.toLowerCase())
  );

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
        {currentArticles.map((article, index) => (
          <Grid
            item
            xs={12}
            key={`${article.docId || article.reqId || article.userId || article.link || article.title}-${index}`}
          >
            <Card
              elevation={3}
              sx={{
                display: 'flex',
                gap: 2,
                p: 2,
                cursor: 'pointer',
                transition: 'transform 0.2s ease, box-shadow 0.2s ease',
                '&:hover': {
                  transform: 'translateY(-3px)',
                  boxShadow: theme.shadows[6],
                },
              }}
              onClick={() =>
                onArticleClick({
                  userId: article.userId || '1',
                  reqId: article.reqId || '1',
                  docId: article.docId || '1',
                })
              }
            >
              {article.image_url && (
                <Box
                  component="img"
                  src={article.image_url}
                  alt={article.title}
                  sx={{
                    width: 160,
                    height: 110,
                    objectFit: 'cover',
                    borderRadius: 1,
                    flexShrink: 0,
                  }}
                />
              )}
              <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
                <Typography
                  variant="h6"
                  sx={{ color: '#0F4C97', fontWeight: '700', mb: 1 }}
                >
                  {article.title}
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ flexGrow: 1 }}>
                  {article.description}
                </Typography>
                <Box
                  sx={{
                    mt: 1,
                    display: 'flex',
                    flexWrap: 'wrap',
                    alignItems: 'center',
                    gap: 1,
                    fontSize: 13,
                  }}
                >
                  {article.classifications?.map((cls, idx) => (
                    <Box
                      key={idx}
                      sx={{
                        backgroundColor: '#e0f7fa',
                        color: '#00796b',
                        px: 1.5,
                        py: 0.5,
                        borderRadius: 2,
                        fontWeight: 500,
                      }}
                    >
                      {cls}
                    </Box>
                  ))}
                  {article.last_updated && (
                    <Typography
                      variant="caption"
                      color="text.secondary"
                      sx={{ ml: 'auto', fontStyle: 'italic' }}
                    >
                      Last updated: {new Date(article.last_updated).toLocaleDateString()}
                    </Typography>
                  )}
                </Box>
              </Box>
            </Card>
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
    <Card sx={{ height: 'inherit', padding: 0, boxShadow: 4 }}>
      <Box sx={{ display: 'flex', flexDirection: 'row', height: '100vh' }}>
        {/* Left Sidebar */}
        <Box
          sx={{
            width: 260,
            p: 2,
            borderRight: 1,
            borderColor: 'divider',
            bgcolor: 'background.paper',
            position: 'sticky',
            top: 0,
            height: '100vh',
            overflowY: 'auto',
            boxShadow: 2,
          }}
        >
          <Typography variant="h6" sx={{ mb: 2, fontWeight: 700 }}>
            All Countries
          </Typography>
          <TextField
            size="small"
            fullWidth
            placeholder="Search countries"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            sx={{ mb: 2 }}
          />
          <List dense>
            {filteredCountries.map((country) => {
              const selected = tabCountries.some(c => c.value === country.value);
              return (
                <ListItemButton
                  key={country.value}
                  selected={selected}
                  onClick={() => handleCountrySelect(country)}
                  sx={{
                    borderRadius: 1,
                    mb: 0.5,
                    fontWeight: selected ? '700' : '400',
                    '&.Mui-selected': {
                      bgcolor: 'primary.light',
                      color: 'primary.main',
                      '&:hover': {
                        bgcolor: 'primary.light',
                      },
                    },
                  }}
                >
                  <ListItemText primary={country.label} />
                </ListItemButton>
              );
            })}
          </List>
        </Box>

        {/* Right Content */}
        <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column', p: 2 }}>
          <Paper
            elevation={3}
            sx={{
              mb: 3,
              background: 'linear-gradient(to top, #327ab9 0%, #1a52a1 100%)',
              padding: 0,
              borderRadius: 2,
              color: 'white',
            }}
          >
            <Tabs
              value={selectedTab}
              onChange={handleTabChange}
              variant={isMobile ? 'scrollable' : 'fullWidth'}
              scrollButtons={isMobile ? 'auto' : false}
              textColor="inherit"
              TabIndicatorProps={{ style: { backgroundColor: 'white', height: 3, borderRadius: 2 } }}
              sx={{
                '& .MuiTab-root': {
                  textTransform: 'none',
                  fontWeight: 600,
                  fontSize: '18px',
                  mx: 0.5,
                  py: 1,
                  transition: 'color 0.3s ease',
                  '&:hover': { color: '#e3f2fd' },
                },
                '& .Mui-selected': {
                  color: 'white',
                },
              }}
            >
              {tabCountries.map((country) => (
                <Tab key={country.value} label={country.label} />
              ))}
            </Tabs>
          </Paper>

          <Fade in>
            <Box sx={{ flexGrow: 1, overflowY: 'auto' }}>{content}</Box>
          </Fade>

          {totalPages > 1 && (
            <Box sx={{ display: 'flex', justifyContent: 'center', mt: 3 }}>
              <Pagination
                count={totalPages}
                page={page}
                onChange={handlePageChange}
                color="primary"
                shape="rounded"
                siblingCount={isMobile ? 0 : 1}
              />
            </Box>
          )}
        </Box>
      </Box>
    </Card>
  );
}

export default NewsTabs;
