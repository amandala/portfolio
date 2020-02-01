import React from "react";

import styles from "./index.module.scss";

const Section = ({ children }) => (
  <div className={styles.Section}>{children}</div>
);

export default Section;
