import React from 'react'
import useRoutes from '../../../hooks/useRoutes'

export default function DemoUseRoutes() {
    const routes = useRoutes()
    console.log(routes)
  return (
    <div>DemoUseRoutes</div>
  )
}
