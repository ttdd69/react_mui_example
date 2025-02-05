import React from 'react'
import './App.css'
import MultiChoice from './components/MuiltiChoice'
import ChoiceResult from './components/ChoiceResult';
import { SelectChoiceContextProvider} from './hooks/'


const App : React.FC = () => {
  return (
    <>
      <SelectChoiceContextProvider>
        <MultiChoice></MultiChoice>
        <ChoiceResult></ChoiceResult>
      </SelectChoiceContextProvider>
    </>
  )
};

export default App;
