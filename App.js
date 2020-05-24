import React from 'react'
import User from './User'
import img from './doacao.jpg'
import userList from './userList.json'
import { FlatList, Modal } from 'react-native'

export default class App extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      firstName: 'Jenifer',
      lastName: 'Spinoza',
      avatar: img,
      page: 1,
      userList: userList.data,
      modalVisible: false,
      modalData: {}
    };
    this.handleModalVisible = this.handleModalVisible.bind(this)
  }

  componentDidMount() {
    this.fetchUsers();
  }

  componentDidUpdate(prevProps) {
    if(prevProps.page !== this.props.page) {
      this.fetchUsers()
    }
  }

  handleModalVisible(clickedUser) {
    this.setState({ modalVisible: !this.state.modalVisible, modalData: clickedUser})
  }

  fetchUser() {
    fetch("https://reqres.in/api/users/1")
    .then(response => response.json())
    .then(({ data }) => {
      const { first_name: firstName, last_name: lastName, avatar } = data
      this.setState({ firstName, lastName, avatar })

    })
    .catch(error=>console.log(error))
  }

  fetchUsers(){
    fetch(`https://reqres.in/api/users?page=${this.state.page}`)
    .then(response => response.json())
    .then(({ data }) => {
      this.setState({ userList: data })
    })
    .catch(error=>console.log(error))
  }

  render() {
    return ( <> <FlatList
    data={this.state.userList}
    renderItem={({ item }) => <User 
      firstName={item.first_name}
      lastName={item.last_name}
      onPress={this.handleModalVisible}
      />} />
      <Modal>
        <User 
        firstName={this.state.modalData.firstName}
        lastName={this.state.modalData.lastName}
        avatar={this.state.modalData.avatar}
        />
      </Modal> </>)
  }
}