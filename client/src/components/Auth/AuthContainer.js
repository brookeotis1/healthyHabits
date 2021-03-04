import React from 'react'
import classNames from 'classnames'

export function AuthContainer(props) {
  const { children, className, ...attributes } = props

  const classes = classNames(
    'container',
    className
  )

  return (
    <div className={classes} {...attributes}>
      {children}
    </div>
  )
}