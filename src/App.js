import React, { useEffect, useState } from 'react';
import Clock from './container/Clock';
import Home from './container/Home/Home';
import Loading from './Loading/Loading';


const HomeWidthloading = Loading(Home)

function App(props) {
  const[Loading,setLoading] = useState(false);
  const[data,setData] = useState([]);

  const userData = [
    {
      id:101,
      name:'dhameliya' 
    },
    {
      id:102,
      name:'prashil'
    }
  ]

  useEffect(
    () =>{
      setLoading(true)
      setTimeout(() => {setLoading(false); setData(userData)}, 2000)
    },
  [])
  return (
    <div>
      <HomeWidthloading
        isLoading = {Loading}
        data = {data}
        />

        <Clock />
    </div>
  );
}

export default App;
