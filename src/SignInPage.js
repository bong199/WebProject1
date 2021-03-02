import React, { useState } from 'react'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import {withStyles} from '@material-ui/core/styles'

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

function SignInPage({ history }) {
    const goSignUp = () => {
        console.log(history);
        history.push('/signup')
    }

    return (
        <div>
            <h2>로그인 페이지</h2>
            <div>
                <TextField id='outlined-size-normal' variant='outlined' placeholder='Username'></TextField>
            </div>
            <div>
                <TextField id='outlined-size-normal' variant='outlined' placeholder='Password'></TextField>
            </div>
            <div>
                <StyledButton variant='contained' color='primary' disableElevation disableRipple>Sign In</StyledButton>
            </div>
            <div>
                <StyledButton variant='contained' color='primary' disableElevation disableRipple onClick={goSignUp}>Sign Up</StyledButton>
            </div>
        </div>
    )
}

export default SignInPage;