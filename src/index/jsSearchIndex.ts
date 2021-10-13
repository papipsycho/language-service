import { Search } from 'js-search'

import { StepDocument } from './step-documents/types.js'
import { Index } from './types.js'

type Doc = {
  id: number
  text: string
}

export function jsSearchIndex(stepDocuments: readonly StepDocument[]): Index {
  const docs: Doc[] = stepDocuments.map((stepDocument, id) => {
    return {
      id,
      text: stepDocument.segments
        .map((segment) => (typeof segment === 'string' ? segment : segment.join(' ')))
        .join(''),
    }
  })

  const search = new Search('id')
  search.addIndex('text')
  search.addDocuments(docs)

  return (text) => {
    if (!text) return []
    const results = search.search(text)
    return results.map((result: Doc) => stepDocuments[result.id])
  }
}
