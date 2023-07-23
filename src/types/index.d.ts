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

type Definition = {
  definition: string
  synonyms: string[]
  antonyms: string[]
  example: string
}

export type Meaning = {
  partOfSpeech: string
  definitions: Definition[]
  synonyms: string[]
  antonyms: string[]
}

type Phonetic = {
  text: string
  audio: string
}

type License = {
  name: string
  url: string
}

type Word = {
  word: string
  phonetic: string
  phonetics: Phoneticp[]
  meanings: Meaning[]
  license: License
  sourceUrls: string[]
}

export type APIResponse = {
  data?: Word[]
  error?: ErrorMessage
}

export type FontValue = "font-sans" | "font-serif" | "font-mono"

export type Font = {
  value: FontValue
  label: string
}
