import styled from "styled-components";

export const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin: 8px;
`;

export const SearchInput = styled.input`
  border: none;
  outline: none;
  flex: 1;
  height: 36px;
  padding: 8px;
`;

export const SearchButton = styled.button`
  background-color: #CC0000;
  color: #F0F0F0;
  border: none;
  border-radius: 0 5px 5px 0;
  padding: 5px 10px;
  height: 36px;
  cursor: pointer;
`;