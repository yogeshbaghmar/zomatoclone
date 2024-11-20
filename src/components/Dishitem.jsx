import React from 'react'

import dishimg from "../assets/image/dishimhg.webp"; 
import { Col, Container, Row } from 'react-bootstrap';
import mobileimg from '../assets/image/f773629053b24263e69f601925790f301680693809.webp'
import googleplay from '../assets/image/9f0c85a5e33adb783fa0aef667075f9e1556003622.webp'
import appstore from '../assets/image/23e930757c3df49840c482a8638bf5c31556001144.webp'
import Accordion from 'react-bootstrap/Accordion';
import Dropdown from 'react-bootstrap/Dropdown';
import india from '../assets/image/download.jpeg'
// import uae from '../assets/image/download (1).jpeg'





export default function Dishitem() {
  return (
   <>
   <Container fluid>
   <Row xs={1} sm={2} md={3} className='text-white'>
    <Col className=' mt-5'>
        <div className='first-bgimg rounded-4 '>
           <div className='textonimg bg-light text-black '>
               <h4>Ordre Online</h4>
               <p>stay home and order to your doorstep</p>
            </div>
        </div>
         
    </Col>
    <Col className='mt-5'>
         <div className='second-bgimg rounded-4'>
          <div className='textonimg2 bg-light text-black '>
               <h4>Ordre Online</h4>
               <p>stay home and order to your doorstep</p>
          </div>
         </div>
    </Col>
    <Col className='mt-5'>
         <div className='third-bgimg rounded-4 '>
            <div className='textonimg3 bg-light text-black '>
             <h4>Ordre Online</h4>
             <p>stay home and order to your doorstep</p>
           </div>
         </div>
    </Col>
   </Row>
   <aside className='mt-5 pt-5 p-5'>
    <h2>Collections</h2>
    <p>Explore curated lists of top restaurants, cafes, pubs, and bars in Delhi NCR, based on trends</p>
   </aside>
   <Row className='d-flex text-light m-2 col-sm-6 xs={1} sm={2} md={3}'>
    <Col className='lightimg1 p-5 m-2 rounded-3 bg-white'>
          Top Trending spots
          
    </Col>
    <Col className='lightimg2 p-5 m-2 rounded-3'>Best insta-worthy places</Col>
    <Col className='lightimg3 p-5 m-2 rounded-3'>Newly opened Places</Col>
   </Row>
   <aside className='mt-5 pt-5 p-5'>
    <h2 className='fs-2 fw-semibold'>Popular localities in and around Delhi NCR</h2>
   </aside>
   <Row xs={1} sm={2} md={3}>
    <Col>
    <div className=' btom-box border rounded-3 p-2 m-2'>
    <h5>Connaught Place</h5>
      285 Places
    </div>
    </Col>
    <Col>
    <div className=' btom-box border rounded-3 p-2 m-2'>
    <h5>Connaught Place</h5>
      285 Places
    </div>
    </Col>
    <Col>
    <div className=' btom-box border rounded-3 p-2 m-2'>
    <h5>Connaught Place</h5>
      285 Places
    </div>
    </Col>
    <Col>
    <div className=' btom-box border rounded-3 p-2 m-2'>
    <h5>Connaught Place</h5>
      285 Places
    </div>
    </Col>
    <Col>
    <div className=' btom-box border rounded-3 p-2 m-2'>
    <h5>Connaught Place</h5>
      285 Places
    </div>
    </Col>
    <Col>
    <div className=' btom-box border rounded-3 p-2 m-2'>
    <h5>Connaught Place</h5>
      285 Places
    </div>
    </Col>
    <Col>
    <div className=' btom-box border rounded-3 p-2 m-2'>
    <h5>Connaught Place</h5>
      285 Places
    </div>
    </Col>
    <Col>
    <div className=' btom-box border rounded-3 p-2 m-2'>
    <h5>Connaught Place</h5>
      285 Places
    </div>
    </Col>
    <Col>
    <div className=' btom-box border rounded-3 p-2 m-2'>
    <h5>Connaught Place</h5>
      285 Places
    </div>
    </Col>
   </Row>
  
   </Container>
   <Container fluid className='bg-danger-subtle d-flex mt-5 m-auto '>
        <Row>
          <Col className='m-auto mt-5 p-5'>
          <img src={mobileimg} className='m-auto mt-5 ' alt="" width={250}/>
          </Col>
          <Col className='m-auto mt-5 p-5'>
                <span className='fs-1 p-2'>Get the Zomato app</span>
                <p className='p-2'>We will send you a link, open it on your phone to download the app</p>
                <div className='p-2'>
                    <div className=''>
                        <input type="checkbox" className='rounded-4' name="" id="" /> Email
                        <input type="checkbox" className='rounded-4' name="" id="" /> Phone
                    
                    </div>
                    <div className=''>
                    <input type="search" className='p-2 rounded-2 border' name="" id="" placeholder='Email'/> 
                    <button className='bg-danger text-white m-2 p-2 rounded-2 border-0'>Share app link</button>
                    </div>
                      
                </div>
                <div  className='p-2'>
                  <p>Download  app from</p>
                  <div >
                    <img src={googleplay} className='p-1' alt="" width={150}/>
                    <img src={appstore} className='p-1' alt="" width={150}/>
                  </div>
                </div>
          </Col>
        </Row>
   </Container>
   <Row className='p-2 mt-5'>
    <h3 className='mb-3'>Explore options near me</h3>
    
        <Accordion defaultActiveKey="0">
          <Accordion.Item eventKey="0">
            <Accordion.Header>Popular restaurant types near me</Accordion.Header>
            <Accordion.Body>
              Bakery food near meBeverages food near meBiryani food near meBurger food near meChinese food near meCoffee food near meContinental food near meDesserts food near meItalian food near meMithai food near meMomos food near meMughlai food near meNorth Indian food near mePasta food near mePizza food near meRolls food near meSandwich food near meShake food near meSouth Indian food near meStreet food near me
            </Accordion.Body>
          </Accordion.Item>
          </Accordion>
  
    </Row>
    <Row className='p-2 '>
    <Accordion defaultActiveKey="0">
          <Accordion.Item eventKey="0">
            <Accordion.Header>Popular cuisines near me</Accordion.Header>
            <Accordion.Body>
              Bakery food near meBeverages food near meBiryani food near meBurger food near meChinese food near meCoffee food near meContinental food near meDesserts food near meItalian food near meMithai food near meMomos food near meMughlai food near meNorth Indian food near mePasta food near mePizza food near meRolls food near meSandwich food near meShake food near meSouth Indian food near meStreet food near me
            </Accordion.Body>
          </Accordion.Item>
          </Accordion>
    </Row>
    <Row className='p-2 '>
    <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header>Top Restaurant Chains</Accordion.Header>
        <Accordion.Body>
          Bakery food near meBeverages food near meBiryani food near meBurger food near meChinese food near meCoffee food near meContinental food near meDesserts food near meItalian food near meMithai food near meMomos food near meMughlai food near meNorth Indian food near mePasta food near mePizza food near meRolls food near meSandwich food near meShake food near meSouth Indian food near meStreet food near me
        </Accordion.Body>
      </Accordion.Item>
      </Accordion>
    </Row>
    <Row className='p-2 '>
    <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header>Cities We Deliver To</Accordion.Header>
        <Accordion.Body>
          Bakery food near meBeverages food near meBiryani food near meBurger food near meChinese food near meCoffee food near meContinental food near meDesserts food near meItalian food near meMithai food near meMomos food near meMughlai food near meNorth Indian food near mePasta food near mePizza food near meRolls food near meSandwich food near meShake food near meSouth Indian food near meStreet food near me
        </Accordion.Body>
      </Accordion.Item>
      </Accordion>
    </Row>
    {/* /endcode */}
    <Container fluid className='bg-secondary-subtle '>
    <Row className='p-5 d-flex justify-content-between'> 
      <Col>
          <h2 className='fw-bold fst-italic'>Zomato</h2>
      </Col>
      <Col>
        <button className='border-1 rounded-2'>
            <Dropdown>
              <Dropdown.Toggle variant="" id="dropdown-basic">
              <img src={india} width={25} alt="" />India
              </Dropdown.Toggle>
              <Dropdown.Menu className='d-flex'>
                <Dropdown.Item href="#/action-1">india</Dropdown.Item>
                <Dropdown.Item href="#/action-2">UAE</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
        </button>
        <button className='border-1 rounded-2'>
            <Dropdown>
              <Dropdown.Toggle variant="" id="dropdown-basic">
              English
              </Dropdown.Toggle>
              <Dropdown.Menu className='d-flex'>
                <Dropdown.Item href="#/action-1">Hindi</Dropdown.Item>
                <Dropdown.Item href="#/action-2">English</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
        </button>
      </Col>
    </Row>
    <Row>
      <Col>
          <ul>
            <li>
              <h5>About Zomato</h5>
            </li>
            <li>Who We Are</li>
            <li>Blog</li>
            <li>Work with us</li>
            <li>Investor Relations</li>
            <li>Investor Relations</li>
            <li>Press Kit</li>
            <li>Contact Us</li>
          </ul>
      </Col>
      <Col>
          <ul>
            <li><h5>Zomaverse</h5></li>
            <li>zomato</li>
            <li>blinkit</li>
            <li>Feeding india</li>
            <li>hyperpure</li>
            <li>Zomato live</li>
            <li>zomaland</li>
            <li>weather union</li>
            </ul>  
      </Col>
      <Col>
      <ul>
        <li>
          <h5>For Rstaurants</h5>
          </li>
          <li>partner with us </li>
          <li>apps for you</li>
      </ul>
      </Col>
      <Col>
      <ul>
        <li>
          <h5>Learn More</h5>
        </li>
        <li>privacy</li>
        <li>security</li>
        <li>Terms</li>
        <li>Sitemap</li>

      </ul>
      </Col>
      <Col>
      <ul>
        <li>
          <h5>Social Link
          </h5>
        </li>
        <li className='pb-2'> <img src={googleplay} width={150} alt="" /></li>
        <li>
          <img src={appstore} width={150}alt="" />
        </li>
      </ul>
      </Col>
      <hr />
    </Row>
    <Row>
      <p>By continuing past this page, you agree to our Terms of Service, Cookie Policy, Privacy Policy and Content Policies. All trademarks are properties of their respective owners. 2008-2024 © Zomato™ Ltd. All rights reserved.</p>
    </Row>
    
    </Container>
    
   </>
    
  )
}
