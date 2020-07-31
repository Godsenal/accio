import styled from 'styled-components';

const Input = styled.input`
  width: 50%;
  color: white;
  background: inherit;

  padding: 1rem;

  border-width: 1px;
  border-style: solid;
  border-image-slice: 1;
  border-image-source: ${(props) => props.theme.gradation};
`;

export default Input;
