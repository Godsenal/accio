import styled from 'styled-components';

const Button = styled.button`
  color: white;
  border: none;

  padding: 1rem;
  background: ${(props) => props.theme.gradation};
`;

export default Button;
