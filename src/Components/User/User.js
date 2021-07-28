import React, { useEffect, useState } from 'react'

function User() {
    const [count, setCount] = useState(0);
    useEffect(() => {
        document.title = ` you have clicked ${count} times`
    })
    return (
        <div>
            <button onClick={() => setCount(count + 1)}> 
            Count {count} times
            </button>
        </div>
    )
}

export default User
