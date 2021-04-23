import React from "react";
import styles from "./index.module.scss";

import { H3, H4, P, H5 } from "../Typography";

type PropsType = {
  title: string;
  location: string;
  date: string;
  details: string;
  link?: string;
};

const Entry = ({ title, location, date, details, link }: PropsType) => (
  <div>
    <div>
      <H3>{title}</H3>
      <div className={styles.LinkWrapper}>
        <H4>{location}</H4>
        {link ? (
          <a className={styles.Website} href={link}>
            {link}
          </a>
        ) : null}
      </div>
      <H5>{date}</H5>
    </div>
    <div>
      <P>{details}</P>
    </div>
  </div>
);

export default Entry;
