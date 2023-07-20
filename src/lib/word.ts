import { APIResponse } from "@/types"

const API_URL = "https://api.dictionaryapi.dev/api/v2/entries/en/"

export async function getWord(word?: string): Promise<APIResponse> {
  if (!word) return {}

  try {
    const res = await fetch(`${API_URL}${word}`)
    const data = await res.json()

    if (!res.ok) return { error: data, data: [] }

    return {
      error: undefined,
      data,
    }
  } catch (error) {
    const networkError = {
      title: "Network Error",
      message: "Failed to fetch data from the API",
      resolution: "Please check your internet connection and try again.",
    }
    return { error: networkError, data: [] }
  }
}
