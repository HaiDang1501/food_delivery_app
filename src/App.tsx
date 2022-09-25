import './App.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Header from './components/Header';
import Intro from './components/Intro';
import Content from './components/Content';
import Download from './components/Download';
import Footer from './components/Footer';

function App() {
  AOS.init();
  return (
    <div className="App">
      <Header />
      <Intro />
      <Content />
      <Download />
      <Footer />
    </div>
  );
}

export default App;
