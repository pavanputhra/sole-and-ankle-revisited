/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components/macro';
import { DialogOverlay, DialogContent } from '@reach/dialog';

import UnstyledButton from '../UnstyledButton';
import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';
import {COLORS} from "../../constants";

const MobileMenu = ({ isOpen, onDismiss }) => {
  if (!isOpen) {
    return null;
  }

  return (
      <Overlay>
          <Content>
              <CloseButton onClick={onDismiss}>
                    <Icon id="close" />
              </CloseButton>
              <Nav>
                  <a href="/sale">Sale</a>
                  <a href="/new">New&nbsp;Releases</a>
                  <a href="/men">Men</a>
                  <a href="/women">Women</a>
                  <a href="/kids">Kids</a>
                  <a href="/collections">Collections</a>
              </Nav>
              <Footer>
                  <a href="/terms">Terms and Conditions</a>
                  <a href="/privacy">Privacy Policy</a>
                  <a href="/contact">Contact Us</a>
              </Footer>
          </Content>
      </Overlay>
  );
};


const Overlay = styled(DialogOverlay)`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  background-color: hsla(0, 0%, 0%, 0.5);
`;

const Content = styled(DialogContent)`
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background-color: ${COLORS.white};
    width: 80%;
    padding: 32px;
`;

const CloseButton = styled.button`
    align-self: flex-end;
    width: min-content;
    background: none;
    border: none;
`;

const Nav = styled.nav`
    display: flex;
    flex-direction: column;
    gap: 22px;
    a {
        text-decoration: none;
        color: var(--color-gray-900);
        text-transform: uppercase;
        font-size: (18/16)rem;
        font-weight: 600;
    }
`;

const Footer = styled.footer`
    display: flex;
    flex-direction: column;
    gap: 14px;
    font-size: (14/16)rem;

    a {
        text-decoration: none;
        color: var(--color-gray-300);
        font-size: (18/16)rem;
        font-weight: 500;
    }
`;

export default MobileMenu;
