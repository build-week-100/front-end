import React, {useState} from 'react'
import axiosWithAuth from '../axiosWithAxios/axiosWithAxios'
import { useHistory } from 'react-router-dom'
import {InputGroup, Input, Button,} from 'reactstrap';


const Login = () => {
    const history= useHistory()
   
    const [credentials, setCredentials] = useState({
      username:'BusiaMarket',
      password:'password'
    })
   
  const handleChange = (e) => { 
      setCredentials({
        ...credentials,
        [e.target.name]: e.target.value,
      })
    }
      
  
  const login = e => {
    e.preventDefault()
  
    axiosWithAuth()
    .post('/auth/login', credentials)
    .then(res => {
      // console.log(res)
      //res.data.payload
      localStorage.setItem('token', res.data.token)
      history.push("/protected")
    })
    .catch(err => console.log(err))
    setCredentials({
      username:'',
      password:''
    })
  }






    return (
        <div>
         
        <form onSubmit={login}>
            <InputGroup>
        <Input
            type='text'
            name='username'
            value={credentials.username}
            onChange={handleChange}
            placeholder="username"
         />
      </InputGroup>
      <InputGroup>
        <Input
        type='text'
        name='password'
        value={credentials.password}
        onChange={handleChange}
        placeholder='password'
        />
      </InputGroup> 
      <Button outline color="primary">primary</Button>
        </form>
        </div>
    )
}

export default Login
