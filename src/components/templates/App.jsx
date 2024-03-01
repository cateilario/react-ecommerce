import { Outlet } from "react-router-dom"
import MainHeader from "../organism/MainHeader"

function App() {

  return (
    <div>
      <MainHeader/>
      <Outlet/>
    </div>
  )
}

export default App
