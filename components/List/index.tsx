import React from "react";
import cx from "classnames";

import styles from "./index.module.scss";

type PropsType = {
  items: Array<{ title: string; href?: string }>;
};

const List = ({ items }: PropsType) => {
  const useDots = items[0].title.length > 30;

  return (
    <ul className={cx(styles.List, { [styles.ListDots]: useDots })}>
      {items.map(item => (
        <li key={item.title} className={styles.ListItem}>
          {item.href ? (
            <a className={styles.ListLink} href={item.href} target="_blank">
              {item.title}
            </a>
          ) : (
            <span>{item.title}</span>
          )}
        </li>
      ))}
    </ul>
  );
};

export default List;
