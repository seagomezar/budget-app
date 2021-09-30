import { useContext } from 'react';
import './App.css';
import AddButton from './components/AddButton/AddButton';
import Card from './components/Card/Card';
import Header from './components/Header/Header';
import MovementForm from './components/MovementForm/MovementForm';
import MovementList from './components/MovementList/MovementList';
import StateContainer from './components/StateContainer/StateContainer';
import { AppContext } from './contexts/App.Context';

function App() {
  const {state} = useContext(AppContext)
  return (
    <div className="App">
      <Header />
	  <div className='wrapper'>
      	<StateContainer />
	  	<Card />
      	{state.isOpenMovementForm ? <MovementForm /> : <>
       	 <MovementList />
       	 <AddButton />
     	 </>}
	  </div>
      
    </div>
  );
}

export default App;
