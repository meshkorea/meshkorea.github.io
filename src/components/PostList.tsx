import * as React from "react";
import styled from "react-emotion";

import { clearfix } from "../styles/mixins";
import { colors } from "../styles/variables";

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

  a {
    color: inherit;

    &:hover h3 {
      text-decoration: underline;
    }
  }

  h3 {
    margin: 0;
    font-size: 1.5rem;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    color: ${colors.primary100};
  }
`;

const ListItemImgWrapper = styled.figure`
  float: right;
  margin: 0 0 0 80px;
  width: 240px;
  height: 160px;
  overflow: hidden;
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
