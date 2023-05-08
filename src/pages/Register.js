import React, {useState} from 'react';
import {Link, useNavigate} from 'react-router-dom';
import axios from 'axios';
import {url} from '../api_url';
import register from '../assets/register.png';
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';


const Register = () => {
    const [formData, setFormData] = useState({
        first_name: '',
        last_name: '',
        email: '',
        password: '',
        company: {
            name: ''
        }
    });
    const [errors, setErrors] = useState({});
    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();

        const validationErrors = {};

        if (!formData.first_name) {
            validationErrors.first_name = 'Please enter your first name';
        }

        if (!formData.last_name) {
            validationErrors.last_name = 'Please enter your last name';
        }

        if (!formData.email) {
            validationErrors.email = 'Please enter your email';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            validationErrors.email = 'Please enter a valid email address';
        }

        if (!formData.confirmEmail) {
            validationErrors.confirmEmail = 'Please confirm your email';
        } else if (formData.email !== formData.confirmEmail) {
            validationErrors.confirmEmail = 'Emails do not match';
        }

        if (!formData.password) {
            validationErrors.password = 'Please enter a password';
        } else if (formData.password.length < 6) {
            validationErrors.password = 'Password must be at least 6 characters long';
        }

        if (!formData.confirmPassword) {
            validationErrors.confirmPassword = 'Please confirm your password';
        } else if (formData.password !== formData.confirmPassword) {
            validationErrors.confirmPassword = 'Passwords do not match';
        }

        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return; 
        }

        try {
            const response = await axios.post(`${url}auth/signup`, formData);
            console.log(response.data);
            localStorage.setItem('user', JSON.stringify(response.data));
            localStorage.setItem('token', response.data.token);
            if (response.data.success) {
                toast.success('Account created successfully!', {position: toast.POSITION.TOP_RIGHT});
                setTimeout(() => {
                    navigate('/');
                }, 1000);
            } else 
                toast.error("Something Went Wrong !", {position: toast.POSITION.TOP_RIGHT});
            


        } catch (error) {
            console.log(error.response.data);

        }
    };
    const handleInputChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        if (name === "name") {
            setFormData((prevState) => ({
                ...prevState,
                company: {
                    ...prevState.company,
                    name: value
                }
            }));
        } else {
            setFormData((prevState) => ({
                ...prevState,
                [name]: value
            }));
        }
    };

    return (<div className="grid grid-cols-1 sm:grid-cols-2 h-screen w-full">
        <div className="hidden sm:block">
            <img className="w-full h-full object-cover"
                src={register}
                alt=""></img>
        </div>

        <div className="bg-sky-50 flex flex-col justify-center">
            <form className="max-w-[400px] w-full mx-auto bg-gray-900 p-8 px-8 rounded-lg"
                onSubmit={handleSubmit}>
                <h2 className="text-4xl text-white font-bold text-center">
                    Register
                </h2>
                <div className="flex flex-col text-gray-400 py-2">
                    <label>First Name</label>
                    <input type="text" name="first_name"
                        value={
                            formData.first_name
                        }
                        className="rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none"
                        onChange={handleInputChange}
                        required/> {
                    errors.first_name && (<p className="text-red-500"> {
                        errors.first_name
                    }</p>)
                } </div>
                <div className="flex flex-col text-gray-400 py-2">
                    <label>Last Name</label>
                    <input type="text" name="last_name"
                        value={
                            formData.last_name
                        }
                        className="rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none"
                        onChange={handleInputChange}
                        required/> {
                    errors.last_name && (<p className="text-red-500"> {
                        errors.last_name
                    }</p>)
                } </div>

                <div className="flex flex-col text-gray-400 py-2">
                    <label>Email</label>
                    <input type="email" name="email"
                        value={
                            formData.email
                        }
                        className="rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none"
                        onChange={handleInputChange}
                        required/> {
                    errors.email && (<p className="text-red-500"> {
                        errors.email
                    }</p>)
                } </div>

                <div className="flex flex-col text-gray-400 py-2">
                    <label>Confirm Email</label>
                    <input type="email" name="confirmEmail"
                        value={
                            formData.confirmEmail
                        }
                        className="rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none"
                        onChange={handleInputChange}
                        required/> {
                    errors.confirmEmail && (<p className="text-red-500"> {
                        errors.confirmEmail
                    }</p>)
                } </div>

                <div className="flex flex-col text-gray-400 py-2">
                    <label>Password</label>
                    <input type="password" name="password"
                        value={
                            formData.password
                        }
                        className="rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none"
                        onChange={handleInputChange}
                        required/> {
                    errors.password && (<p className="text-red-500"> {
                        errors.password
                    }</p>)
                } </div>

                <div className="flex flex-col text-gray-400 py-2">
                    <label>Confirm Password</label>
                    <input type="password" name="confirmPassword"
                        value={
                            formData.confirmPassword
                        }
                        className="rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none"
                        onChange={handleInputChange}
                        required/> {
                    errors.confirmPassword && (<p className="text-red-500"> {
                        errors.confirmPassword
                    }</p>)
                } </div>

                <div className="flex flex-col text-gray-400 py-2">
                    <label>Company</label>
                    <input type="company" name="company"
                        value={
                            formData.company.name
                        }
                        className="rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none"
                        onChange={
                            (e) => setFormData({
                                ...formData,
                                company: {
                                    name: e.target.value
                                }
                            })
                        }
                        required/>  </div>

                <button className='w-full my-5 py-2 bg-sky-100 shadow-lg hover:shadow-emerald-500/50 text-black font-semibold rounded-lg'>
                    Register
                </button>


                <p className="text-gray-400 text-center pt-4">
                    Already have an account?{' '}
                    <Link to="/" className="text-blue-500">
                        Log in
                    </Link>
                </p>
            </form>
        </div>
    </div>);
};
export default Register;
