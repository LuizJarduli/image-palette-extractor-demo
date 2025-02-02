import { styled } from 'styled-components';

export const ResultWidgetContainer = styled.section`
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  position: relative;
`;

export const Divider = styled.div`
  width: 1px;
  background-color: rgb(111, 111, 111);
  margin: 0 1rem;
  align-self: stretch;
`;

export const ColorContainer = styled.div`
  flex: 1;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(8.25rem, 1fr));
  grid-row-gap: 0.5rem;
  grid-column-gap: 0.5rem;
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
