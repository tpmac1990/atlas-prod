import React from 'react'
import ErrorPage from './ErrorPage'

export default function Page400() {
    return (
        <ErrorPage error='400' msg='Bad Request error' />
    )
}
