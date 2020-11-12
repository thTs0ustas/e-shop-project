import React from "react";
import {useSelector} from "react-redux";
import {Link} from "react-router-dom";

import {ReactComponent as Logo} from "../../assets/crown.svg";
import {auth} from '../../firebase/firebase.utils'
import {CartIcon} from "../cartIcon";
import {CartDropdown} from "../cartDropdown";

import './header.scss'
import shallowEqual from "react-redux/lib/utils/shallowEqual";

export const Header = () => {
	 const currentUser = useSelector(({user}) => user.currentUser,shallowEqual)
	 const hidden = useSelector(({cart}) => cart.hidden)

	 return (
			<div className={'header'}>

				 <Link to={'/'} className={'logo-container'}>
						<Logo className={'logo'}/>
				 </Link>
				 <div className={"options"}>
						<Link className={"option"} to={'/shop'}>
							 SHOP
						</Link>
						<Link className={"option"} to={'/shop'}>
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
