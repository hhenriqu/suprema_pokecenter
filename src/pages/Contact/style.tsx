import styled from 'styled-components'

export const StyledForm = styled.form`
  max-width: 350px;
  display: flex;
  flex-direction: column;
  gap: 8px;

  padding: 24px;

  border-radius: 24px;
  background-color: #CC0000;
  margin: 96px auto;

  color: #F0F0F0;

  input {
    padding: 4px;
  }

  textarea {
    height: 150px;
    padding: 4px;
    resize: none;
  }
`
