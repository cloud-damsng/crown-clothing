
import { 
            signInWithGooglePopup,
          
            createUserDocumentFromAuth 
        } from "../../utils/firebase/firebase.utils";
import SignUpForm from "../../components/sign-up-form/sign-up-form.component";
import Button from "../../components/button/button.component";

const Authentication = ()=> {
    const logGoogleUser = async() => {
        const {user} = await signInWithGooglePopup();
        const userDocRef = await createUserDocumentFromAuth(user);
    
    
    };
    
    return (
        <div>
        <Button  buttonType= 'google' onClick={logGoogleUser}>
        Sign in with Gmail
        </Button>
        <SignUpForm/>
       </div>

       

    );
    
};

export default Authentication;