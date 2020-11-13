import React from "react";

import './header.scss'

import {useSelector} from "react-redux";
import {Link} from "react-router-dom";
import {ReactComponent as Logo} from "../../assets/crown.svg";
import {auth} from '../../firebase/firebase.utils'
import {CartIcon} from "../cartIcon";

import {CartDropdown} from "../cartDropdown";
import {selectCartHidden} from "../../redux/cart";
import {selectCurrentUser} from "../../redux/user";


export const Header = () => {
	 const currentUser = useSelector(state => selectCurrentUser(state))
	 const hidden = useSelector(state => selectCartHidden(state))

	 return (
			<div className={'header'}>

				 <Link to={'/'} className={'logo-container'}>
						<Logo className={'logo'}/>
				 </Link>
				 <div className={"options"}>
						<Link className={"option"} to={'/shop'}>
							 SHOP
						</Link>
						<Link className={"option"} to={'/contact'}>
							 CONTACT
						</Link>
						{currentUser ?
							 <div
									className={'option'}
									onClick={() => auth.signOut()}
							 >
									SIGN OUT
							 </div> :
							 <Link
									className={'option'}
									to={'/signin'}
							 >
									SIGN IN
							 </Link>
						}
						<CartIcon/>
				 </div>
				 {!hidden ? <CartDropdown/> : null}
			</div>
	 )
}
