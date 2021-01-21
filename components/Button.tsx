import { HTMLAttributes } from 'react'

interface Props extends HTMLAttributes<HTMLButtonElement> {}

function Button({ children, className }: Props) {
  const classes = `w-40 h-14 border-2 rounded-full tracking-widest text-gray-600 ${className}`

  return <button className={classes}>{children}</button>
}

export { Button }
