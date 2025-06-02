import { Outlet } from "react-router-dom"

const App = () => {
  return (
    <>
      <main className="flex-grow overflow-hidden ">
        <Outlet />
      </main>
    </>
  )
}

export default App