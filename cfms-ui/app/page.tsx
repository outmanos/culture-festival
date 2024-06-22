import Link from 'next/link';
import styles from "./variables.module.scss";

const Home = () => {
  return (
    <main>
      <h1 style={{ color: styles.secondaryColor }}>Using Sass in Next.js</h1>
      <p style={{ color: styles.primaryColor }}>
        This text uses the primary color defined in Sass.
      </p>
      <Link href="/venues">
        Go to Venues Page
      </Link>
    </main>
  );
}

export default Home;
