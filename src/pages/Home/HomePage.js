import React from "react";

import "./styles.scss";
import Directory from "../../components/Directory/Directory";

const HomePage = () => {
  return (
    <div className="homepage">
      <div className="directory-menu">
        <Directory />
      </div>
    </div>
  );
};

export default HomePage;
