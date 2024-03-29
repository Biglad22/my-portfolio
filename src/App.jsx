import './style/base.css';
import { Home } from './pages/Home';
import { Nav } from './components/navbar';
function App(){
    return(
        <>  
            <Nav />
            <Home />
        </>
    )
}

export default App