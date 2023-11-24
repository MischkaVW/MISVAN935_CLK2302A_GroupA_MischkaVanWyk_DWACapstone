import { useState } from 'react';
import './App.css'
import NavbarComponent from './Components/Navigation'
import MainContent from './MainC'
import Loggin from './Components/Loggin';
function Home() {
    return (
        <div className='Home'>
            <NavbarComponent />
            <MainContent />  
         </div>
    )
}

export default function App() {

    const [loggInHome, setLogInHome] = useState(null)

    function handleLoggin(){
        setLogInHome(true)
    }

    return (
        <div>
            {
                !loggInHome && 
                <Loggin
                    handleLoggin = {handleLoggin}

                 /> 
            }
            {
                loggInHome && <Home />
            }
        </div>
    )
}