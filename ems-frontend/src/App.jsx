
import './App.css'
import Header from './Component/Header'
import Footer from './Component/Footer'
import ListOfEmployee from './Component/ListOfEmployee'
import {BrowserRouter, Route,Routes} from 'react-router-dom'
import Employee from './Component/Employee'

function App() {
  

  return (
    <>
    <BrowserRouter>
        <Header/>
        
        <Routes>
          {/* // http://localhost:3000 */}
          <Route path='/' element ={<ListOfEmployee/>}></Route>

          {/* // http://localhost:3000/employees */}
          <Route path ='/employees' element = {<ListOfEmployee/>}></Route>

          {/* //http://localhost:3000/add-employee */}
          <Route path='/add-employee' element={<Employee/>}></Route>

           {/* //http://localhost:3000/update-employee/1 */}
          <Route path ='/update-employee/:id' element={<Employee/>}></Route>
        </Routes>

        <Footer/>
      </BrowserRouter>  
    </>
  )
}

export default App
