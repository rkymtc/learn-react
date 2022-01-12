import React, { useState } from 'react'

function StateSample3() {

    const [onlineStatus, setOnlineStatus] = useState(false);


    const change = () => {

        var newStatus = !onlineStatus;

        setOnlineStatus(newStatus)

    }

    return (
        <>
            {
                onlineStatus == true ? <p>Kullanıcı online!!</p> : <p>Kullanıcı offline!!</p>
            }

            <button onClick={change}>Change User Status</button>
        </>
    )
}

export default StateSample3