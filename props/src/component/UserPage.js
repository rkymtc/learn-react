import React from 'react'
import { users } from '../data/usersData'
import UserList from './UserList'

function UserPage() {

  return (
    <>
      <h1>User List Page</h1>
      <hr></hr>
      <UserList usersData={users}></UserList>
    </>
  )
}

export default UserPage