import * as React from "react";
import styled from "react-emotion";

import { clearfix, getEmSize } from "../styles/mixins";
import { colors, breakpoints } from "../styles/variables";

interface BackgroundFigureProps {
  src?: string;
}

const PostList = styled.ul`
  margin: 50px 0 0;
  padding: 0;
  list-style: none;
  list-style-image: none;
`;

export const ListHead = styled.h2`
  margin: 50px 0 5px;
  font-size: 2.5rem;
`;

export const ListDesc = styled.strong`
  font-weight: 400;
  color: ${colors.gray80};
`;

export const ListItem = styled.li`
  ${clearfix} margin: 0 0 40px;
  border-top: 1px solid ${colors.gray10};
  padding-top: 1rem;

  a {
    color: inherit;

    &:hover h3 {
      color: ${colors.primary100};
    }
  }

  h3 {
    margin: 0;
    font-size: 1.5rem;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    color: ${colors.gray100};
    transition: color 0.5s;

    @media (max-width: ${getEmSize(breakpoints.sm)}em) {
      white-space: initial;
    }
  }
`;

const ListItemImgWrapper = styled.figure`
  float: right;
  margin: 0.5rem 0 0 80px;
  width: 240px;
  height: 160px;
  overflow: hidden;

  @media (max-width: ${getEmSize(
      breakpoints.md,
    )}em) and (max-width: ${getEmSize(breakpoints.lg)}em) {
    margin-left: 40px;
  }

  @media (max-width: ${getEmSize(
      breakpoints.sm,
    )}em) and (max-width: ${getEmSize(breakpoints.md)}em) {
    margin-left: 20px;
  }

  @media (max-width: ${getEmSize(breakpoints.sm)}em) {
    float: none;
    width: 100%;
    margin-left: 0;
    margin-bottom: 10px;
  }
`;

const Img = styled.div`
  width: 100%;
  height: 100%;
  background-position: 50% 50%;
  background-size: cover;
  background-image: ${(props: BackgroundFigureProps) =>
    props.src ? `url(${props.src})` : "none"};
  transition: transform 0.5s, filter 0.5s;

  a:hover & {
    transform: scale(1.15);
    filter: brightness(110%);
  }
`;

export const ListItemImg = ({ src }: BackgroundFigureProps) => (
  <ListItemImgWrapper>
    <Img src={src} />
  </ListItemImgWrapper>
);

export const TagList = styled.aside`
  margin-bottom: 15px;
  font-weight: 500;
  font-size: 0.875rem;
  color: ${colors.gray60};

  > span {
    transition: color 0.5s;
    margin-right: 5px;

    &:hover {
      color: ${colors.primary100};
    }
  }
`;

export default PostList;
