import * as React from "react";
import styled, { keyframes } from "react-emotion";
import { Link } from "gatsby";

import { colors } from "../styles/variables";
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
`;

const Logo = styled.div`
  width: 133px;
  height: 24px;
`;

const Title = styled.h1`
  font-size: 3rem;
  margin: 6px 0 0;
  font-weight: 700;
  line-height: 1.2;
  letter-spacing: -0.015em;
`;

const SmallTitleContainer = styled(Container)`
  display: flex;

  > a {
    flex: 1;
    color: inherit;
  }
`;

const SmallTitle = styled.h1`
  padding-top: 5px;
  font-size: inherit;
  cursor: ${(props: TitleProps) => (props.show ? "pointer" : "default")};

  .link-text {
    opacity: ${(props: TitleProps) => (props.show ? 1 : 0)};
    transition: ${(props: TitleProps) =>
      props.show ? "opacity 0.5s ease-in" : "opacity 0.2s ease-out"};
  }

  i {
    margin-right: 14px;
    > svg {
      transition: ${(props: TitleProps) =>
        props.show ? "fill 0.5s ease-in" : "fill 0.2s ease-out"};
    }
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
  }
`;

const RecruitLink = styled.a`
  margin-left: 12px;
  padding-top: 5px !important;
  padding-left: 20px;
  padding-right: 20px;
  font-weight: 600;
  border: 1px solid ${colors.primary100};
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
}

class Header extends React.PureComponent<HeaderProps, HeaderState> {
  public readonly state: HeaderState = {
    isFolded: false,
  };

  public componentDidMount() {
    if (this.props.home) {
      this.handleOnScroll();
      window.addEventListener("scroll", this.handleOnScroll);
    }
  }

  public componentWillUnmount() {
    if (this.props.home) {
      window.removeEventListener("scroll", this.handleOnScroll);
    }
  }

  public render() {
    const folded = !this.props.home || this.state.isFolded;
    return (
      <StyledHeader folded={folded}>
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
                  color={folded ? colors.primary100 : colors.gray10}
                />
                <span className="link-text">Mesh Korea Makers Blog</span>
              </SmallTitle>
            </Link>
            <RecruitLinks>
              <a href="https://github.com/meshkorea" target="_blank">
                <Icon name="GITHUB" />
              </a>
              <RecruitLink
                href="https://www.wanted.co.kr/company/676"
                target="_blank"
              >
                지금 지원하러 가기
              </RecruitLink>
            </RecruitLinks>
          </SmallTitleContainer>
        </SmallTitleBox>
        <Container>
          <Logo>
            <Icon
              name="LOGO"
              width={133}
              height={24}
              color={colors.primary100}
            />
          </Logo>
          <Title>
            <HomepageLink to="/">Makers Blog</HomepageLink>
          </Title>
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
    );
  }

  private handleOnScroll = () => {
    if (!this.state.isFolded && window.scrollY > 125) {
      this.setState({ isFolded: true });
    } else if (this.state.isFolded && window.scrollY < 125) {
      this.setState({ isFolded: false });
    }
  };
}

export default Header;
