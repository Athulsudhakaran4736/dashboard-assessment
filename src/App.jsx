import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SignIn from "./pages/SignIn/SignIn";
import Dashboard from "./pages/Dashboard/Dashboard"

function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<SignIn/>}></Route>
        <Route path='/dashboard/upload' element={<Dashboard/>}></Route>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
