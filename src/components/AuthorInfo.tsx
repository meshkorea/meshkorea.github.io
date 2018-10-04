import styled from "react-emotion";

import { clearfix } from "../styles/mixins";
import { colors } from "../styles/variables";

interface BackgroundFigureProps {
  src?: string;
}

const AuthorInfo = styled.aside`
  ${clearfix} margin-top: 10px;
`;

export const AuthorAvatar = styled.figure`
  float: left;
  margin: 0;
  width: 3rem;
  height: 3rem;
  border-radius: 1.5rem;
  background-color: ${colors.gray10};
  background-position: 50% 50%;
  background-size: cover;
  background-image: ${(props: BackgroundFigureProps) =>
    props.src ? `url(${props.src})` : "none"};
`;

export const AuthorName = styled.strong`
  display: block;
  margin: 4px 0 0 60px;
  font-weight: 600;
  line-height: 1.3;
  color: ${colors.gray100};
`;

export const AuthorDesc = styled.aside`
  margin-left: 60px;
  font-size: 0.875rem;
  color: ${colors.gray60};
`;

export default AuthorInfo;
