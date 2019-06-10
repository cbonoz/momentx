import React from "react"
import { Route, BrowserRouter as Router } from 'react-router-dom'
import { Nav, Navbar, Form, FormControl, Button} from 'react-bootstrap'


import "./App.css"
import Home from "./components/Home";
import CoinDetails from "./components/CoinDetails";

function App() {
  return (
    <Router>
    <Navbar bg="dark" variant="dark">
    <Navbar.Brand href="/">MomentX</Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link className='active-text' href="/">Home</Nav.Link>
      <Nav.Link href="/">About</Nav.Link>
      <Nav.Link href="/">Contact</Nav.Link>
    </Nav>
    <Form inline>
      <FormControl type="text" placeholder="Search Moments" className="mr-sm-2" />
      <Button variant="outline-info">Search</Button>
    </Form>
  </Navbar>

      <Route path="/" exact component={Home} />
      <Route path="/about/" component={Home} />
      <Route path="/users/" component={Home} />
      <Route path="/details/:id" component={CoinDetails}/>

    <div className="container-fluid">
        <hr/>
        <footer className="text-muted" style={{padding: '30px 0'}}>
          <div className="container">
            <div className="row">
              <div className="col-lg-8 col-md-8 col-sm-12">
                <p>&copy; 2019 MomentX | Own your piece of sports history. All rights reserved.</p>
             </div> 
            </div>
          </div>
        </footer>
    </div>

    </Router>
  )
}

export default App
