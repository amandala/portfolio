import React, { ReactElement } from "react";

import { H3, H4, P, H5 } from "../Typography";

type PropsType = {
  title: string;
  location: string;
  date: string;
  details: string;
};

const Entry = ({ title, location, date, details }: PropsType) => (
  <div>
    <div>
      <H3>{title}</H3>
      <H4>{location}</H4>
      <H5>{date}</H5>
    </div>
    <div>
      <P>{details}</P>
    </div>
  </div>
);

export default Entry;
