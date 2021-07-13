
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

    };
    // bind here
  }
  render() {
    return (
      <Container className='wrapper' >
        <Jumbotron className='child text-center'>
          <h1>API test</h1>
          <br />
          <Button variant="primary" size="lg" block>
            TEST
          </Button>
        </Jumbotron>
      </Container>

    )
  }
}


// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
