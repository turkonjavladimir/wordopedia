import { Frown } from "lucide-react"

type ErrorMessage = {
  title: string
  message: string
  resolution?: string
}
function ErrorMessage({ title, message, resolution }: ErrorMessage) {
  return (
    <div className="flex flex-col items-center">
      <Frown className="h-10 w-10 md:h-16 md:w-16" />
      {title && (
        <h2 className="mb-6 mt-10 text-lg font-bold md:text-xl">{title}</h2>
      )}
      {message && (
        <p className="text-center text-[#757575] md:text-lg">{message}</p>
      )}
      {resolution && (
        <p className="text-center text-red-600 md:text-lg">{resolution}</p>
      )}
    </div>
  )
}
export { ErrorMessage }
