import styled from "styled-components";

import { Colors } from "../../Themes/Colors";

export const Button = styled.button`
  display: flex;
  height: 52px;
  align-items: center;
  justify-content: center;
  width: 173px;
  background-color: ${Colors.background};
  border-radius: 8px;
  border: ${Colors.purple} solid 1px;
  gap: 15px;

  :active{
    opacity: 0.75;
    transition: 100ms;
  }
`;

export const Text = styled.span`
  color: ${Colors.white};
`;

export const Plus = styled.img``