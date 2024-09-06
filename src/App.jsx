import { useState } from 'react'
import Account from './components/Account';
import Books from './components/Books';
import Login from './components/Login';
import Navigations from './components/Navigations';
import Register from './components/Register';
import SingleBook from './components/SingleBook';

import { Routes, Route, Link, useParams } from "react-router-dom";


function App() {
const [token, setToken] = useState(null)
if(token == null){
  return (
    <>
<div id="container">
<div id="navbar"> 
<Link to="/"> Books </Link>
<Link to="/login"> Login </Link>
<Link to="/navigations"> Navigations </Link>
<Link to="/register"> Register </Link>
</div>
</div>


      <Routes>
        <Route path="/" element={<Books token={token}/>} />
        <Route path="/login" element={<Login setToken={setToken} />} />
        <Route path="/navigations" element={<Navigations />} />
        <Route path="/register" element={<Register setToken={setToken} />} />
        <Route path="/singlebook/:id" element={<SingleBook />} />
      </Routes>
    </>
  )
}else if(token != null){
   return (
    <>
<div id="container">
<div id="navbar"> 
<Link to="/account"> Account </Link>
<Link to="/"> Books </Link>
<Link to="/navigations"> Navigations </Link>
</div>
</div>


      <Routes>
        <Route path="/account" element={<Account token={token} />} />
        <Route path="/" element={<Books token={token}/>} />
        <Route path="/navigations" element={<Navigations />} />
        <Route path="/singlebook/:id" element={<SingleBook />} />
      </Routes>
    </>
  )
}

}

export default App
