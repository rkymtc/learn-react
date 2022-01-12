import React from 'react'

function UserListRow(props) {
    return (
        <>
            <div>
                <h1>{props.item.id}</h1>
                <p>Name: {props.item.name}</p>
                <p>EMail: {props.item.email}</p>
                <p>Phone: {props.item.phone}</p>
            </div>

        </>
    )
}

export default UserListRow



