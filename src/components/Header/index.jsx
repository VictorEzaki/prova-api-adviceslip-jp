import { Link } from 'react-router-dom'
import './styles.css'

export default function Header (){
    return(
        <header id='header'>
            <h1 id='header-title'>Advice Slip</h1>

            <nav id='nav'>
                <Link to="/">Home</Link>
                <Link to="/ApiAdvices">API</Link>
                <Link to="/Collaborators">About</Link>
            </nav>
        </header>
    )
}