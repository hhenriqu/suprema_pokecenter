'use client'
import * as React from 'react'
import { useForm } from 'react-hook-form'
import { StyledForm } from './style'
import { useEffect, useState } from 'react'
import ToastContact from './ToastContact'

type FormData = {
  name: string
  email: string
  msg: string
}

export default function App() {
  const [message, setMessage] = useState<string>('')
  const [isVisible, setIsVisible] = useState(false)
  const {
    register,
    setValue,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm<FormData>()

  const onSubmit = async () => {
    try {
      await new Promise(resolve => setTimeout(resolve, 2000))

      setMessage('Formulário enviado com sucesso!')
      setIsVisible(true)
      ShowToast()

      reset()
    } catch (error) {
      setMessage(
        'Ocorreu um erro ao enviar o formulário. Tente novamente mais tarde.'
      )
      setIsVisible(true)
      ShowToast()
    }
  }

  function ShowToast() {
    const timer = setTimeout(() => {
      setIsVisible(false)
    }, 2000)

    return () => clearTimeout(timer)
  }

  return (
    <>
      <StyledForm onSubmit={handleSubmit(onSubmit)}>
        <label>Name</label>
        <input {...register('name')} />
        <label>Best Email</label>
        <input {...register('email')} />
        <label>Message</label>
        <textarea {...register('msg')} />
        <button type="submit">enviar</button>
      </StyledForm>
      {isVisible && <ToastContact message={message} />}
    </>
  )
}
