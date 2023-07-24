import { Separator } from "@/components/ui/separator"

import AudioPlaybackButton from "./audio-playback-button"

type WordHeaderProps = {
  word: string
  phonetic: string
  audioUrl: string
}
const WordHeader = ({ word, phonetic, audioUrl }: WordHeaderProps) => {
  return (
    <div className="flex items-center justify-between">
      <div className="space-y-2 md:space-y-4">
        {word && <p className="text-3xl font-bold md:text-6xl">{word}</p>}
        {phonetic && (
          <p className="text-lg text-ring md:text-2xl">{phonetic}</p>
        )}
      </div>
      {audioUrl && (
        <AudioPlaybackButton audioUrl={audioUrl} currentWord={word} />
      )}
    </div>
  )
}
WordHeader.displaName = "WordHeader"

type WordContentProps = {
  children: React.ReactNode
}

const WordContent = ({ children }: WordContentProps) => {
  return <div className="mt-7 space-y-7">{children}</div>
}
WordContent.displaName = "WordContent"

type WordContentHeaderProps = {
  label: string
}
const WordContentHeader = ({ label }: WordContentHeaderProps) => {
  return (
    <div className=" mb-7 flex items-center">
      <span className="mr-4 text-lg font-bold italic text-[#2d2d2d] dark:text-white md:text-2xl">
        {label}
      </span>
      <Separator className="flex-1" />
    </div>
  )
}

type WordSubContentProps = {
  label: string
  children: React.ReactNode
}
const WordSubContent = ({ label, children }: WordSubContentProps) => {
  return (
    <div className="mb-7">
      <p className="mb-2 text-sm text-[#757575] underline md:text-xl">
        {label}
      </p>
      {children}
    </div>
  )
}
WordSubContent.displaName = "WordSubContent"

export { WordHeader, WordContent, WordContentHeader, WordSubContent }
