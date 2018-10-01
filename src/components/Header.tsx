import * as React from "react";
import styled from "react-emotion";
import { Link } from "gatsby";

import { colors, widths } from "../styles/variables";
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
  height: 240px;
  padding: 100px 0 0;
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

const SmallTitle = styled.h1`
  z-index: 105;
  position: fixed;
  top: 0;
  margin: 0;
  width: 300px;
  height: 70px;
  padding-top: 33px;
  font-size: 1.125rem;
  font-weight: 700;
  line-height: 1.2;
  color: ${(props: TitleProps) =>
    props.show ? colors.gray100 : colors.gray10};
  background-color: ${colors.gray10};
  transition: color 0.5s;

  > i {
    margin-right: 14px;
    > svg {
      transition: fill 0.5s;
    }
  }
`;

const RecruitLinks = styled.div`
  position: fixed;
  top: 26px;
  width: ${widths.lg}px;
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

const TagAndSearch = styled.div`
  display: flex;
  margin-top: 19px;
`;

const TagList = styled.ul`
  flex: 1;
  margin: 0;
  padding: 0;
  list-style: none;
  list-style-image: none;
  font-weight: 500;
  color: ${colors.gray80};
`;

const TagItem = styled.li`
  display: inline-block;
  margin-right: 20px;
`;

const Search = styled.div`
  position: relative;
`;

const SearchLabel = styled.label`
  position: absolute;
  top: 6px;
  left: 11px;
  line-height: 16px;
  color: ${colors.gray50};
`;

const SearchInput = styled.input`
  width: 200px;
  height: 28px;
  padding-left: 36px;
  border: 0;
  border-radius: 14px;

  &:focus {
    outline: none;
  }
`;

interface HeaderProps {
  title: string;
}

interface HeaderState {
  isFolded: boolean;
}

class Header extends React.PureComponent<HeaderProps, HeaderState> {
  public readonly state: HeaderState = {
    isFolded: false,
  };

  public componentDidMount() {
    this.handleOnScroll();
    window.addEventListener("scroll", this.handleOnScroll);
  }

  public componentWillUnmount() {
    this.handleOnScroll();
    window.removeEventListener("scroll", this.handleOnScroll);
  }

  public render() {
    return (
      <StyledHeader folded={this.state.isFolded}>
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
          <SmallTitle show={this.state.isFolded}>
            <Icon
              name="LOGO"
              width={26}
              height={30}
              viewboxLeft={20.8}
              viewboxTop={24}
              color={this.state.isFolded ? colors.primary100 : colors.gray10}
            />
            <HomepageLink to="/">Mesh Korea Makers Blog</HomepageLink>
          </SmallTitle>
          <TagAndSearch>
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
          </TagAndSearch>
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
