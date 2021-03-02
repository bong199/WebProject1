import React from 'react'

import TopAppBar from './TopAppBar'

function MainPage({ history }) {
    console.log(history)
    return (
        <div>
            <TopAppBar pageHistory={history}/>
        </div>
    )
}

export default MainPage;