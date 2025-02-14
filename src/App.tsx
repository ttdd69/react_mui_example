import React from 'react'
import './App.css'
import MultiChoice from './components/MuiltiChoice'
import ChoiceResult from './components/ChoiceResult';
import { SelectChoiceContextProvider} from './hooks/'
import TestAppBar from './components/TestAppBar';
import TestFooter from './components/TestFooter';
import TestGrid from './components/TestGrid';
const App : React.FC = () => {
  return (
    <>
      <TestAppBar></TestAppBar>

      {/* <SelectChoiceContextProvider>
        <MultiChoice></MultiChoice>
        <ChoiceResult></ChoiceResult>
      </SelectChoiceContextProvider> */}

    <TestGrid></TestGrid>
    <TestFooter></TestFooter>
    </>
)
};

export default App;
