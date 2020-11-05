import React, {Component} from "react";
import {MenuItem} from "../menuItem/MenuItemComponent";
import "./DirectoryComponent.scss";
import SECTIONS_DATA from "../../pages/homepage/MENU_ITEMS";

export class Directory extends Component {
   constructor(props) {
      super(props);

      this.state = {
         sections: SECTIONS_DATA
      };
   }

   render() {
      return (
         <div className="directory-menu">
            {this.state.sections.map(({id,...otherProps}) => (
               <MenuItem key={id} {...otherProps}/>
            ))}
         </div>
      );
   }
}
