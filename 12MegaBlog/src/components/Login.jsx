import React, { useState } from 'react'
import {Link, useNavigate} from 'react-router-dom'
import { login as authLogin } from '../store/authSlice'
import { Button, Input, Logo } from 'react-redux'
import { useDispatch } from 'react-redux'
import { authService } from '../appwrite/auth'
import { useForm } from 'react-hook-form'

function Login() {
  return (
    <div>
      
    </div>
  )
}

export default Login
