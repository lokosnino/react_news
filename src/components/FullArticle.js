import React from 'react';
import {Button,Image, Container, Row, Col } from 'react-bootstrap';
import {Link, } from 'react-router-dom';

  class FullArticle extends React.Component {
    
    constructor(props){
      super(props);
    }

    componentDidMount(){
      //
    }


     render(){
          return ( 
              <Container className="mt-2">
                  <Row>
                  <Col cs={12}> md={4}
                  <Image src={this.props.location.state.article.urlToImage} alt="NA"/>
                  </Col>

                  <Col xs={12} md={8} lg={7} style={{color :"white"}}>
                  
                       <h1>{this.props.location.state.article}</h1>
                        <p>{this.props.location.state.article.title}</p>
                        <p>{this.props.location.state.article.description}</p>
                        <p>{this.props.location.state.article.publishedAt}</p>
                        <Button>Save for later</Button>
                  </Col>
                  
                  </Row>
                  
              </Container>


          );
         }
      }

      export default FullArticle;