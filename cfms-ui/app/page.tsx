import styles from "./variables.module.scss";

export default function Home() {
  return (
      <main>
        <h1 style={{ color: styles.secondaryColor }}>Using Sass in Next.js</h1>
        <p style={{ color: styles.primaryColor }}>
          This text uses the primary color defined in Sass.
        </p>
      </main>
  );
}
