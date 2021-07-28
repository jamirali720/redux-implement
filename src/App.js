import './App.css';
import Home from './Components/Home/Home'
import User from './Components/User/User';
import CakeContainer from './Components/redux/Cake/CakeContainer'
import UserInfo from './Components/User/UserInfo';
import UserDetail from './Components/User/UserDetail';
import IceCreamContainer from './Components/redux/IceCream/IceCreamContainer';
import NewIceCreamContainer from './Components/redux/IceCream/NewIceCreamContainer';
import ItemContainer from './Components/redux/Cake/ItemContainer';
import Employee from './Components/redux/Employee/Employee';


function App() {
  return (
    <div className="App">
      <Home></Home>
      <User></User>
      <CakeContainer></CakeContainer>
      <h1> this is second connected to redux app</h1>
      <UserInfo></UserInfo>
      <UserDetail></UserDetail>
      <h1>Ice Cream component</h1>
      <IceCreamContainer></IceCreamContainer>
      <p> new Ice Cream Component</p>
      <NewIceCreamContainer></NewIceCreamContainer>
      <h1> this is itemContainer component</h1>
      <ItemContainer cake/>
      <ItemContainer />
      <h1> Employee component</h1>
      < Employee></Employee>
    </div>
  );
}


export default App;
