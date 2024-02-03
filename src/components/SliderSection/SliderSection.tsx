'use client'
import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';

// Dados dos Pokémon (exemplo)
const imageCover = [
 '/assets/wallpaper.jpg',
  // Adicione mais Pokémon conforme necessário
];

// Componente do slide
const SlideContainer = styled.div`
  display: flex;
  overflow-x: auto;
`;

// Componente do card
const Card = styled.div`
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin: 0 10px;
  padding: 20px;
  width: 200px;
`;

// Componente de item de Pokémon
const PokemonItem = ({ name, power, race, element }) => (
  <Card>
    <h3>{name}</h3>
    <p>Power: {power}</p>
    <p>Race: {race}</p>
    <p>Element: {element}</p>
  </Card>
);

// Componente principal
const PokemonSlide = () => (
  <SlideContainer>
    {imageCover.map((image, index) => (
     <Image key={index} src={image} alt="wallpaper" width={1366} height={500}/>
    ))}
  </SlideContainer>
);

export default PokemonSlide;
