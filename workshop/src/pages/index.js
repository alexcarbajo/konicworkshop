import React from "react"
import { Link } from "gatsby"
import Header from "../components/header"
import Button from "../components/button"

export default () => 
    <div className="o-Hero">
        <Header headerText="Konic Digital" />
        <h2>Test</h2>
        <div className="o-Hero__menu">
            <Button type="primary" title="Button" href="#"></Button>
            <Link className="c-Link c-Link--highlight" to="/contact/">Contact</Link>
        </div>
    </div>
