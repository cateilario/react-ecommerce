import { Outlet } from "react-router-dom"

function App() {

  return (
    <div>
      <MainHeader/>
      <Outlet/>
    </div>
  )
}

export default App
