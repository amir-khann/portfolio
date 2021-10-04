
import About from './Components/About';
import Capabilities from './Components/Capabilities';
import Client from './Components/Client';
import Footer from './Components/Footer';
import Form from './Components/Form';
import HeroWrapper from './Components/HeroWrapper';

import Navbar from './Components/Navbar';
import Portfolio from './Components/Portfolio';

function App() {
  return (
    <div className="App">
     <HeroWrapper />
     <About />
     <Portfolio />
     <Capabilities />
     <Client />
     <Form />
     <Footer />
    </div>
  );
}

export default App;
