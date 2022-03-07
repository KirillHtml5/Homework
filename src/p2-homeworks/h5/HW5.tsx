import React from 'react'
import {HashRouter} from 'react-router-dom'
import Header from './Header'
import Routs from './Router'

function HW5() {
    return (
        <div>
             {/*//в gh-pages лучше работает HashRouter*/}
            <HashRouter>

                <Header/>

                <Routs/>

            </HashRouter>
        </div>
    )
}

export default HW5
