import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import { Box } from "@chakra-ui/react";
import Home from './views/Home';
import Certification from './views/Certification';
import Portfolio from './views/Portfolio';

import Sidebar from './components/Sidebar';

import './assets/css/Main.css';

function App() {
  return (
    <Router>
      <Box w="100%" display="flex" flexDirection="rows">
        <Box w="17.5%" borderBottomWidth="1px" borderRightWidth="1px">
          <Sidebar />
        </Box>
        <Box w="82.5%" borderBottomWidth="1px">
          <Box w="100%" p={4} borderBottomWidth="1px">
              Menu de navegacion
          </Box>
          <Box w="100%" p={4}>
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route exact path="/certification">
                <Certification />
              </Route>
              <Route exact path="/portfolio">
                <Portfolio />
              </Route>
            </Switch>
          </Box>
        </Box>
      </Box>
    </Router>
  );
}

export default App;