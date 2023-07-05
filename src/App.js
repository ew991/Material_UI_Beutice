
import './App.css';
import ResponsiveAppBar from './component/nav';
import BasicStack from './component/mainSlider';
import ActionAreaCard from './component/coreServices';
import ActionAreaCard2 from './component/profsTeam';
import Aboutus from './component/Aboutus';
import Contactus from './component/contracus';
import Footerr from './component/Footerr';

import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
const theme = createTheme({
  typography: {
    fontFamily: 'Poppins', // Thay đổi thành font chữ mong muốn
  },
});

function App() {
  return (
    <div className="App font-[Poppins]">
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <ResponsiveAppBar />
        <BasicStack />
        <ActionAreaCard />
        <Aboutus />
        <ActionAreaCard2 />
        <Contactus />
        <Footerr />
      </ThemeProvider>

    </div>
  );
}

export default App;
