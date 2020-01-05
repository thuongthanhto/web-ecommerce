import React, { useState } from "react";
import MenuItem from "../MenuItem/MenuItem";
import "./styles.scss";

const mockData = [
  {
    title: "hats",
    imageUrl: "https://i.ibb.co/cvpntL1/hats.png",
    id: 1,
    linkUrl: "hats"
  },
  {
    title: "jackets",
    imageUrl: "https://i.ibb.co/px2tCc3/jackets.png",
    id: 2,
    linkUrl: ""
  },
  {
    title: "sneakers",
    imageUrl: "https://i.ibb.co/0jqHpnp/sneakers.png",
    id: 3,
    linkUrl: ""
  },
  {
    title: "sneakers",
    imageUrl: "https://i.ibb.co/GCCdy8t/woments.png",
    id: 4,
    linkUrl: ""
  },
  {
    title: "sneakers",
    imageUrl: "https://i.ibb.co/R70vBrQ/woments.png",
    id: 5,
    linkUrl: ""
  }
];
const Directory = () => {
  const [sections, setSections] = useState(mockData);

  return (
    <div className="directory-menu">
      {sections.map(({  id, ...otherSectionProps }) => (
        <MenuItem
          key={id}
          {...otherSectionProps}
        />
      ))}
    </div>
  );
};

export default Directory;
