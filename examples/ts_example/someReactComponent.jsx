import React from "react"

export const SomeReactComponent = ({test}) => {
    const list = [1,2,3]
    return <div>{list.map(el => <p key={el}>{el}</p>)}</div>
    }