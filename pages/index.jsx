import Head from 'next/head';

const Index = () => (
  <div style={{ padding: '10px 45px' }}>
    <Head>
      <title> This is the title page</title>
      <meta name="description" content="This is the content of description page" />
    </Head>
    <p>Content on index page</p>
  </div>
);

export default Index;
