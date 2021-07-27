
import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container'
import './App.css';





class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ApiResponse: 'response'

    };
    this.test = this.test.bind(this);
  }
  
  test(e) {
    // - POST
    e.preventDefault();
    
    // creates entity
    let uri = "http://192.168.8.104:8080/api/v1.0/set_name_mask";
    let res = encodeURI(uri);
    console.log(JSON.stringify({"name_mask":["A1"],"fade": 0.3,"timeout":2}));
    fetch(res, {
      "method": "POST",
      "headers": {
        // "content-type": 'application/json',
        // "accept": "text/plain",
        // "Accept": "/",
        // 'mode': 'no-cors'
      },
      "body": JSON.stringify({"name_mask":["A1"],"fade": 0.3,"timeout":2})
    })
    .then(response => response.json())
    .then(response => {
      this.setState({
        ApiResponse: response
      });
      console.log(response)
    })
    .catch(err => {
      // this.setState({
      //   ApiResponse: err
      // })
      console.log(err);
    });
  }

  render() {
    return (
      <Container className='wrapper' >
        <Jumbotron className='child text-center'>
          <h1>API test</h1>
          <br />
          <Button variant="primary" size="lg" block onClick={(e) => this.test(e)}>
            TEST
          </Button>
          <h2>{this.state.ApiResponse}</h2>
        </Jumbotron>
      </Container>

    )
  }
}



export default App;
