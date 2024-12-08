import { matchPath, useLocation, useNavigate } from "react-router-dom";
import BackIcon from "@/assets/icons/back.svg?react";

import AlarmIcon from "@/assets/icons/alarm.svg?react";
import LogoIcon from "@/assets/icons/logo.svg?react";

import * as Styled from "./Header.style";
import { HEADER_CONFIG } from "./headerConfig";
import AlarmIcon from "@/components/feature/header/AlarmIcon";

function Header() {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  // 헤더 없는 페이지
  const noHeader = HEADER_CONFIG.NO_HEADER.some((path) =>
    matchPath(path, pathname)
  );

  if (noHeader) return null;

  // 로고, 종 페이지
  const showLogo = HEADER_CONFIG.SHOW_LOGO.some((path) =>
    matchPath(path, pathname)
  );

  if (showLogo) {
    return (
      <Styled.HeaderContainer>
        <Styled.StyledNavLink to="/main">
          <Styled.LogoWrapper>
            <LogoIcon
              width="100%"
              height="100%"
              fill="none"
              stroke="currentColor"
            />
          </Styled.LogoWrapper>
        </Styled.StyledNavLink>
        <Styled.StyledNavLink to="/notifications">
          <Styled.IconWrapper>
            <AlarmIcon />
          </Styled.IconWrapper>
        </Styled.StyledNavLink>
      </Styled.HeaderContainer>
    );
  }

  // 뒤로가기 페이지

  const handleBackClick = () => {
    navigate(-1); // 이전 페이지로 이동
  };

  return (
    <Styled.HeaderContainer>
      <button onClick={handleBackClick}>
        <Styled.IconWrapper>
          <BackIcon
            width="100%"
            height="100%"
            fill="currentColor"
            stroke="currentColor"
          />
        </Styled.IconWrapper>
      </button>
      <div></div>
    </Styled.HeaderContainer>
  );
}

export default Header;
