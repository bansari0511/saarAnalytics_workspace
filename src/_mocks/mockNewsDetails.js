async function mockNewsDetails(userId, reqId, docId) {
  // Simulate fetching or processing data here if needed

  return {
    id: docId,
    title: `Article for user ${userId}, request ${reqId}, document ${docId}`,
    content: `
      <h1>Welcome to Our Platform</h1>
      <p>
        Our mission is to empower individuals and organizations by providing intuitive tools and seamless experiences
        that help unlock their full potential. Whether you're just getting started or looking to scale, our platform
        is designed to adapt to your needs.
      </p>

      <h2>Why Choose Us?</h2>
      <ul>
        <li><strong>User-Friendly:</strong> Simple interfaces designed for everyone.</li>
        <li><strong>Reliable:</strong> Backed by modern infrastructure with 99.9% uptime.</li>
        <li><strong>Scalable:</strong> Grows with your business — from startup to enterprise.</li>
        <li><strong>Supportive:</strong> 24/7 customer support and an active community forum.</li>
      </ul>

      <h2>Getting Started</h2>
      <p>
        To begin, sign up for a free account and explore our quick-start guides in the documentation center.
        We also offer onboarding support for teams and enterprises.
      </p>

      <blockquote>
        "Innovation meets simplicity — this platform changed the way we work." — A Satisfied Customer
      </blockquote>

      <p>
        Stay updated by subscribing to our newsletter, and don't forget to follow us on social media for tips,
        updates, and product announcements.
      </p>

      <p>This is a long paragraph of text that gives a summary of the news article...</p>
      <p><strong>More details:</strong> Additional paragraphs, <a href="#">links</a>, and formatting...</p>
      <ul>
        <li>Point one</li>
        <li>Point two
          <p>This is a test paragraph mentioning Apple and banana.</p>
        </li>
      </ul>
    `,
    highlights: ['User-Friendly', 'Reliable', 'Scalable','Supportive'],
    entities: [
      {
        militaryGroup: [
          'Israel Defense Forces',
          'Malian Signal Reserve Division',
          'Israeli Air Force',
          'Colombian Aerospace Force',
        ],
      },
      {
        country: [
          'Palestine',
          'United States',
          'China',
          'Pakistan',
          'Colombia',
          'Turkey',
        ],
      },
      {
        organization: [
          'Palestine',
          'United Nations',
          'China',
          'Pakistan',
          'Colombia',
          'Turkey',
        ],
      },
    ],
  };
}

export default mockNewsDetails;


// const articles = {
//   '123': {
//     title: 'Sample Article',
//     content: '<p>Lorem ipsum dolor sit amet...</p><ul><li>Point 1</li></ul>',
//   },
//   '456': {
//     title: 'Another Article',
//     content: '<p>More content here...</p>',
//   },
// };

// export default async function mockNewsDetails(id) {
//   // Simulate async fetch
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve(articles[id] || null);
//     }, 500);
//   });
// }