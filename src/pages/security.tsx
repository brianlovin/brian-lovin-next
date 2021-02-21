import * as React from 'react'
import { NextSeo } from 'next-seo'
import Page, { PageHeader } from '~/components/Page'
import { CenteredColumn } from '~/components/Layouts'
import SecurityChecklist from '~/components/SecurityChecklist'
import routes from '~/config/routes'

export default function Security() {
  return (
    <Page>
      <NextSeo
        title={routes.security.seo.title}
        description={routes.security.seo.description}
        openGraph={routes.security.seo.openGraph}
      />

      <CenteredColumn>
        <div className="flex flex-col space-y-8">
          <PageHeader
            title="Security Checklist"
            subtitle="Tools and resources designed to improve your online privacy,
              safety, and security."
          />

          <SecurityChecklist />
        </div>
      </CenteredColumn>
    </Page>
  )
}
