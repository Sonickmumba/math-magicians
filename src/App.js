import React from 'react';
import './App.css';
import Calculator from './components/Calculator';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      calculationData: {
        total: null,
        next: null,
        operation: null,
      },
    };
  }

  render() {
    const { calculationData } = this.state;
    return (
      <Calculator calculationData={calculationData} />
    );
  }
}

export default App;
