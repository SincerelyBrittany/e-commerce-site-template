// import { useEffect } from 'react'
// import { getRedirectResult } from "firebase/auth";
import {
    // auth, 
    signInWithGooglePopup, 
    // signInWithGoogleRedirect, 
    createUserDocumentFromAuth
  } from '../../utils/firebase/firebase'


const SignIn = () => {
    // useEffect(async()=> {
    //    const response = await getRedirectResult(auth)
    //    if(response){
    //     const userDocRef = await createUserDocumentFromAuth(response.user)
    //    }
    // },[])
    const logGoogleUser = async () => {
        const {user} = await signInWithGooglePopup()
        const userDocRef = await createUserDocumentFromAuth(user)
    }
    return(
<div>
    <h1> Sign in </h1>
    <button onClick={logGoogleUser}> Click here to sign in with Google </button>
    {/* <button onClick={signInWithGoogleRedirect}> Click here to sign in with Google Reirect </button> */}
</div>
    )
}

export default SignIn