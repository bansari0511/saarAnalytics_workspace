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



// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// function App() {
//   const [data, setData] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     axios.get('https://jsonplaceholder.typicode.com/posts')
//       .then((response) => {
//         setData(response.data);
//         setLoading(false);
//       })
//       .catch((error) => {
//         console.error('API Error:', error);
//         setError(error);
//         setLoading(false);
//       });
//   }, []);

//   if (loading) return <p>Loading...</p>;
//   if (error) return <p>Error fetching data.</p>;

//   return (
//     <div>
//       <h1>Posts</h1>
//       <ul>
//         {data.map(post => (
//           <li key={post.id}>{post.title}</li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default App;

export default ArticleCard;
