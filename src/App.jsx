import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./page/Home"
import NotFound from "./page/NotFound"


function App() {


  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route index element={<Home/>}/>
        <Route path='*' element={<NotFound/>}/>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
