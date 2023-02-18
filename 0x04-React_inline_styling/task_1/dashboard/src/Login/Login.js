import React from 'react';
import { StyleSheet, css } from 'aphrodite'

const Login = () => {
  return (
    <>
        <div className={css(LoginStyle.AppBody)}>
            <p>Login to access the full dashboard</p>
            <form>
            <label htmlFor='email' >Email</label>
            <input type="email" id='email' />
            <label htmlFor='password' >Password</label>
            <input type="password" id='password' />
            <button type='submit'>OK</button>
            </form>
        </div>
    </>
  )
}

const LoginStyle = StyleSheet.create({
  AppBody: {
    height: '100%',
    padding: '40px',
    fontSize: '24px',
}
})

export default Login