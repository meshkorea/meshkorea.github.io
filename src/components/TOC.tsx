import * as React from "react";
import enhanceWithClickOutside from "react-click-outside";
import styled from "react-emotion";

import { getEmSize } from "../styles/mixins";
import { colors, breakpoints } from "../styles/variables";

import Icon from "./Icon";

interface TOCPositionProps {
  fixed: boolean;
}

interface TOCListProps {
  fixed: boolean;
  opened: boolean;
}

interface TOCProps {
  fixed: boolean;
  generatedTOC: string;
}

interface TOCState {
  opened: boolean;
}

const TOCWrapper = styled.nav`
  color: ${colors.gray40};
  transition: color 0.5s;

  &:hover {
    color: ${colors.gray80};
  }

  > i {
    position: ${(props: TOCPositionProps) =>
      props.fixed ? "fixed" : "absolute"};
    top: ${(props: TOCPositionProps) => (props.fixed ? "125px" : "auto")};
    margin-top: 0.15em;
    width: 30px;
    line-height: 1.5rem;
    cursor: pointer;

    .short {
      transition: width 0.5s;
    }

    &:hover .short {
      width: 18px !important;
    }
  }

  @media (max-width: ${getEmSize(breakpoints.sm)}em) {
    display: ${(props: TOCPositionProps) => (props.fixed ? "block" : "none")};

    > i {
      display: block;
      top: 44px;
      left: 0;
      margin-top: 0;
      width: 56px;
      height: 50px;
      z-index: 1100;
      padding: 10px 36px 10px 16px;
    }
  }
`;

const TOCList = styled.div`
  ${(props: TOCListProps) =>
    props.fixed
      ? `
  position: fixed;
  top: 115px;
  margin-top: 0;
  `
      : `
  position: absolute;
  top: auto;
  margin-top: -10px;
      `} z-index: 50;
  margin-left: 30px;
  width: 0;
  height: 0;
  font-size: 1rem;

  ul {
    margin: 0;
    padding: 0;
    list-style: none;
    list-style-image: none;

    p {
      margin: 0;
    }

    a {
      display: block;
      margin-left: -0.5rem;
      margin-right: -0.5rem;
      padding: 0.3rem 0.5rem;
      border-radius: 0.5rem;
      transition: background-color 0.5s;

      &:hover {
        background-color: ${colors.gray10};
      }
    }

    &:not(:first-child) {
      padding-left: 1rem;
    }
  }

  > ul {
    ${(props: TOCListProps) =>
      props.opened
        ? `
    visibility: visible;
    opacity: 1;
    transition: opacity 0.5s;
  `
        : `
    visibility: hidden;
    opacity: 0;
    transition: visibility 0s 0.5s, opacity 0.5s;
    `} width: 320px;
    max-height: 360px;
    overflow-y: auto;
    padding: 0.5rem 1rem;
    background: ${colors.white};
    border-radius: 10px;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.5);
  }

  @media (max-width: ${getEmSize(breakpoints.sm)}em) {
    top: 89px;
    left: 0;
    right: 0;
    margin-top: 0;
    margin-left: 0;
    width: 100%;

    > ul {
      width: 100%;
      box-shadow: none;
      border-radius: 0;
      border-bottom: 1px solid ${colors.gray15};
    }
  }
`;

class TOC extends React.Component<TOCProps, TOCState> {
  public readonly state: TOCState = {
    opened: false,
  };

  public render() {
    return (
      <TOCWrapper fixed={this.props.fixed}>
        <Icon name="TOC" onClick={this.handleOnToggle} />
        <TOCList
          opened={this.state.opened}
          fixed={this.props.fixed}
          dangerouslySetInnerHTML={{
            __html: this.props.generatedTOC,
          }}
        />
      </TOCWrapper>
    );
  }

  protected handleClickOutside = () => {
    if (this.state.opened) {
      this.setState({ opened: false });
    }
  };

  private handleOnToggle = () => {
    this.setState(prev => ({ opened: !prev.opened }));
  };
}

export default enhanceWithClickOutside(TOC);
