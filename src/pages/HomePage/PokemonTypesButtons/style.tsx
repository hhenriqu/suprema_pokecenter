import styled from 'styled-components'

export const StyledWrapper = styled.div`
  max-width: 1024px;
  margin: 16px auto;
`

export const StyledList = styled.ul`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 0.5rem;
  list-style-type: none;
  margin: 16px;
`

export const StyledButton = styled.button`
  width: 7rem;
  height: 1.5rem;
  border: none;
  border-radius: 15px;
  background-color: #b3a125;

  text-transform: capitalize;
  font-size: 16px;
  font-weight: bold;
`
export const StyledListPokemons = styled.li`
  width: 7rem;
  height: 1.5rem;
  padding: 0.2rem;
  border: none;
  border-radius: 15px;
  background-color: #ff0000;

  text-transform: capitalize;
  font-size: 16px;
  font-weight: bold;
  color: #f0f0f0;
  text-align: center;
`
