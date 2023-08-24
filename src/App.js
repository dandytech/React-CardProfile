import './index.css';
import Passport from './components/layouts/Passport';
import Decription from './components/layouts/Decription';
import Skills from './components/layouts/Skills';



function App() {
  
  return (
    <div className='container'>
      <Passport/>
      <Decription/>
      <Skills/>
    </div>
  );
}
export default App
