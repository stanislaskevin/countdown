import './App.css';
import React, {useEffect, useState} from 'react'
import Countdown from './components/Countdown';
import ParticlesBg from 'particles-bg'

function App() {
  const [email, setEmail] = useState('');
  console.log(email)

  return (
    <div className="App">
      <ParticlesBg type="cobweb" bg={true} />
        <section>
          <Countdown/> 
          <form>
            <p>DIZALTY arrive bienôt... Inscrivez-vous dès à présent</p>
            <input placeholder="Entrer votre email" type="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
            <button type="submit">S'inscrire</button>
          </form>
          <div className="link_social">
            <a  href='/'>F</a>
            <a  href='/'>T</a>
            <a  href='/'>I</a>
            <a  href='/'>L</a>
          </div>
          <div>
            <span>contactez-nous</span>
          </div>  
        </section>
    </div>
  );
}

export default App;
