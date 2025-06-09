import React from 'react'
import Flipbook from '../components/Flipbook'
import Hero from '../components/franchise/Hero'
import Content from '../components/franchise/Content'
import Choose from '../components/franchise/Choose'
import Forever from "../components/franchise/Forever"

const Franchise = () => {
    return (
        <div>
            <Hero />
            <Content />
            <Choose />
            <Forever />
        </div>
    )
}

export default Franchise