import React, {useState} from "react";
import {MenuItem} from "../menuItem";
import "./DirectoryComponent.scss";
import SECTIONS_DATA from "../../pages/homepage/MENU_ITEMS";

export const Directory = () => {

	const [sections] = useState(SECTIONS_DATA)

	return (
		<div className="directory-menu">
			{sections.map(({id, ...otherProps}) => (
				<MenuItem key={id} {...otherProps}/>
			))}
		</div>
	);

}
