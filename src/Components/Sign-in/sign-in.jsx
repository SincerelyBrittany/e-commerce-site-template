import {
    signInWithGooglePopup
  } from '../../utils/firebase/firebase'

const SignIn = () => {
    const logGoogleUser = async () => {
        const response = await signInWithGooglePopup()
        console.log(response)
    }
    return(
<div>
    <h1> Sign in </h1>
    <button onClick={logGoogleUser}> Click here to sign in </button>
</div>
    )
}

export default SignIn