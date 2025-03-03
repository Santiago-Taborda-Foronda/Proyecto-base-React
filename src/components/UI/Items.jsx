import React from 'react'
import { NavLink } from 'react-router-dom'

export const Items = ({content, styles, route }) => {
  return (
    <>
      <li>
        <NavLink className={styles} to={route}>{content}</NavLink>
      </li>
    </>
  )
}
 