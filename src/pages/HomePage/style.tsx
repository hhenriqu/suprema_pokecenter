import styled from 'styled-components'

export const PokemonDetailSection = styled.section`
  width: 100%;
  margin: 64px auto;

  .pokeWrapper {
    max-width: 1024px;
    height: fit-content;
    background: #cc0000;
    margin: 0 auto;
  }

  .TitleCard {
    width: 100%;
    height: 3rem;
    display: flex;
    align-items: center;
    border-bottom: 1px solid #f0f0f0;
  }

  .idTitle {
    width: 4rem;
    height: 3rem;

    background: #ffde00;

    font-size: 24px;
    font-weight: 800;
    text-align: center;
  }

  .pokeName {
    font-size: 48px;
    text-transform: uppercase;
    font-weight: bold;
    color: #f0f0f0;
    margin: 0 auto;
  }

  .DetailCard {
    display: flex;
    align-items: start;
    padding: 24px;
    gap: 36px;
  }
`
export const PokeImageDiv = styled.div`
  position: relative;

  /* Targeting the second Image component */
  & > :nth-child(2) {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 2; /* Adjusted z-index to be in front of the first image */
  }
`

export const PokeStatusDiv = styled.div`
  font-size: 64px;
  font-weight: bold;
  text-transform: capitalize;
  color: #f0f0f0;

  .pokeTypes {
    display: flex;
    gap: 16px;
  }
`
