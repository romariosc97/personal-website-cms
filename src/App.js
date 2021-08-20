import React, { useContext } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import { Box, Text } from "@chakra-ui/react";
import Home from './views/Home';
import Certification from './views/Certification';
import CertificationNew from './views/CertificationNew';
import Portfolio from './views/Portfolio';
import PortfolioNew from './views/PortfolioNew';

import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';

import './assets/css/Main.css';

import { GlobalContext } from './context/GlobalContext';

function App() {
  const { darkMode } = useContext(GlobalContext);
  return (
    <Router>
      <Box className={darkMode ? 'dark-mode' : ''} w="100%" display="flex" flexDirection="rows">
        <Box w="17.5%" borderBottomWidth="1px" borderColor={darkMode ? '#1089FF' : ''}>
          <Box w="100%" p={4} borderBottomWidth="1px" justifyContent="center" alignItems="center" display="flex" height="75px"
            borderRightWidth="1px"
            transition="0.2s all ease-in-out" backgroundColor={darkMode ? '#1089FF' : ''}  borderColor={darkMode ? '#1089FF' : ''}
          >
            <Text transition="0.2s all ease-in-out" fontSize="xl" fontWeight="700" 
              color={darkMode ? '#F9F7F7' : '#112D4E'}
            >
              ROMARIO CMS
            </Text>
          </Box>
          <Sidebar />
        </Box>
        <Box w="82.5%" borderBottomWidth="1px">
          <Navbar />
          <Box w="100%" p={8} minH="700px" backgroundColor="#F9F7F7" color="#112D4E">
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route exact path="/certification">
                <Certification />
              </Route>
              <Route exact path="/certification/new">
                <CertificationNew />
              </Route>
              <Route exact path="/portfolio">
                <Portfolio />
              </Route>
              <Route exact path="/portfolio/new">
                <PortfolioNew />
              </Route>
            </Switch>
          </Box>
        </Box>
      </Box>
    </Router>
  );
}

export default App;