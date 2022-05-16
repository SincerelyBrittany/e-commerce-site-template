
import { useEffect } from 'react'
import { getRedirectResult } from "firebase/auth";
import {
    signInWithGooglePopup, signInWithGoogleRedirect, createUserDocumentFromAuth
  } from '../../utils/firebase/firebase'


const SignIn = () => {
    const logGoogleUser = async () => {
        // const response = await signInWithGooglePopup()
        // console.log(response)
        // createUserDocumentFromAuth(response)
        const {user} = await signInWithGooglePopup()
        const userDocRef = await createUserDocumentFromAuth(user)
    }

    const logInWithGoogleRedirectUser = async () => {
            const {user} = await signInWithGoogleRedirect()
            console.log({user})
        }
    return(
<div>
    <h1> Sign in </h1>
    <button onClick={logGoogleUser}> Click here to sign in with Google </button>
    <button onClick={logInWithGoogleRedirectUser}> Click here to sign in with Google Reirect </button>
</div>
    )
}

export default SignIn