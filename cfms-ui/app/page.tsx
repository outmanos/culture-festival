import styles from "@/styles/variables.module.scss"; // Import your styles

export default function Home() {
  return (
      <main>
        <h1>Using Sass in Next.js</h1>
        <p style={{ color: styles.primaryColor }}>
          This text uses the primary color defined in Sass.
        </p>
      </main>
  );
}
