import React, {useState} from 'react';
import ReactWhatsapp from '../lib/Whatsapp'
import styled from "@emotion/styled"
import { Element } from 'react-scroll'
import { Container, Section, theme, media } from '../styles'
import Image from './image'

const Title = styled.h2`
  color: ${theme.colors.dark};
  margin-bottom: 25px;
`;

const Copy = styled.h5`
  color: ${theme.colors.dark};
  font-size: 22px;
`

const FlexRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  a {
    color: ${theme.colors.mayerPurple};
    text-decoration: underline;
  }


  ${media.medium} {
    flex-direction: column;
  }
`

const ImageContainer = styled.div`
  width: 100%;
`

const FormContainer = styled.div`
  width: 100%;
  margin-top: 20px;

  div {
    width: 100%;
    display: column;
    flex-direction: row;
    margin-bottom: 15px;
  }

  label {
    color: ${theme.colors.darkLight};
    font-size: 12px;
    margin-bottom: 5px;
  }

  input,
  textarea {
    width: 100%;
    max-width: 100%;
    border: 1px solid ${theme.colors.gray};
    color: ${theme.colors.dark};
    margin-top: 5px;
    border-radius: ${theme.borderRadius};
    padding: 12px;
    font-size: 14px;
    resize: vertical;

    &.error {
      border: 1px solid red;
    }

    &:focus {
      outline: none;
    }
  }
  input {
    padding-right: 150px;
  }

  .error-message {
    position: absolute;
    font-size: 12px;
    height: 12px;
    color: red;
    top: 0;
    right: 10px;
    bottom: 0;
    margin: auto;
  }

  button {
    display: block;
    background-color: ${theme.colors.yellow};
    color: ${theme.colors.darkLight};
    border-radius: ${theme.borderRadius};
    padding: 12px 20px;
    box-shadow: ${theme.boxShadow};
    transition: ${theme.transition};
    font-size: 16px;
    border: 0;
    width: 200px;
    margin-left: auto;
    &:hover {
      cursor: pointer;
      box-shadow: ${theme.boxShadowHover};
    }

    &:focus {
      outline: none;
    }

    ${media.medium} {
      margin-bottom: 20px;
    }

    ${media.small} {
      width: 100%;
    }
  }
`
const Position = styled.div`
position: relative
`

const Contacts = () => {
    const number = (5511984308575);
    const [message, setMessage] = useState('');
  
    return (
        <Section bgColor={theme.colors.light} id="contact">
        <Element name="contact" />
        <Container>
        <FlexRow>
        <div className={Position}>
        <Title>Let's connect.</Title>
        <Copy>If you want to know more about me or my work, or if you would just like to say hello, send me a message. I'd love to hear from you.</Copy>
        <FormContainer>
        <div className="Contact Form">
            <div>
                <label>Message</label>
          <input
            id="message"
            placeholder="Hi, my name is Rafael, I'm from the company @Torreson and would like an budget."
            value={message}
            onChange={e => setMessage(e.target.value)}
          />
          </div>
          <ReactWhatsapp number={number} message={message}>
              Send >
          </ReactWhatsapp>
        </div>
        </FormContainer>    
        <ImageContainer ref={Image}>
            <Image filename="message.png" classes='gatsby-sbs-image' alt="Send me a message and let's connect." />
        </ImageContainer>
        </div>
        </FlexRow>
        </Container>
      </Section>
    );
  };


export default Contacts
