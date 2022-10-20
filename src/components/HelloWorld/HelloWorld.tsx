import React from 'react'

interface HelloWorldProps {
  title: string
}

export const HelloWorld: React.FC<HelloWorldProps> = ({ title }) => {
  return <div>{title}</div>
}
