import { Outlet } from "react-router-dom"
import Footer from "./components/Footer"
const App = () => {
  return (
    <>
      <main className="flex-grow overflow-hidden ">
        <Outlet />
      </main>
      <Footer />
    </>
  )
}

export default App