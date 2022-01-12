import React from 'react'
import UserListRow from './UserListRow'

function UserList(props) {

    return (
        <>
            {
                props.usersData.map((users) => (
                    <UserListRow item={users}></UserListRow>

                ))
            }
        </>
    )
}

export default UserList

//app => Userpage => UserList => map ile userDetail