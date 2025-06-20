import { ReactElement } from 'react'
import NextLink from 'next/link'
import Image from 'next/image'
import clsx from 'clsx'
import { Description } from './description'
import { Heading } from './heading'

export const BlogCardList = ({ articles, className })=> {
  return (
    <div className={clsx('my-12 flex flex-wrap justify-center gap-x-5 gap-y-10 w-full', className)}>
      {articles.map((article) => (
        <NextLink
          key={article.link}
          href={article.link ?? '/404'}
          className='
          flex
          w-[278px]
          cursor-pointer
          flex-col
          overflow-hidden
          rounded-[20px]
          border
          border-solid
          bg-white
          transition-colors
          hover:border-[#7F818C]
          hover:!no-underline
          dark:border-transparent
          dark:bg-[#101218]
          hover:dark:border-[#7F818C]'
        >
          <img
            src={article.thumbnail ?? article.image}
            alt='Article logo'
            className='drag-none h-[164px] w-full object-cover'
          />
          <div className='flex grow flex-col p-5'>
            <Heading size='md' className='line-clamp-3 [hyphens:auto]'>
              {article.title}
            </Heading>
            <Description
              size='md'
              className='line-clamp-4 overflow-hidden text-ellipsis !leading-[18px] [hyphens:auto]'
            >
              {article.description}
            </Description>
            <div className='mt-auto text-xs'>
              <span className='dark:text-gray-500'>
                <span className='select-none'> • </span>
                {new Date(article.date).toLocaleDateString('fr-FR', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </span>
            </div>
          </div>
        </NextLink>
      ))}
    </div>
  )
}
