import * as React from 'react'
import { Post } from '~/graphql/types.generated'
import WritingSubscribeBox from '~/components/Writing/Subscribe'
import SyntaxHighlighter from '~/components/SyntaxHighlighter'
import SEO from './SEO'
import Feedback from '../Feedback'
import { CenteredColumn } from '~/components/Layouts'
import Link from 'next/link'

interface Props {
  post: Post
}

export default function PostView({ post }: Props) {
  const date = new Date(post.published_at).toLocaleDateString('en-us', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })

  return (
    <React.Fragment>
      <SyntaxHighlighter data={post} />
      <SEO post={post} />

      <CenteredColumn>
        <div data-cy="post" className="flex flex-col space-y-8">
          <Link href="/writing" passHref>
            <a className="font-mono leading-snug text-tertiary hover:text-gray-1000 dark:hover:text-gray-100">
              ⬖ Writing
            </a>
          </Link>
          <div className="flex flex-col space-y-4">
            <h1 className="text-4xl font-extrabold text-primary">
              {post.title}
            </h1>
            <span className="font-mono text-lg leading-snug text-tertiary">
              {date}
            </span>
          </div>
        </div>

        <div
          className="mt-8 font-mono leading-relaxed prose lg:prose-lg"
          dangerouslySetInnerHTML={{ __html: post.html }}
        />

        <div className="flex flex-col mt-16">
          <Feedback post={post} />
          <WritingSubscribeBox />
        </div>
      </CenteredColumn>
    </React.Fragment>
  )
}
