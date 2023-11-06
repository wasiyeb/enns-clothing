import {Routes, Route} from 'react-router-dom';
import Home from './components/routes/home/HomeComponent';
import Navigation from './components/routes/navigation/NavigationComponent';
import Signin from './components/routes/sign-in/SigninComponent';
import SignUpForm from './components/sign-up-form/SignUpFormComponent';


const Shop = () => {
  return <h1>I am the shop page</h1>
}
const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path='shop' element={<Shop />} />      
        <Route path='Sign-in' element={<Signin />} />    
        <Route path='Signup' element={<SignUpForm />} />  
      </Route>
    </Routes>
  );
};

export default App;