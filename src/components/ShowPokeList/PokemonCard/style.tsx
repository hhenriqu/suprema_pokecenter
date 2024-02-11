import styled from 'styled-components'

export const CardDiv = styled.div`
  width: 18rem;
  height: 10rem;
  margin: 1rem;
  padding: 1rem;

  display: flex;
  align-items: center;
  gap: 0.5rem;
  border: 1px solid red;
  border-radius: 1rem;

  font-size: 0.8rem;
  font-weight: 600;
  color: #f0f0f0;
  text-transform: capitalize;

  background: #cc0000;

  .pokeImage {
    position: relative;
    width: 8rem;
    height: 100%;

    border-radius: 1rem;
    background: #f0f0f0;

    display: flex;
    align-items: center;
    justify-content: center;
  }

  .idCard {
    position: absolute;
    top: 0.25rem;
    left: 0.25rem;

    width: 2rem;
    height: 2rem;

    border-radius: 2rem;
    background: #ffde00;

    display: flex;
    align-items: center;
    justify-content: center;

    font-weight: 800;
    color: #3b4cca;
  }

  &:hover {
    background: #FF0000;
  }
`
