import React, { useState } from 'react'
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import '../App';



const Home = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (

    <div className="container-fluid">

       <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Offcanvas</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          Some text as placeholder. In real life you can have the elements you
          have chosen. Like, text, images, lists, etc.
        </Offcanvas.Body>
      </Offcanvas>

      <div className='row py-3 border-bottom'>
        <div className='col-sm-6 col-lg-2 text-center'>
         <a href='#' className='logo' >
           <img style={{ width: '63%' }} src="data:image/png;base64,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" alt=" logo"></img>
          </a>
          <Button variant="" onClick={handleShow}>
           ......
          </Button> 
        </div>
        <div className='col-sm-6 col-lg-5'>
          <div className='row bg-light p-2 rounded-4'>
            <div className='col-sm-6 col-lg-3'>
              <DropdownButton
                id="dropdown-variants-Secondary"
                title="Category"
                variant="secondary"
              >
                <Dropdown.Item eventKey="1">Action</Dropdown.Item>
                <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
                <Dropdown.Item eventKey="3">
                  Active Item
                </Dropdown.Item>
              </DropdownButton>
            </div>
            <div className='col'>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
