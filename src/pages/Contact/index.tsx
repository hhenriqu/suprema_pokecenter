'use client'
import * as React from 'react'
import { useForm } from 'react-hook-form'
import { StyledForm } from './style'

type FormData = {
  name: string
  email: string
  msg: string
}

export default function App() {
  const {
    register,
    setValue,
    handleSubmit,
    formState: { errors }
  } = useForm<FormData>()
  const onSubmit = handleSubmit(data => console.log(data))

  return (
    <StyledForm onSubmit={onSubmit}>
      <label>Name</label>
      <input {...register('name')} />
      <label>Best Email</label>
      <input {...register('email')} />
      <label>Message</label>
      <textarea {...register('msg')} />
      <button type="submit">enviar</button>
    </StyledForm>
  )
}
