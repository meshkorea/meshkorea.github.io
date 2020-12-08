import * as React from "react";
import styled from "@emotion/styled";
import { Link } from "gatsby";
import { OutboundLink } from "gatsby-plugin-google-analytics";

import { colors, breakpoints } from "../styles/variables";
import { getEmSize } from "../styles/mixins";

import Container from "./Container";
import Icon from "./Icon";

interface StyledHeaderProps extends React.HTMLProps<HTMLDivElement> {
  folded: boolean;
}

interface TitleProps extends React.HTMLProps<HTMLDivElement> {
  show: boolean;
}

const StyledHeader = styled.header`
  position: ${(props: StyledHeaderProps) =>
    props.folded ? "fixed" : "absolute"};
  top: ${(props: StyledHeaderProps) => (props.folded ? "-125px" : "0")};
  left: 0;
  right: 0;
  z-index: 100;
  height: 215px;
  padding: 110px 0 0;
  color: ${colors.gray100};
  border-bottom: 1px solid ${colors.gray15};
  background-color: ${colors.gray10};

  @media (max-width: ${getEmSize(breakpoints.sm)}em) {
    top: ${(props: StyledHeaderProps) => (props.folded ? "-51px" : "0")};
    height: ${(props: StyledHeaderProps) => (props.folded ? "96px" : "100px")};
    padding-top: 58px;
    transition: height 0.3s;
  }
`;

const LogoContainer = styled.div`
  @media (min-width: ${getEmSize(breakpoints.sm)}em) {
    display: ${(props: StyledHeaderProps) => (props.folded ? "none" : "block")};
  }
`;

const Logo = styled.div`
  width: 133px;
  height: 24px;

  @media (max-width: ${getEmSize(breakpoints.sm)}em) {
    display: inline-block;
    width: 26px;
    height: 30px;
    overflow: hidden;

    > i > svg {
      width: 166px;
      height: 30px;
    }
  }
`;

const Title = styled.h1`
  font-size: 3rem;
  margin: 6px 0 0;
  font-weight: 700;
  line-height: 1.2;
  letter-spacing: -0.015em;

  @media (max-width: ${getEmSize(breakpoints.sm)}em) {
    display: inline-block;
    margin: 0 0 0 14px;
    font-size: 1.125rem;
    line-height: 30px;
    vertical-align: top;
  }
`;

const SmallTitleContainer = styled(Container)`
  display: flex;

  > a {
    color: inherit;
  }
`;

const SmallTitle = styled.h1`
  padding-top: 5px;
  font-size: inherit;
  color: ${(props: TitleProps) =>
    props.show ? colors.primary100 : colors.gray10};
  cursor: ${(props: TitleProps) => (props.show ? "pointer" : "default")};
  transition: ${(props: TitleProps) =>
    props.show ? "color 0.5s ease-in" : "color 0.2s ease-out"};

  .link-text {
    color: ${colors.gray100};
    opacity: ${(props: TitleProps) => (props.show ? 1 : 0)};
    transition: ${(props: TitleProps) =>
      props.show ? "opacity 0.5s ease-in" : "opacity 0.2s ease-out"};
  }

  i {
    margin-right: 14px;
  }

  @media (max-width: ${getEmSize(breakpoints.sm)}em) {
    display: none;
  }
`;

const SmallTitleBox = styled.div`
  z-index: 105;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  margin: 0;
  height: 75px;
  padding-top: 26px;
  font-size: 1.125rem;
  font-weight: 700;
  line-height: 1.2;
  background-color: ${colors.gray10};

  @media (max-width: ${getEmSize(breakpoints.sm)}em) {
    height: 44px;
    padding-top: 0;
    left: 50px;
  }
`;

const RecruitLinks = styled.div`
  font-size: 1rem;
  text-align: right;
  color: ${colors.primary100};

  > a {
    display: inline-block;
    min-width: 36px;
    height: 36px;
    padding-top: 6px;
    text-align: center;
    line-height: 24px;
    border-radius: 18px;
    transition: color 0.3s, background 0.5s;

    &:hover,
    &:focus {
      color: ${colors.white};
      text-decoration: none;
      background: ${colors.primary100};
    }

    @media (max-width: ${getEmSize(breakpoints.sm)}em) {
      color: ${colors.gray90};
      margin: 4px 0;
      border-radius: 5px;

      &:hover,
      &:focus {
        color: ${colors.gray100};
        background: ${colors.gray15};
      }
    }
  }
`;

const RecruitLink = styled(OutboundLink)`
  margin-left: 12px;
  padding-top: 5px !important;
  padding-left: 1.25rem;
  padding-right: 1.25rem;
  font-weight: 600;
  border: 1px solid ${colors.primary100};

  @media (max-width: ${getEmSize(breakpoints.sm)}em) {
    margin-left: 0.6rem;
    margin-right: -0.625rem;
    padding-left: 0.625rem;
    padding-right: 0.625rem;
    line-height: 26px;
    font-weight: 400;
    color: ${colors.gray90};
    border: none;
  }
`;

const HomepageLink = styled(Link)`
  color: inherit;

  &:hover,
  &:focus {
    text-decoration: none;
  }
`;

// const TagAndSearch = styled.div`
//   display: flex;
//   margin-top: 19px;
// `;

// const TagList = styled.ul`
//   flex: 1;
//   margin: 0;
//   padding: 0;
//   list-style: none;
//   list-style-image: none;
//   font-weight: 500;
//   color: ${colors.gray80};
// `;

// const TagItem = styled.li`
//   display: inline-block;
//   margin-right: 20px;
// `;

// const Search = styled.div`
//   position: relative;
// `;

// const SearchLabel = styled.label`
//   position: absolute;
//   top: 6px;
//   left: 11px;
//   line-height: 16px;
//   color: ${colors.gray50};
// `;

// const SearchInput = styled.input`
//   width: 200px;
//   height: 28px;
//   padding-left: 36px;
//   border: 0;
//   border-radius: 14px;

//   &:focus {
//     outline: none;
//   }
// `;

interface HeaderProps {
  title: string;
  home?: boolean;
}

interface HeaderState {
  isFolded: boolean;
  isMobile: boolean;
}

class Header extends React.PureComponent<HeaderProps, HeaderState> {
  public readonly state: HeaderState = {
    isFolded: false,
    isMobile: false,
  };

  public componentDidMount() {
    if (this.props.home) {
      this.handleOnScroll();
      window.addEventListener("scroll", this.handleOnScroll);
    }

    this.handleOnResize();
    window.addEventListener("resize", this.handleOnResize);
  }

  public componentWillUnmount() {
    if (this.props.home) {
      window.removeEventListener("scroll", this.handleOnScroll);
    }
    window.removeEventListener("resize", this.handleOnResize);
  }

  public render() {
    const folded =
      this.state.isFolded || (!this.state.isMobile && !this.props.home);
    return (
      <>
        <SmallTitleBox>
          <SmallTitleContainer>
            <Link to="/">
              <SmallTitle show={folded}>
                <Icon
                  name="LOGO"
                  width={26}
                  height={30}
                  viewboxLeft={20.8}
                  viewboxTop={24}
                />
                <span className="link-text">Mesh Korea Makers Blog</span>
              </SmallTitle>
            </Link>
            <div style={{ flex: 1 }} />
            <RecruitLinks>
              <OutboundLink href="https://github.com/meshkorea" target="_blank">
                <Icon name="GITHUB" />
              </OutboundLink>
              <RecruitLink
                href="https://www.meshkorea.net/kr/career/"
                target="_blank"
              >
                지금 지원하러 가기
              </RecruitLink>
            </RecruitLinks>
          </SmallTitleContainer>
        </SmallTitleBox>
        <StyledHeader folded={folded}>
          <Container>
            <LogoContainer folded={folded}>
              <HomepageLink to="/">
                <Logo>
                  <Icon
                    name="LOGO"
                    width={133}
                    height={24}
                    color={colors.primary100}
                  />
                </Logo>
                <Title>
                  {this.state.isMobile && "Mesh Korea "}
                  Makers Blog
                </Title>
              </HomepageLink>
            </LogoContainer>
            {/* <TagAndSearch>
            <TagList>
              <TagItem>#lorem_ipsum</TagItem>
              <TagItem>#dolor</TagItem>
              <TagItem>#sit</TagItem>
              <TagItem>
                <Icon name="MORE" width={18} height={18} />
              </TagItem>
            </TagList>
            <Search>
              <SearchLabel>
                <Icon name="SEARCH" width={16} height={16} />
              </SearchLabel>
              <SearchInput />
            </Search>
          </TagAndSearch> */}
          </Container>
        </StyledHeader>
      </>
    );
  }

  private handleOnScroll = () => {
    const eventHandler = () => {
      const threshold = this.state.isMobile ? 51 : 125;
      if (!this.state.isFolded && window.scrollY > threshold) {
        this.setState({ isFolded: true });
      } else if (this.state.isFolded && window.scrollY < threshold) {
        this.setState({ isFolded: false });
      }
    };

    if (window.requestAnimationFrame) {
      window.requestAnimationFrame(() => {
        eventHandler();
      });
    } else {
      eventHandler();
    }
  };

  private handleOnResize = () => {
    const eventHandler = () => {
      const isMobile = window.innerWidth <= breakpoints.sm;
      if (this.state.isMobile !== isMobile) {
        this.setState({ isMobile }, () => {
          this.handleOnScroll();
          if (!isMobile && !this.props.home) {
            window.removeEventListener("scroll", this.handleOnScroll);
          } else {
            window.addEventListener("scroll", this.handleOnScroll);
          }
        });
      }
    };

    if (window.requestAnimationFrame) {
      window.requestAnimationFrame(() => {
        eventHandler();
      });
    } else {
      eventHandler();
    }
  };
}

export default Header;
