import React, { Component } from 'react';
import { connect } from "react-redux";
import { SelectedListView } from 'selected-list-view'
import 'selected-list-view/dist/selected-list-view.css'
import './UsersPage.css'
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

    rowRenderer = ({ item }) => {
        return [
            <span>{item.cn} </span>,
            <span>{item.mail}</span>
        ]
    }

    _selectedListView = () => <SelectedListView
        isActive
        //rowHeight={48}
        isBtnScrollStart
        isBtnScrollEnd
        Width={300}
        Height={300}
        headerRenderer={this.headerRenderer}
        className='collection'
        items={[...this.props.users]}
        //itemsQuickSelection={[users[0], users[2]]}
        rowRenderer={this.rowRenderer}
    //setSelectedIndex={this.state.selectedIndex}
        selectItem={this.state.selectUser}
    // onSelectedIndex={(index) => {
    //   this.setState({
    //     selectItem: users[index]
    //   })
    // }}
    // onSelectedItem={(item) => {
    //     this.setState({
    //         selectUser: item,
    //     })
    // }}
    />

    _headerRenderer = () => <div
        style={
            {
                display: 'flex',
                flex: 'auto'
            }
        }><span
            style={
                {
                    width: 'auto',
                    height: 'auto',
                }
            }>{this.headerRenderer({ width: 'auto', height: 'auto' })} </span>
    </div >



    render() {
        console.log(this.props.users)
        return (
            <div className="flex-container_list">
                <div className='center-panel' >{this._selectedListView()}
                </div>
            </div >

        );
    }
}
export default connect(mapStateToProps)(UsersPage);
