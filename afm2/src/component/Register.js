import React, {useState} from 'react'
import {InputGroup, InputGroupAddon, Input, Button} from 'reactstrap';





const Register = () => {
    const [signUp, setSignUp] = useState({
     username: "", 
     password: "" 
    });

    

    //   const postRegister = (log) =>{
    //       axiosWithAuth()
    //       .post('/auth/register', log)
    //       .then(success => {
    //           // setRegister([...register, success.data]) 
    //         // debugger
    //         console.log(success, 'are we getting data?????????')
    //       })
    //       .catch(error => {
           
    //         // console.log(error, 'Is it Error??????')
    //       })
    //   }

    //   const onSubmit = (evt) => {
    //     evt.preventDefault()
    
    //     const newRegister = {
    //       username: signUp.username,
    //       password: signUp.password,
          
         
    //     }
    //       //this post new user to API
    //     //  setUsers([...users, newRegister]) 
    //     postRegister(newRegister)
    //     setSignUp()
        
    //   }



    return (
        <div>
        {/* <form>
            <InputGroup>
        
                <Input />
             </InputGroup>
      <InputGroup>
        
                <Input />
            </InputGroup>
        </form> */}

        </div>


    )
}

export default Register
