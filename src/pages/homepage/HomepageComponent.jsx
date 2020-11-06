import React from "react";
import "./homepageComponent.scss";
import {Directory} from "../../components/directory/DirectoryComponent";

const HomePage = () => {

   return (
      <div className="homepage">
         <Directory/>
      </div>
   );
};

export default HomePage;
