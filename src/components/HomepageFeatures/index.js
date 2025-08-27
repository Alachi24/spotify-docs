import React from "react";
import clsx from "clsx";
import styles from "./styles.module.css";

const FeatureList = [
  {
    title: "Albums",
    Svg: require("@site/static/img/Albums.svg").default,
    description: "Retrieve and manage album metadata seamlessly.",
  },
  {
    title: "Artists on your beck and call",
    Svg: require("@site/static/img/Artists.svg").default,
    description: "Discover artist information and top tracks instantly.",
  },
  {
    title: "Save Track Details",
    Svg: require("@site/static/img/Playlist.svg").default,
    description: "Create and customize playlists with ease.",
  },
];

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx("col col--4", styles.featureCard)}>
      <div className={styles.iconWrapper}>
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <h3 className={styles.featureTitle}>{title}</h3>
      <p className={styles.featureDesc}>{description}</p>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
