import React from "react";

import { useSelector } from "react-redux";
import { ReactComponent as Logo } from "../../assets/crown.svg";
import { auth } from "../../firebase/firebase.utils";
import { CartIcon } from "../cartIcon";

import {
  HeaderContainer,
  LogoContainer,
  OptionsContainer,
  OptionLink,
  OptionDiv,
} from "./header.styles";
import { CartDropdown } from "../cartDropdown";
import { selectCartHidden } from "../../redux/cart";
import { selectCurrentUser } from "../../redux/user";

export const Header = () => {
  const currentUser = useSelector((state) => selectCurrentUser(state));
  const hidden = useSelector((state) => selectCartHidden(state));

  return (
    <HeaderContainer>
      <LogoContainer to={"/"}>
        <Logo />
      </LogoContainer>
      <OptionsContainer>
        <OptionLink to={"/shop"}>SHOP</OptionLink>
        <OptionLink to={"/contact"}>CONTACT</OptionLink>
        {currentUser ? (
          <OptionDiv onClick={() => auth.signOut()}>SIGN OUT</OptionDiv>
        ) : (
          <OptionLink to={"/signin"}>SIGN IN</OptionLink>
        )}
        <CartIcon />
      </OptionsContainer>
      {!hidden ? <CartDropdown /> : null}
    </HeaderContainer>
  );
};
