import clsx from 'clsx';

export const Heading = ({
  className,
  size = 'lg',
  children,
  ...props
}) => {
  return (
    <h2
      className={clsx(
        'm-0 mb-2',
        {
          lg: 'text-3xl font-extrabold leading-snug dark:text-gray-50 md:text-[42px] md:leading-[55px]',
          md: 'text-lg font-bold leading-7 dark:text-gray-50',
        }[size],
        className,
      )}
      {...props}
    >
      {children}
    </h2>
  );
};
