import React from "react";
import clsx from "clsx";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import styles from "./index.module.css";
import HomepageFeatures from "@site/src/components/HomepageFeatures";

// Import a Spotify-like background image (add this to static/img/)
import spotifyBackground from "@site/static/img/Spotify_2.jpg";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header
      className={clsx("hero", styles.heroBannerSpotify)}
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(${spotifyBackground})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        color: "#ffffff", // white text for contrast
      }}
    >
      <div className={clsx("container", styles.heroContent)}>
        <h1 className={clsx("hero__title", styles.spotifyTitle)}>
          {siteConfig.title}
        </h1>
        <p className={clsx("hero__subtitle", styles.spotifySubtitle)}>
          Unleash the power of music with the Spotify Web API
        </p>
        <div className={styles.buttons}>
          <Link
            className={clsx("button button--lg", styles.spotifyButton)}
            style={{ backgroundColor: "#1DB954", color: "#fff" }} // Spotify button
            to="/docs/Documentation/overview"
          >
            Dive into Docs
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Explore the Spotify Web API to create amazing music applications"
    >
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
