import React, { useContext } from 'react';
import AuthContext from '../../../Context/AuthContext/AuthContext';
import { useNavigate } from 'react-router-dom'; 
import google from '../../../assets/icons/google.png';

const SocialLogIn = () => {
    // const { signInWithGoogle } = useContext(AuthContext);
    const {signInWithGoogle}=useContext(AuthContext);
    const navigate = useNavigate(); 

    const handleGoogleSignIn = () => {
        signInWithGoogle()
            .then(result => {
                const user = result.user;
                console.log(user);
                navigate('/');
            })
            .catch(error => {
                console.error('Error signing in with Google:', error);
            });
    }

    return (
        <div className='w-full'>
            <div className="divider">OR</div>
            <button onClick={handleGoogleSignIn} className='btn w-full'>
                <div className='flex gap-1 '>
                <img className='h-5' src={google} alt="" />
                <p>Google</p>
                </div></button>
        </div>
    );
};

export default SocialLogIn;