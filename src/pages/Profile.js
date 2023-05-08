import React, {useEffect, useState} from 'react';
import axios from 'axios';
import images from '../assets/images.png';
import {url} from '../api_url';
import {Link,useNavigate} from 'react-router-dom';


const Profile = () => {
    const [user, setUser] = useState();
    const [token, setToken] = useState(localStorage.getItem('token'));
    const history = useNavigate();
    const getUser = async () => {
        try {

            const response = await axios.get(`${url}auth/user`, {
                headers: {
                    Authorization: "Bearer " + token
                }
            });
            if (response) {
                setUser(response.data.user);
            }
            else {
                if (!response) {
        history("/error");
    }
            }
        } catch (error) {
            console.log(error.response.data);
        }
    };
    useEffect(() => {
        if (!token) {
      history('/404');
      return;
    }
        getUser();
        
  
    }, []);

   
const handleSignOut = () => {
        localStorage.removeItem('token');
        history('/');
    };
    return (<div className="grid grid-cols-1 sm:grid-cols-2 h-screen w-full">
        <div className="hidden sm:block">
            <img className="w-full h-full object-cover"
                src={images}
                alt=""/>
        </div>

        <div className="bg-sky-50 flex flex-col justify-center">
            <form className="max-w-[400px] w-full mx-auto bg-gray-900 p-8 px-8 rounded-lg">
                <h2 className="text-4xl text-white font-bold text-center">Profile</h2>
                <div className="flex flex-col text-gray-400 py-2">
                    <label>First Name</label>
                    <input type="text" className="rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none"
                        value={
                            user ?. first_name
                        }/>
                </div>
                <div className="flex flex-col text-gray-400 py-2">
                    <label>Last Name</label>
                    <input type="text" className="rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none"
                        value={
                            user ?. last_name
                        }/>
                </div>

                <div className="flex flex-col text-gray-400 py-2">
                    <label>User Name</label>
                    <input type="email" className="rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none"
                        value={
                            user ?. email
                        }/>
                </div>

                <button className="w-full my-5 py-2 bg-sky-100 shadow-lg hover:shadow-emerald-500/50 text-black font-semibold rounded-lg" onClick={handleSignOut}>
                    Sign Out
<Link to='/' className='text-blue-500 hover:underline ml-2'></Link>

                </button>
            </form>
        </div>
    </div>);
};

export default Profile;
