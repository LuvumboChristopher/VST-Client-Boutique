import React from 'react'
import { Copyright } from '../style'
import styled from 'styled-components';

export const StoreFooter = () => {
  const FooterContainer = styled.div`
  width: 90%;
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  padding: 50px 0;
  text-align: center;
  background-color: white;
  gap: 20px;

  @media (max-width: 768px) {
      justify-content: center;
  }
`;
  const styles = {
    text: {
        fontSize: '0.8rem',
        color: 'black',
    },
    link: {
        fontWeight: 'bolder',
        marginLeft: '0.25rem',
        color: 'black',
    },
};

  const currentYear = new Date().getFullYear()
  return (
      <FooterContainer>
      <p style={styles.text}>© {currentYear} VinylSore All Rights Reserved </p>
      <h4 style={styles.text}>
          Réalisation et conception par 🚀
          <a
              href="https://www.linkedin.com/in/christopher-luvumbo/"
              target="_blank"
              rel="noopener noreferrer"
              style={styles.link}
          >
              L.Christopher
          </a>
      </h4>
  </FooterContainer>
  )
}

