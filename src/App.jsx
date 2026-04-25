import { JobProvider } from "./context/Job"
import Home from "./page/Home"
import Header from "./component/Header"

function App() {
  return (
    <div className="min-h-screen h-full bg-gray-50">
      <JobProvider>
        <Header/>
        <Home/>
      </JobProvider>
    </div>
  )
}

export default App
