import { Search } from 'js-search'

import { Suggestion } from '../suggestions/types.js'
import { Index } from './types.js'

type Doc = {
  id: number
  text: string
}

export function jsSearchIndex(suggestions: readonly Suggestion[]): Index {
  /*const docsWhen: Doc[] = suggestions.map((suggestion, id) => {
    return {
      id,
      text: suggestion.segments
        .map((segment) => (typeof segment === 'string' ? segment : segment.join(' ')))
        .join(''),
    }
  })*/

  const docsWhen = []
  const docsGiven = []
  const docsThen = []
  for (let i = 0, l = suggestions.length; i < l; i++) {
    switch (suggestions[i].type) {
      case 'when':
        docsWhen.push({
          id: i,
          text: suggestions[i].segments
            .map((segment) => (typeof segment === 'string' ? segment : segment.join(' '))).join(''),
        })
        break
      case 'given':
        docsGiven.push({
          id: i,
          text: suggestions[i].segments
            .map((segment) => (typeof segment === 'string' ? segment : segment.join(' '))).join(''),
        })
        break
      case 'then':
        docsThen.push({
          id: i,
          text: suggestions[i].segments
            .map((segment) => (typeof segment === 'string' ? segment : segment.join(' '))).join(''),
        })
        break
    }
  }

  const searchWhen = new Search('when')
  searchWhen.addIndex('text')
  searchWhen.addDocuments(docsWhen)

  const searchGiven = new Search('given')
  searchGiven.addIndex('text')
  searchGiven.addDocuments(docsGiven)

  const searchThen = new Search('then')
  searchThen.addIndex('text')
  searchThen.addDocuments(docsThen)

  return (text: string) => {
    if (!text) return []
    let results: Doc[] = Doc[]
    const keyword = text.split(' ', 1)[0]
    switch (keyword.trim().toLowerCase()) {
      case 'when':
        results = searchWhen.search(text.substr(5))
        break
      case 'given':
        results = searchGiven.search(text.substr(6))
        break
      case 'then':
        results = searchThen.search(text.substr(5))
        break
    }
    return results.map((result: Doc) => suggestions[result.id])
  }
}
