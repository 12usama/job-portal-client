import React, { useContext } from 'react';
import Lottie from "lottie-react";
import loginLottie from '../../assets/Animation - 1746257335377.json';
import AuthContext from '../../Context/AuthContext/AuthContext';

const SignIn = () => {

    const {signInUser} = useContext(AuthContext)

    const handleSignIn = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        signInUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                alert("User logged in successfully");
            })
            .catch(error => {
                console.error("Error logging in:", error);
                alert(error.message);
            });
    
    }


    return (
        <div>
            <div>
                <div className="hero bg-base-200 min-h-screen">
                    <div className="hero-content flex-col lg:flex-row-reverse">
                        <div className="text-center lg:text-left w-96">
                            <Lottie animationData={loginLottie}></Lottie>
                        </div>
                        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                            <h1 className="ml-8 mt-4 text-5xl font-bold">Sign In now!</h1>
                            <div className="card-body">
                                <form onSubmit={handleSignIn}>
                                    <fieldset className="space-y-4">
                                        <label className="label">Email</label>
                                        <input type="email" name="email" className="input" placeholder="Email" />

                                        <label className="label">Password</label>
                                        <input type="password" name="password" className="input" placeholder="Password" />

                                        <div>
                                            <a className="link link-hover">Forgot password?</a>
                                        </div>

                                        <button type="submit" className="btn btn-neutral w-full mt-4 ">Sign In</button>
                                    </fieldset>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignIn;