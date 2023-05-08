import {React, useState} from 'react'
import loginImg from "../assets/loginImg.png"
import {Link, useNavigate} from 'react-router-dom';
import axios from 'axios';
import {url} from '../api_url';
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const Login = () => {
    const [formData, setFormData] = useState({email: '', password: ''});
    const [errors, setErrors] = useState({});
    const navigate = useNavigate()
    const handleSubmit = async (event) => {
        event.preventDefault();
        const validationErrors = {};
        if (!formData.email) {
            validationErrors.email = 'Please enter your email';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            validationErrors.email = 'Please enter a valid email address';
        }
        if (!formData.password) {
            validationErrors.password = 'Please enter a password';
        } else if (formData.password.length < 6) {
            validationErrors.password = 'Password must be at least 6 characters long';
        }
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            
            return; 
        }


        try {
            const response = await axios.post(`${url}auth/login`, formData);
            localStorage.setItem('user', JSON.stringify(response.data));
            localStorage.setItem('token', response.data.token);
            if (response.data.success) {
                toast.success('You have logged in successfully', {position: toast.POSITION.TOP_RIGHT});
                setTimeout(() => {
                    navigate('/profile');
                }, 1000);
            } else 
                toast.error("Something Went Wrong !", { position: toast.POSITION.TOP_RIGHT });
            if (!formData.password || !formData.email) {
                validationErrors.password = "Email or Password Incorrect "
            }
    setErrors(validationErrors);
           
            


        } catch (error) {
            console.log(error.response.data);
           
                validationErrors.password = "Email or Password incorrect";
            
    setErrors(validationErrors);
  
            
        }
    };

    const handleInputChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };


    return (<div className='grid grid-cols-1 sm:grid-cols-2 h-screen w-full'>
        <div className='hidden sm:block'>
            <img className='w-full h-full object-cover'
                src={loginImg}
                alt=""></img>
        </div>

        <div className='bg-sky-50 flex flex-col justify-center'>
            <form className='max-w-[400px] w-full mx-auto bg-gray-900 p-8 px-8 rounded-lg'>

                <h2 className='text-4xl text-white font-bold text-center'>LOG IN</h2>
                <div className='flex flex-col text-gray-400 py-2'>
                    <label>User Name</label>
                    <input type="email" name="email"
                        value={
                            formData.email
                        }
                        className="rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none"
                        onChange={handleInputChange}
                        required/>{
                    errors.email && <p className="text-red-500"> {
                        errors.email
                    }</p>
                } </div>

                <div className='flex flex-col text-gray-400 py-2'>
                    <label>Password</label>
                    <input type='password' name='password' className='rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none'
                        value={
                            formData.password
                        }
                        onChange={handleInputChange}
                        required/>{
                    errors.password && <p className="text-red-500"> {
                        errors.password
                    } </p>
                } </div>

                <button className='w-full my-5 py-2 bg-sky-100 shadow-lg hover:shadow-emerald-500/50 text-black font-semibold rounded-lg'
                    onClick={handleSubmit}>

                    Login
                </button>


                <div className='text-gray-400 text-center'>
                    Sign Up
                    <Link to='/register' className='text-blue-500 hover:underline ml-2'>
                        Register
                    </Link>


                </div>

            </form>
        </div>
    </div>)
}

export default Login
