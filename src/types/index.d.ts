export type SiteConfig = {
  name: string
  description: string
  url: string
  links: {
    github: string
  }
}

type ErrorMessage = {
  title: string
  message: string
  resolution: string
}

type Word = {
  word: string
  phonetic: string
  phonetics: { text: string; audio: string }[]
  meanings: { partOfSpeech: string; definitions: { definition: string }[] }[]
  license: {
    name: string
    url: string
  }
  sourceUrls: string[]
}

export type APIResponse = {
  data?: Result[]
  errors?: ErrorMessage[]
}
