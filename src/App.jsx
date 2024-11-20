import { useState } from 'react'
import './App.css'
import Dishitem from './components/Dishitem'
import './index.css'
import Collections from './components/Collections'
import { Container } from 'react-bootstrap'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Container fluid className='m-0 p-0' >
        <div className='mainbgimg '>
              <div className=' container d-flex text-white justify-content-between pt-3'>
                <h6 className='p-2 '>Get the app</h6>
                <div>
                  <ul className='d-flex'>
                    <li className='p-2'>Investor Relations</li>
                    <li className='p-2'> Add Restaurant</li>
                    <li className='p-2'>log in</li>
                    <li className='p-2'>sign up</li>    
                  </ul>
                
                </div>
              </div>
              <div className="container">
                    <h2 className=' zomato-text text-white fst-italic'>zomato</h2>
                    <span className='discover-text fs-1 text-white'> Discover the best food & drinks in Chhindwara</span>
                    {/* <form action="">
                      <input type="search" name="" id="" placeholder='search for restaurant, cuisine or a dish' className='px-5'/>
                    </form>
               */}
              </div>
        </div>  
     
      </Container>
      <Dishitem/>
      <div className="container d-flex">
      <Collections/>
      <Collections/>
      <Collections/>

      </div>
      
      
      
    
   
    
    </>

  )
}

export default App
