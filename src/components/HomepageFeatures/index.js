import React from "react";
import clsx from "clsx";
import styles from "./styles.module.css";

const FeatureList = [
  {
    title: "Albums",
    Svg: require("@site/static/img/Albums.svg").default,
    description: <>Retrieve and Manage Album Metadata.</>,
  },
  {
    title: "Artists on your beck and call",
    Svg: require("@site/static/img/Artists.svg").default,
    description: <>Discover Artist Information and Top Tracks.</>,
  },
  {
    title: "Save Track Details",
    Svg: require("@site/static/img/Playlist.svg").default,
    description: <>Create and Customize Playlists Easily.</>,
  },
];

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
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
