import { styled } from 'styled-components';

export const ResultWidgetContainer = styled.section`
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  position: relative;

  @media screen and (max-width: 48rem) {
    flex-direction: column;
    justify-content: flex-start;
  }
`;

export const Divider = styled.div`
  width: 1px;
  background-color: rgb(111, 111, 111);
  margin: 0 1rem;
  align-self: stretch;

  @media screen and (max-width: 48rem) {
    margin: 1rem 0;
    width: 100%;
    height: 1px;
  }
`;

export const ColorContainer = styled.div`
  flex: 1;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(8.25rem, 1fr));
  grid-row-gap: 0.5rem;
  grid-column-gap: 0.5rem;
  align-self: stretch;
`;

export const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 1rem;
  position: relative;

  img {
    max-width: 100px;
    max-height: auto;
    border-radius: 0.5rem;
    object-fit: contain;
  }
`;

export const FooterContainer = styled.footer`
  display: flex;
  width: 100%;
  height: 5rem;
  align-items: flex-end;
  justify-content: flex-end;

  @media screen and (max-width: 48rem) {
    justify-content: center;
  }
`;
