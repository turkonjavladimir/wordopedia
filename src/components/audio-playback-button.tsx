"use client"

import { Pause, Play } from "lucide-react"

import useAudioPlayback from "@/hooks/useAudioPlayback"

import { Button } from "./ui/button"

const AudioPlaybackButton = ({
  audioUrl,
  currentWord,
}: {
  audioUrl: string
  currentWord: string
}) => {
  const {
    audioRef,
    handleAudioEnd,
    handlePauseButtonClick,
    handlePlayButtonClick,
    isPlaying,
  } = useAudioPlayback(audioUrl, currentWord)

  return (
    <>
      <Button
        disabled={!audioUrl}
        onClick={!isPlaying ? handlePlayButtonClick : handlePauseButtonClick}
        variant="outline"
        size="icon"
        className="h-12 w-12 rounded-full bg-ring/20 hover:bg-ring/30 md:h-16 md:w-16"
      >
        {isPlaying ? (
          <Pause className="h-3.5 w-3.5 fill-ring stroke-ring md:h-5 md:w-5" />
        ) : (
          <Play className="h-3.5 w-3.5 fill-ring stroke-ring md:h-5 md:w-5" />
        )}
      </Button>
      <audio
        ref={audioRef}
        controls
        onEnded={handleAudioEnd}
        className="hidden"
      />
    </>
  )
}

export default AudioPlaybackButton
