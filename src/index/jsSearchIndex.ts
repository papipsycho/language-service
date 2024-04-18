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

  var docsWhen = [];
  var docsGiven = [];
  var docsThen = [];
  for(var i = 0, l = suggestions.length; i<l; i++) {
    switch(suggestions[i].type) {
      case 'when':
          docsWhen.push({
            id: i,
            text: suggestions[i].segments.map((segment) => (typeof segment === 'string' ? segment : segment.join(' '))).join(''),
          });
        break
      case 'given':
        docsGiven.push({
            id: i,
            text: suggestions[i].segments.map((segment) => (typeof segment === 'string' ? segment : segment.join(' '))).join(''),
          });
        break;
      case 'then':
      docsThen.push({
            id: i,
            text: suggestions[i].segments.map((segment) => (typeof segment === 'string' ? segment : segment.join(' '))).join(''),
          });
        break;
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

  return (text: string, keyword: string) => {
    if (!text) return []
    var results = [];
    switch(keyword.trim().toLowerCase()) {
      case "when":
        results = searchWhen.search(text);
        break;
      case "given":
        results = searchGiven.search(text);
        break;
      case "then":
        results = searchThen.search(text);
        break;
    }
    return results.map((result: Doc) => suggestions[result.id])
  }
}
