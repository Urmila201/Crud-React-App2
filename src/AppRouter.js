
import React from 'react'
// import {BrowserRouter,Routes,Route} from 'react-router-dom'
import App from './App';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Add from './Add';
import Edit from './Edit';
import CreateNew from './CreateNew'

function AppRouter() {
  return (
  <BrowserRouter>
  <Routes>
    <Route path={'/'} element={<App/>}/>
    <Route path={'/create'} element={<Add/>} />
    <Route path='/update/:id' element={<Edit/>}/>
    <Route path='/edit/:id' element={<CreateNew/>}/>

  </Routes>
  </BrowserRouter>
  )
}

export default AppRouter

