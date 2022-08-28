import Link from 'next/link';

const Header = () => (
  <div>
    <Link href="/login">
      <a style={{ margin: '0px 20px 0px auto' }}>Login</a>
    </Link>
  </div>
);

export default Header;
