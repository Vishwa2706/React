import Link from 'next/link';

const Home = () => {
  return (
    <div>
      <h1>Welcome to My Blog</h1>
      <p>This is the home page.</p>
      <p>
        Go to <Link href="/about">About Page</Link>.
      </p>
    </div>
  );
};

export default Home;
