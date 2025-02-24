import React from 'react'

export const Items = ({contentItem,myStyles}) => {
  return (
    <>
      <ul class={myStyles}>
          <li>
                <a href="">{contentItem}</a>
          </li>
      </ul>
    </>
  )
}
 