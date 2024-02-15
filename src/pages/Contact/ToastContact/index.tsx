import React, { useState, useEffect } from 'react'
import { ToastContainer } from './style'

type Props = {
  message: string
}

const ToastContact = ({ message }: Props) => {
  return <ToastContainer>{message}</ToastContainer>
}

export default ToastContact
