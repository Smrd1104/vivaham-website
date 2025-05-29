import { Outlet } from "react-router-dom"

const App = () => {
  return (
    <>
      <main className="flex-grow ">
        <Outlet />
      </main>
    </>
  )
}

export default App