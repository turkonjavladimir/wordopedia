import { ExternalLink } from "lucide-react"

import { getWord } from "@/lib/word"
import { Separator } from "@/components/ui/separator"
import { ErrorMessage } from "@/components/error-message"
import SynonymItem from "@/components/synonyn-item"
import {
  WordContent,
  WordContentHeader,
  WordHeader,
  WordSubContent,
} from "@/components/word"

export default async function Home({
  searchParams,
}: {
  searchParams: { search: string }
}) {
  const { data, error } = await getWord(searchParams?.search)
  return (
    <main className="m-auto mt-4 max-w-3xl px-6 lg:px-0">
      {error && <ErrorMessage title={error.title} message={error.message} />}

      {data?.map(
        (
          { word, phonetic, sourceUrls, meanings, phonetics },
          index: number
        ) => {
          const phoneticWithAudio = phonetics.find(
            (phonetic: any) => phonetic.audio
          )
          const audioSource = phoneticWithAudio ? phoneticWithAudio.audio : null

          return (
            <div key={index} className="mb-14">
              <WordHeader
                phonetic={phonetic}
                word={word}
                audioUrl={audioSource}
              />
              <WordContent>
                {meanings?.map((meaning, index: number) => {
                  return (
                    <div key={index}>
                      <WordContentHeader label={meaning?.partOfSpeech} />

                      <p className="mb-4 text-[#757575] md:text-xl">Meaning</p>
                      <ul className="mb-4 ml-4 list-outside list-disc space-y-3">
                        {meaning?.definitions?.map(
                          (definition, index: number) => (
                            <li
                              key={index}
                              className="text-sm text-[#2d2d2d] dark:text-white md:text-lg"
                            >
                              {definition?.definition}
                            </li>
                          )
                        )}
                      </ul>

                      {meaning?.definitions?.length > 0 && (
                        <ul className="mb-4 ml-4 flex flex-col gap-1">
                          {meaning?.definitions?.map(
                            ({ example }, index: number) => {
                              if (!example) return null
                              return (
                                <li
                                  className="text-sm italic text-[#757575] md:text-lg"
                                  key={index}
                                >{`"${example}"`}</li>
                              )
                            }
                          )}
                        </ul>
                      )}

                      {meaning.synonyms?.length > 0 && (
                        <div className="mt-4 flex flex-wrap items-center">
                          <p className="mr-4 text-[#757575] md:text-xl">
                            Synonyms
                          </p>
                          {meaning?.synonyms?.map((synonym, index: number) => {
                            const synonymLabel = `${synonym}${
                              index !== meaning.synonyms.length - 1 ? ", " : " "
                            }`

                            return (
                              <SynonymItem key={index} label={synonymLabel} />
                            )
                          })}
                        </div>
                      )}
                    </div>
                  )
                })}
              </WordContent>

              <Separator className="my-5" />
              <WordSubContent label="Source">
                {sourceUrls?.map((source: string, index: number) => (
                  <a
                    key={index}
                    href={source}
                    target="_blank"
                    className="flex items-center text-sm text-[#2d2d2d] underline dark:text-white"
                  >
                    {source}
                    <ExternalLink className="ml-2 inline-block h-4 w-4 stroke-[#757575]" />
                  </a>
                ))}
              </WordSubContent>
            </div>
          )
        }
      )}
    </main>
  )
}
