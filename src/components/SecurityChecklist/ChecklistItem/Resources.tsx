import * as React from 'react'
import type { ChecklistResource } from '../types'
import { ResourceRow } from './Resource'

type Props = {
  resource: ChecklistResource
}

export function Resources({ resource }: Props) {
  if (!resource.resources) return null
  return (
    <div className="space-y-0 ">
      <p className="mb-4 text-sm font-medium tracking-wider uppercase text-tertiary">
        Resources
      </p>
      <div className="space-y-3">
        {resource.resources.map((r) => (
          <ResourceRow key={r.name} resource={r} />
        ))}
      </div>
    </div>
  )
}
