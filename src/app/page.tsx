import { getWord } from "@/lib/word"
import { ErrorMessage } from "@/components/error-message"

export default async function Home({
  searchParams,
}: {
  searchParams: { search: string }
}) {
  const { data, error } = await getWord(searchParams?.search)

  return (
    <main className="m-auto mt-4 max-w-3xl px-6 lg:px-0">
      {error && <ErrorMessage title={error.title} message={error.message} />}

      {data?.map((word, index: number) => {
        return (
          <div key={index} className="flex flex-col">
            <h1 className="text-4xl font-bold">{word.word}</h1>
          </div>
        )
      })}
    </main>
  )
}
