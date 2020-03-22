import {
  postFragment,
  episodeFragment,
  bookmarkFragment
} from './fragments'

export const POST = slug => `
  {
    post(slug: "${slug}") {
     ${postFragment}
    }
  }
`

export const POSTS = `
  {
    posts {
     ${postFragment}
    }
  }
`

export const EPISODES = `
  {
    episodes {
      ${episodeFragment}
    }
  }
`

export const BOOKMARKS = `
  {
    bookmarks {
      ${bookmarkFragment}
    }
  }
`

export const HOME = `
  {
    posts {
      ${postFragment}
    }
    episodes {
      ${episodeFragment}
    }
  }
`