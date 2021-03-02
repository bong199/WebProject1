import React, {useState} from 'react'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import {withStyles} from '@material-ui/core/styles'
import axios from 'axios'


const StyledButton = withStyles({
    root: {
      boxShadow: 'none',
      textTransform: 'none',
      fontSize: 16,
      padding: '6px 12px',
      border: '1px solid',
      lineHeight: 1.5,
      backgroundColor: '#0063cc',
      borderColor: '#0063cc',
      fontFamily: [
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
      ].join(','),
      '&:hover': {
        backgroundColor: '#0069d9',
        borderColor: '#0062cc',
        boxShadow: 'none',
      },
    },
  })(Button);

function SignUpPage({ history }){
    const [signUpInfo, setSignUpInfo] = useState({
        username: '',
        password: '',
        fullName: '',
        email: '',
    })
    const updateUsername = (event) =>{
        console.log(event.target.value)
        const temp = signUpInfo
        temp.username = event.target.value
        setSignUpInfo(temp)
        console.log(signUpInfo)
    }
    const updatePassword = (event) =>{
        const temp = signUpInfo
        temp.password = event.target.value
        setSignUpInfo(temp)
        console.log(signUpInfo)
    }
    const updateFullName = (event) =>{
        const temp = signUpInfo
        temp.fullName = event.target.value
        setSignUpInfo(temp)
        console.log(signUpInfo)
    }
    const updateEmail = (event) =>{
        const temp = signUpInfo
        temp.email = event.target.value
        setSignUpInfo(temp)
        console.log(signUpInfo)
    }
    const submitInfo = () => {
        const registered = {
            fullName: signUpInfo.fullName,
            username: signUpInfo.username,
            email: signUpInfo.email,
            password: signUpInfo.password
        }

        axios.post('http://localhost:4000/app/signup', registered)
        .then(response => console.log(response.data))

        history.push('/signin')
    }
    return (
        <div>
            <h2>회원가입 페이지</h2>
            <h4>Username</h4>
            <div>
                <TextField id='outlined-size-normal' variant='outlined' onChange={updateUsername}></TextField>
            </div>
            <h4>Password</h4>
            <div>
                <TextField id='outlined-size-normal' variant='outlined' onChange={updatePassword}></TextField>
            </div>
            <h4>Name</h4>
            <div>
                <TextField id='outlined-size-normal' variant='outlined' onChange={updateFullName}></TextField>
            </div>
            <h4>Email</h4>
            <div>
                <TextField id='outlined-size-normal' variant='outlined' onChange={updateEmail}></TextField>
            </div>
            <div>
                <StyledButton variant='contained' color='primary' disableElevation disableRipple onClick={submitInfo}>Submit</StyledButton>
            </div>
        </div>
    )
}

export default SignUpPage;