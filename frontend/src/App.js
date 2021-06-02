import React from 'react';
import {
  ChakraProvider,
  extendTheme ,
} from '@chakra-ui/react';

import  Home  from './components/Home/Home';
import CustomStack from './components/CustomStack/CustomStack';


const colors = {
  brand: {
     900: "#1a365d",
     800: "#153e75",
     700: "#2a69ac",
   },
 }

 const theme = extendTheme({ colors })

function App() {
  return (
    <ChakraProvider theme={theme}>
       <Home />
       <CustomStack />
       
    </ChakraProvider>
  );
}

export default App;
