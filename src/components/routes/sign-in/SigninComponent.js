import { 
    signInWithGooglePopup, 
    createUserDocumentFromAuth } from "../../../utilities/firebase/FirebaseUtils"

const Signin = () => {
    const logGoogleUser = async() => {
        const {user} = await signInWithGooglePopup();
        // console.log(response)
        const userDocRef = await createUserDocumentFromAuth(user)
    };
    
     return (
        <div>
            <h1>Sign In Page</h1>            
            <button onClick={logGoogleUser}>Sign in with Google popup</button>
        </div>
    )
}

export default Signin;