import logo from './logo.svg';
import './App.css';
import ResponsiveAppBar from './component/nav';
import BasicStack from './component/mainSlider';
import ActionAreaCard from './component/coreServices';
import ActionAreaCard2 from './component/profsTeam';
import Aboutus from './component/Aboutus';
import Contactus from './component/contracus';
import Footer from './component/footer';
function App() {
  return (
    <div className="App">
      <ResponsiveAppBar />
      {/* <BasicStack />
      <ActionAreaCard />
      <Aboutus />
      <ActionAreaCard2 />
      <Contactus /> */}
      <Footer />
    </div>
  );
}

export default App;
