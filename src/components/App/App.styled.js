import styled from 'styled-components';

export const Button = styled.button`
  display: block;
  margin: 30px auto;
  padding: 8px 16px;
  border-radius: 2px;
  background-color: #3f51b5;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  text-align: center;
  color: ${props => props.theme.colors.white};
  border: 0;
  text-decoration: none;
  cursor: pointer;
  font-family: inherit;
  font-size: ${props => props.theme.fontSizes.m};
  line-height: 24px;
  font-style: normal;
  font-weight: ${props => props.theme.fontWeights.medium};
  min-width: 180px;
  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),
    0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);
  &:hover,
  :focus {
    background-color: #303f9f;
  }
`;
