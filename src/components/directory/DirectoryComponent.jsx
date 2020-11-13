import React from "react";
import {MenuItem} from "../menuItem";
import "./DirectoryComponent.scss";
import {useSelector} from "react-redux";
import {selectDirectorySection} from "../../redux/directory/directorySelectors";

export const Directory = () => {

	const sections = useSelector(state => selectDirectorySection(state))

	return (
		<div className="directory-menu">
			{sections.map(({id, ...otherProps}) => (
				<MenuItem key={id} {...otherProps}/>
			))}
		</div>
	);

}
