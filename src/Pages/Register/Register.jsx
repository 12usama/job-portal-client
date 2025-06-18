import React, { useContext } from 'react';
import Lottie from "lottie-react";
import registerLottie from "../../assets/Animation - 1746127171883.json";
import AuthContext from '../../Context/AuthContext/AuthContext';
import SocialLogIn from '../Home/Shared/SocialLogIn';
import { useNavigate } from 'react-router-dom';


const Register = () => {

    const {createUser} = useContext(AuthContext);

    const navigate = useNavigate();

    const handleRegister = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        const passwordRegex = /^(?=.*[A-Z]).{6,}$/;

        if (!passwordRegex.test(password)) {
            alert("Password must be at least 6 characters and include at least one uppercase letter.");
            return;
        }
        console.log("Email:", email);
        console.log("Password:", password);

        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                alert("User created successfully");
                navigate('/');
            })
            .catch(error => {
                console.error("Error creating user:", error);
                alert(error.message);
            });
    }

    return (
        <div>
            <div className="hero bg-base-200 min-h-screen">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left w-96">
                        <Lottie animationData={registerLottie}></Lottie>
                    </div>
                    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                        <h1 className="ml-8 mt-4 text-5xl font-bold">Register now!</h1>
                        <div className="card-body">
                            <form onSubmit={handleRegister}>
                                <fieldset className="space-y-4">
                                    <label className="label">Email</label>
                                    <input type="email" name="email" className="input" placeholder="Email" />

                                    <label className="label">Password</label>
                                    <input type="password" name="password" className="input" placeholder="Password" />

                                    <div>
                                        <a className="link link-hover">Forgot password?</a>
                                    </div>

                                    <button type="submit" className="btn btn-neutral w-full mt-4 ">Register</button>
                                </fieldset>
                            </form>
                            <SocialLogIn></SocialLogIn>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;