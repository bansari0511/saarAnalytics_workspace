import { Card, CardContent, Typography } from '@mui/material';

function ArticleCard({ article }) {
	return (
		<Card elevation={2} sx={{ height: '100%' }}>
			<CardContent>
				<Typography variant="h6" gutterBottom>
					{article.title}
				</Typography>
				<Typography variant="body2" color="text.secondary" paragraph>
					{article.summary}
				</Typography>
				<Typography variant="caption" color="text.secondary">
					By {article.author} · {new Date(article.publishedAt).toLocaleDateString()} · {article.readTime}
				</Typography>
			</CardContent>
		</Card>
	);
}

export default ArticleCard;
