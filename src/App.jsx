import './App.css'
import  {Navbar1 , Header , About , Timeline , Events , Talks  , Pitches, Contact}  from "./Components"


function App() {
  return (
    <div className="App">
      <Navbar1 />
      <Header />
      <About />
      <Timeline />
      <Events />
      {/* <Talks /> */}
      {/* <Pitches /> */}
      <Contact />
    </div>
  )
}
export default App
