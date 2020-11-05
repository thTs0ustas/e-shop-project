import React, {Component} from "react";
import {MenuItem} from "../menuItem/MenuItemComponent";
import "./DirectoryComponent.scss";

export class Directory extends Component {
   constructor(props) {
      super(props);

      this.state = {
         sections: [
            {
               title: "hats",
               id: 1,
               imgUrl: "https://i.ibb.co/cvpntL1/hats.png",
               linkUrl: 'hats'
            },
            {
               title: "jackets",
               id: 2,
               imgUrl: "https://i.ibb.co/px2tCc3/jackets.png",
               linkUrl: 'jackets'
            },
            {
               title: "sneakers",
               id: 3,
               imgUrl: "https://i.ibb.co/0jqHpnp/sneakers.png",
               linkUrl: 'sneakers'
            },
            {
               title: "women",
               size: 'large',
               id: 4,
               imgUrl: "https://i.ibb.co/GCCdy8t/womens.png",
               linkUrl: 'women'
            },
            {
               title: "men",
               size: 'large',
               id: 5,
               imgUrl: "https://i.ibb.co/R70vBrQ/men.png",
               linkUrl: "men"
            }
         ]
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
