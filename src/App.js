import React, { Component } from 'react';
import { connect } from "react-redux";
import logo from './logo.svg';
import UsersPage from './view/UsersPage'
import './App.css';

const mapStateToProps = (state) => {
  return {
    company: state.data.company,
    department: state.data.department,
    users: state.data.users,
    contentView: state.contentView,
  };
}

class App extends Component {

  content = () => {
    switch (this.props.contentView) {
      default:
        return <UsersPage />
    }
  }

  render() {
    //console.log(this.props.users)
    return (
      <div className='flex-page' >
        <header className="App-header">
          <h6>Тестовая модель клиента на React</h6>
        </header>
        {this.content()}

      </div>
    );
  }
}

export default connect(mapStateToProps)(App);
