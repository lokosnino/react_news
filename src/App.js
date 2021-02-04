  import React from 'react';
  import logo from './logo.svg';
  import './App.css';
  import Headline from './components/Headline';
  import {Nav, Navbar, NavDropdown,Form,FormControl, Button,Col, Container,Row} from 'react-bootstrap';
  import FullArticle from './components/FullArticle';
  import FavoriteList from './components/FavoriteList';
  import CategoryNews from './components/CategoryNews';


  import { 
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useRouteMatch,
    useParams
  } from "react-router-dom";
  
  class App extends React.Component {
   
    constructor(props){
      super(props);

      this.state = { 
          headlines:[] ,
          isLoaded: false,
          error:null

      }
    }

    componentDidMount(){
      //
      this.getLatestHeadlines();
    }
    
     getLatestHeadlines =()=>{
      fetch("http://newsapi.org/v2/top-headlines?country=us&apiKey=64daac6ec8a24476a245a1f63e0e8734")
      .then(  res => res.json())
      .then(
      (result) =>{
        this.setState({ 
        headlines: result.articles,
          isLoaded: true
        });
      },
      (error)=>{
        this.setState({
          error: error,
          isLoaded:true
        })
      }
      )
    }
    

    getHeadline= (article,index)=>{
      return(
        <Col>key={index}
        <Headline  article={article}  ></Headline>
        </Col>
        )
      }

      render(){

        const { error,isLoaded, headlLines} = this.state;
        if(error){
          return <div>Error: {error.message}</div>
        } else if(!isLoaded){
          return <div>Loading...</div>
        }else{
        
        return (
        <div className="App"> 
            <Router>
            <Navbar bg="light" expand="lg">
            <Navbar.Brand href="#home">News</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">Favourite</Nav.Link>
              <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="/technology">Technology</NavDropdown.Item>
                <NavDropdown.Item href="/business">Business action</NavDropdown.Item>
                <NavDropdown.Item href="/sports">Sports</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                </NavDropdown>
                </Nav>
               </Navbar.Collapse>
            </Navbar>


          <header className="App-header">
      
          <div> 

            <Switch>
            <Route path="/favourite">
            <CategoryNews category={technology}></CategoryNews>
            </Route>
            <Route path="/full_article" component={FullArticle}>
              
              </Route>      
              <Route path="/">
                <Container className="mt-3">
                <Row>
                {this.state.headlines.map(this.getHeadline)}
                </Row>
                </Container>
                </Route>
                </Switch>
                </div>

                   <nav>
                    <ul>
                      <li>
                        <Link to="/">Home</Link>
                      </li>
                      <li>
                        <Link to="/favourite">About</Link>
                      </li>
                      <li>
                        <Link to="/full_article">Full</Link>
                      </li>
                    </ul>
                  </nav>

                  </header>

                   <div>
  
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/techonology">

          <CategoryNews> </CategoryNews>
     
          </Route>
          <Route path="/favorite">
           <FavoriteList></FavoriteList>
             </Route>
            <Route path="/full_article" component={FullArticle}>

            </Route>  
          <Route path="/">
          <Container className="mt-3">
            <Row>
              {this.state.headlines.map(this.getHeadline)}
             </Row>
             </Container>
              </Route>
             </Switch>
            </div>
          </Router>  
        </div>);
          }
      }
    }
        export default App;
