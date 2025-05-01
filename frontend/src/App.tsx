import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Builder, Landing, Prompt } from "./pages";

function App(){
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={ <Landing/> }/>
          <Route path="/prompt" element={ <Prompt/> }/>
          <Route path="/builder" element={ <Builder/> }/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;