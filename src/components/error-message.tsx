import { Frown } from "lucide-react"

function ErrorMessage() {
  return (
    <div className="flex flex-col items-center">
      <Frown className="h-10 w-10 md:h-16 md:w-16" />
      <h2 className="mb-6 mt-10 text-lg font-bold md:text-xl">
        No Definition Found!
      </h2>
      <p className="text-center text-[#757575] md:text-lg">
        Sorry pal, we couldn&apos;t find definitions for the word you were
        looking for. You can try the search again at later time or head to the
        web instead.
      </p>
    </div>
  )
}
export { ErrorMessage }
