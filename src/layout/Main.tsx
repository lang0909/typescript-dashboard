import * as React from 'react'
import { Route } from 'react-router-dom'
import { User, Video, Upload } from '../component'

function Main(){
    return(
        <>
            <Route exact path="/" component={User}/>
            <Route path="/video" component={Video}/>
            <Route path="/upload" component={Upload}/>
        </>
    )
}

export default Main