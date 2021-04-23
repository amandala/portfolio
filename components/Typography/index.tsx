import React, { ReactElement } from "react";
import cx from "classnames";

import styles from "./index.module.scss";

type TypographyType = {
  children: any;
  small?: boolean;
  className?: string;
};

export const H1 = ({ children }: TypographyType) => (
  <h1 className={styles.H1}>{children}</h1>
);
export const H2 = ({ children }: TypographyType) => (
  <h2 className={styles.H2}>{children}</h2>
);
export const H3 = ({ children }: TypographyType) => (
  <h3 className={styles.H3}>{children}</h3>
);
export const H4 = ({ children }: TypographyType) => (
  <h4 className={styles.H4}>{children}</h4>
);
export const H5 = ({ children }: TypographyType) => (
  <h5 className={styles.H5}>{children}</h5>
);
export const P = ({ children, small, className }: TypographyType) => (
  <p className={cx(styles.P, className, { [styles.PSmall]: small })}>
    {children}
  </p>
);
