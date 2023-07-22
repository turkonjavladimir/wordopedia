import { useEffect, useRef, useState } from "react"

const useAudioPlayback = (audioUrl: string, currentWord: string) => {
  const audioRef = useRef<HTMLAudioElement | null>(null)
  const [isPlaying, setIsPlaying] = useState(false)

  const handlePlayButtonClick = () => {
    try {
      // If audio is already playing, pause it before loading a new audio
      if (audioRef.current && !audioRef.current.paused) {
        audioRef.current.pause()
      }

      // Set the source of the audio element to the provided audio clip URL
      if (audioRef.current) {
        audioRef.current.src = audioUrl
      }

      // Play the audio
      if (audioRef.current) {
        audioRef.current.play()
      }

      // Update the state to reflect that the audio is playing
      setIsPlaying(true)
    } catch (error) {
      console.error("Error playing the audio clip:", error)
    }
  }

  const handlePauseButtonClick = () => {
    if (audioRef.current && !audioRef.current.paused) {
      audioRef.current.pause()
      setIsPlaying(false)
    }
  }

  const handleAudioEnd = () => {
    setIsPlaying(false)
  }

  useEffect(() => {
    if (audioRef.current) {
      const previousAudioElement = audioRef.current
      previousAudioElement.pause()
      previousAudioElement.removeAttribute("src")
      previousAudioElement.load()
    }

    setIsPlaying(false)
  }, [currentWord])

  return {
    audioRef,
    isPlaying,
    handlePlayButtonClick,
    handlePauseButtonClick,
    handleAudioEnd,
  }
}

export default useAudioPlayback
