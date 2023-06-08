import React from "react"

type GreetProps = {
    name: string,
    messageCount: number,
    isLoggedIn: boolean
}
export default function Greet(props: GreetProps) {
  return (
    <div>
        <h2>
            { props.isLoggedIn ? `Wellcome ${props.name} you have ${props.messageCount} messages` : `Wellcome guest`}
        </h2>
    </div>
  )
}
