import Head from 'next/head';
import PropTypes from 'prop-types';

const propTypes = {
  user: PropTypes.shape({
    displayName: PropTypes.string,
    email: PropTypes.string.isRequired,
  }),
};

const defaultProps = {
  user: null,
};

const Index = ({ user }) => (
  <div style={{ padding: '10px 45px' }}>
    <Head>
      <title> This is the title page</title>
      <meta name="description" content="This is the content of description page" />
    </Head>
    <p>Content on index page</p>
    <p>
      Email:
      {user.email}
    </p>
  </div>
);

Index.getInitialProps = async (ctx) => ({ user: ctx.query.user });
Index.propTypes = propTypes;
Index.defaultProps = defaultProps;

export default Index;
