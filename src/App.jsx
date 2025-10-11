import {Route, BrowserRouter as Router, Routes} from 'react-router-dom';
import { Home, About, Projects, Contact, Blog } from './pages';
import Navbar from './components/Navbar';

const App = () => {
    return (
        <main className="bg-slate-300/20 h-full">
            <Router>
                <Navbar/>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />}/>
                    <Route path="/project" element={<Projects />}/>
                    <Route path="/blog" element={<Blog />}/>
                    <Route path="/contact" element={<Contact />}/> 
                </Routes>
            </Router>
        </main>
    )
}

export default App