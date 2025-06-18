import { getPagesUnderRoute } from 'nextra/context'
import { BlogCardList } from './ui/blog-card-list'
import { TagList } from './ui/tag-list'
import { getArticles, getTags } from '@/utils/get-post-from-files'
import { Bleed } from 'nextra-theme-docs'

export function TagPage({ tag, title }) {
  return (
    <Bleed>
      <h1 className='text-4xl font-bold mb-10'>{title}</h1>
      <TagList tags={getTags(getPagesUnderRoute('/blog/posts'))} withCount asLink className='mb-20 mt-10' />
      <BlogCardList articles={getArticles(getPagesUnderRoute('/blog/posts'), tag)} />
    </Bleed>
  )
}
