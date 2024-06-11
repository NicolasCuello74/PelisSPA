import React from 'react'
import { Button } from 'react-bootstrap'
import './Button.css'

const CustomButton = ({ onClick, variant, children }) => {
  return (
    <Button className="favourite-btn" onClick={onClick} variant={variant}>
      {children}
    </Button>
  )
}

export default CustomButton
