
import { Button, Hidden, Stack, ThemeProvider, Tooltip, createTheme } from '@mui/material';
import './App.css';
import { AllPanels } from './components/allPanels/AllPanels';
import { MainScreen } from './components/mainScreen/MainScreen';
import { useEffect, useState } from 'react';
import { Header } from './components/header/Header';
import fun_button from './images/Fun_button.png';
import serious_button from './images/Serious_button.png';
import { FUN_BUTTON, SERIOUS_BUTTON } from './Constants';
import { Popup } from './components/popup/Popup';
import { PDFButton } from './components/pdf/PDFButton';
import { GeneratePDF } from './components/pdf/GeneratePDF';


const funTheme = createTheme({
  typography: {
    htmlFontSize: 12,
    fontFamily: [
      'Chilanka',
      'cursive',
    ].join(','),
  },
  components: {
    MuiStack: {
      styleOverrides: {
        root: {
          fontSize: 21,
          fontFamily: 'Chilanka, cursive',
        },
      },
    },
  },
});

const funHeaderTheme = createTheme({
  typography: {
    htmlFontSize: 10,
    fontFamily: [
      "Butterfly Kids",
      'cursive',
    ].join(','),
  },
});

function App() {
  useEffect(() => {
    document.title = "Country Guru"; // Set the tab title
  }, []);
  const [visibleMainScreen, setVisibleMainScreen] = useState(true);
  const [selectedButton, setSelectedButton] = useState('');
  const [open, setOpen] = useState(false);
  const [background, setBackground] = useState('');

  const openPopup = () => {
    setOpen(true);
  }
  const closePopup = () => {
    setOpen(false);
  }

  const seriousButtonClick = () => {
    setVisibleMainScreen(false);
    setSelectedButton(SERIOUS_BUTTON);
    setOpen(false);
    setBackground('#f0f0f0');
  }
  const funButtonClick = () => {
    setVisibleMainScreen(false);
    setSelectedButton(FUN_BUTTON);
    setOpen(false);
    // setBackground('linear-gradient(135deg, #FF69B4, #87CEEB)'); //for some reason doesnt work
    setBackground('#e0e8f6');
  }
  const handleGeneratePDFClick = async () => {
    await GeneratePDF();
  }
  return (
    <>
      <Stack direction={{ xs: 'column', sm: 'row' }} alignItems='center'
        justifyContent={{ xs: 'center', sm: 'space-between' }}
      >
        {selectedButton !== FUN_BUTTON ?
          <Header selectedButton={selectedButton} /> :
          <ThemeProvider theme={funHeaderTheme}><Header selectedButton={selectedButton} /></ThemeProvider>
        }
        {selectedButton &&
          <Hidden smDown>
            <PDFButton onClick={handleGeneratePDFClick} />
          </Hidden>
        }

        {selectedButton === FUN_BUTTON &&
          <ThemeProvider theme={funTheme}>
            <Tooltip title={SERIOUS_BUTTON} placement="bottom-start">
              <Button
                endIcon={<img src={serious_button} alt="switch-button" style={{ height: '30px' }} />}
                // onClick={seriousButtonClick}
                onClick={openPopup}
              />
            </Tooltip>
            <Popup selectedButton={selectedButton} open={open} closePopup={closePopup} seriousButtonClick={seriousButtonClick} funButtonClick={funButtonClick} />
          </ThemeProvider>}
        {selectedButton === SERIOUS_BUTTON &&
          <>
            <Tooltip title={FUN_BUTTON} placement="bottom-start">
              <Button
                endIcon={<img src={fun_button} alt="switch-button" style={{ height: '30px' }} />}
                // onClick={funButtonClick}
                onClick={openPopup}
              />
            </Tooltip>
            <Popup selectedButton={selectedButton} open={open} closePopup={closePopup} seriousButtonClick={seriousButtonClick} funButtonClick={funButtonClick} />
          </>
        }
      </Stack>


      {visibleMainScreen &&
        <Stack className="background_image">
          <MainScreen
            seriousButtonClick={seriousButtonClick}
            funButtonClick={funButtonClick} />
        </Stack>}
      {selectedButton === SERIOUS_BUTTON && (
        <AllPanels selectedButton={selectedButton} background={background} />
      )}
      {selectedButton === FUN_BUTTON && (
        <ThemeProvider theme={funTheme} >
          <AllPanels selectedButton={selectedButton} background={background} />
        </ThemeProvider>)}
    </>
  );
}
export default App;
