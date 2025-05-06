import { Route, Routes } from 'react-router-dom';
import { LandingPage, Prompt, Builder } from './pages';

function App() {
  return (
    <div>
       <Routes>
          <Route path="/" element={ <LandingPage/> }/>
          <Route path="/prompt" element={ <Prompt/> }/>
          <Route path="/builder" element={ <Builder/> }/>
        </Routes>
    </div>
  )
}

export default App;