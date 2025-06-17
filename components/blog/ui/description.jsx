import { ReactElement, ReactNode } from 'react'
import clsx from 'clsx'


export const Description = ({
  className,
  size = 'lg',
  children,
}) => {
  return (
    <p
      className={clsx(
        'text-gray-500',
        {
          lg: 'mb-7 leading-6',
          md: 'mb-6 text-xs leading-4',
        }[size],
        className
      )}
    >
      {children}
    </p>
  )
}
