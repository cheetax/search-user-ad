import React, { Component } from 'react';
import { connect } from "react-redux";
//import './UsersPage.css';

const mapStateToProps = (state) => {
    return {
        users: state.data.users,
        visibleAddButtons: state.data.status,
        company: state.data.company,
        departmen: state.data.departmen,
    };
}

class UsersPage extends Component {

    constructor(props) {
        super(props)
        this.state = {
            
        }
    }

    componentWillUpdate(e, r) {

    }

    componentWillMount() {
        this.props.dispatch({
            type: 'GET_DATA',
            payload: {}
        })
    }

    users = () => {
        return this.props.users
    };

    render() {

        return (
            <div className="flex-container_list">
                <div className='center-panel' >{this.users()}
                </div>
            </div >

        );
    }
}
export default connect(mapStateToProps)(UsersPage);
