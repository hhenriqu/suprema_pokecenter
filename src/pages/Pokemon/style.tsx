import styled from 'styled-components'

export const PokemonDetailSection = styled.section`
  width: 100%;
  margin: 0 auto;

  .pokeWrapper {
    max-width: 1024px;
    background: #cc0000;
    margin: 0 auto;
    border: 1px solid #000000;
    border-radius: 50px;
  }

  .TitleCard {
    width: 100%;
    height: 3rem;
    display: flex;
    align-items: center;
    border-bottom: 1px solid #f0f0f0;
  }

  .idTitle {
    width: 15rem;
    height: 2rem;

    background: #ffde00;
  }

  .DetailCard {
    display: flex;
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
