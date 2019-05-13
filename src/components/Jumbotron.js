/* eslint-disable no-undef */
import React from 'react';
import {Jumbotron as Jumbo, Container} from 'react-bootstrap';
import styled from 'styled-components';
import image from '../Images/image.jpg';

const Styles = styled.div `
.jumbo {
    background-img: url ($ {image.jpg}) ;
    hight:200px;
    position:relative;
    z-index:-2;

};

.overlay{
    background-color:#000;
    opacity: 0.6;
    position:absolute;
    top:0;
    left:0;
    bottom:0;
    right:0;
    z-index: -1;
}
`;

export const Jumbotron = () =>(
<Styles>
    <Jumbo fluid className="jumbo">
      <div className="overlay"> </div>
     <Container>
        <h1>Welcome</h1>
          <p>Learn to code</p>
     </Container>
  </Jumbo>
</Styles>
)