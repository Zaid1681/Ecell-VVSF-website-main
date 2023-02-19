import './App.css'
import  {Navbar , Header , About , Timeline , Events , Talks  , Pitches, Contact, Form}  from "./Components"
import Footer from './Components/Footer/Footer'


function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <About />
      <Timeline />
      <Events />
      {/* <Talks /> */}
      {/* <Pitches /> */}
      <Contact />
      {/* <Form /> */}
      <Footer/>
    </div>
  )
}
export default App
