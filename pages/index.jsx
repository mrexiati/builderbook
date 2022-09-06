import Head from 'next/head';
import Button from '@mui/material/Button';

const Index = () => (
  <div style={{ padding: '10px 45px' }}>
    <Head>
      <title> This is the title page</title>
      <meta name="description" content="This is the content of description page" />
    </Head>
    <p>Content on index page</p>
    <Button variant="contained">Mui button</Button>
  </div>
);

export default Index;
