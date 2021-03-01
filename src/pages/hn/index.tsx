import * as React from 'react'
import Page, { PageHeader } from '~/components/Page'
import { NextSeo } from 'next-seo'
import { CenteredColumn } from '~/components/Layouts'
import HNPosts from '~/components/HNPosts'
import { HNComment } from '~/components/HNPost/Comment'
import Navigation from '~/components/HNPosts/Navigation'
import { getHNPosts } from '~/graphql/services/hn'
import HNSubscribeBox from '~/components/HNSubscribe'
import routes from '~/config/routes'

export interface HNPost {
  id: string
  title: string
  user: string
  time: number
  time_ago: string
  comments: HNComment[]
  comments_count: string
  url: string
  domain: string
  content: string
}

interface Props {
  posts: HNPost[]
}

export default function HNTop(props: Props) {
  const { posts } = props

  return (
    <Page>
      <NextSeo
        title={routes.hn.seo.title}
        description={routes.hn.seo.description}
        openGraph={routes.hn.seo.openGraph}
      />

      <CenteredColumn data-cy="hn">
        <div className=" space-y-8">
          <PageHeader title="Hacker News" />
          <div className="flex md:justify-center">
            <Navigation active={'top'} />
          </div>
          <div className="h-px bg-gray-200 dark:bg-gray-800 timeline-stroke" />
          <HNPosts posts={posts} />
          <HNSubscribeBox />
        </div>
      </CenteredColumn>
    </Page>
  )
}

export async function getStaticProps() {
  const posts = await getHNPosts('top')

  return {
    revalidate: 60 * 60 * 4,
    props: {
      posts,
    },
  }
}
