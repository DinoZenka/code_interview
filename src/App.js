import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import { Footer, Header } from './components';
import { LoginPage } from './pages';

const Main = () => {
  return (
    <>
      <p>Main page</p>
      
    </>
  )
}

function App() {

  const [loadData, setLoadData] = React.useState(true);

  const getResponce = () => {
     setLoadData(true);
     const responce = new Promise((resolve, reject)=>{
      fetch('http://localhost:8000/')
      .then(res=>res.json())
      .then(res=>resolve(res))
      .catch(err=>console.log(err))
    });

    responce.then(res=>res).catch(err=>console.log(err)).finally(()=>setLoadData(false));
  }
  React.useEffect(()=>{
    setTimeout(getResponce, 5000);    
  }, []);

  return (
    <div className="App" style={{minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}>
      <Header />
        <Switch >
          <Route path='/' exact component={Main} />
          <Route path='/log-in' component={LoginPage} />
          <Route path='/about2' component={()=><h1>ABOUT 2</h1>} />
          <Route path='/about3' component={()=><h1>ABOUT 3</h1>} />
          <Route path='/about4' component={()=><h1>ABOUT 4</h1>} />
          <Route path='/' component={()=><h1>404 Page not found</h1>} />
        </Switch>
      <Footer />
    </div>
  );
}

export default App;
