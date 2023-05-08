import Login from './pages/Login';
import Register from './pages/Register';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Profile from './pages/Profile';
import Error from './pages/Error';
function App() {
    return (

        <Router>
            <Routes>
                <Route path='/'
                            element={<Login />} />
                        
                <Route path='/register'
                    element={<Register/>}/>
               
                <Route path='/profile'
                    element={<Profile/>}/>

<Route path='/error'
                    element={<Error/>}/>

            </Routes>
        </Router>


    );
}

export default App;
