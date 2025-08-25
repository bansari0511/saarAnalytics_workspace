import Grid from '@mui/material/Grid';
import PageHeader from '@/components/pageHeader';
import NewsTabs from '@/newsRoom/NewsTabs';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Button from '@mui/material/Button';
import ArticleDetailPage from '@/newsRoom/ArticleDetailPage';
import { useLocation, useNavigate } from 'react-router-dom';

function NewsRoomPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const { userId, reqId, docId } = location.state || {};
  const isViewingArticle = userId && reqId && docId;

  const handleBack = () => {
    navigate('/NewsHomePage'); // Clears state
  };
//   const handleArticleClick = ({ userId, reqId, docId }) => {
//     setSearchParams({ userId, reqId, docId });
//   };

//   const handleBack = () => {
//     setSearchParams({});
//   };
	return (
		<>
	  <PageHeader title="News Inventory">
       <Breadcrumbs>
  {isViewingArticle && (
    <Button onClick={handleBack}>← BACK TO NEWSROOM</Button>
  )}
  <Button href="/dashboard3">BACK TO HOME</Button>
</Breadcrumbs>
      </PageHeader>

      <Grid container spacing={1}>
        <Grid item xs={12}>
          {isViewingArticle ? (
            <ArticleDetailPage userId={userId} reqId={reqId} docId={docId} onBack={handleBack} />
			
          ) : (
            <NewsTabs />
          )}
        </Grid>
      </Grid>
		</>
	);
}

export default NewsRoomPage;
