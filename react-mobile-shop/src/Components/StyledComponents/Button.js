// * import styled-components
import Styled from "styled-components";

// styled components - button
export const ButtonContainer = Styled.button`
  text-transform: capitalize;
  font-size: 1.4rem;
  background: transparent;
  border: 0.05rem solid var(--mainBlue);
  color: var(--mainBlue);
  border-radius: 0.5rem;
  padding: 0.2rem 0.5rem;
  cursor: pointer;
  margin: 0.2rem 0.5rem 0.2rem 0;

  // * hover effect
  &:hover {
    background: var(--lightBlue);
    color: var(--mainWhite);
  }
  &:focus {
    outline: none;
  }
`;
