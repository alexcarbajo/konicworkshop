import React from "react"
import { Link } from "gatsby"
import Header from "../components/header"

export default () => 
    <div>
        <Header headerText="Konic Digital" />
        <Header headerText="It's pretty cool" />
        <Link to="/contact/">Contact</Link>
        Hello world!
    </div>
