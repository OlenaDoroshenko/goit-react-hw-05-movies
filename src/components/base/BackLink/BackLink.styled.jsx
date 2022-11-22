import styled from "styled-components";
import { Link } from 'react-router-dom';

const StyledLink = styled(Link)`
display: inline-flex;
align-items: center;
gap: 4px;
color: black;
text-decoration: none;

padding: 8px 16px;
margin-bottom: 20px;
border: 1px solid #BEBEBE;
border-radius: 4px;


font-weight: 500;

&:hover {
    color: #FFFFFF;
    background-color: #FF4500;
  }
`

export default StyledLink;