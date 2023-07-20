import { APIResponse } from "@/types"

const API_URL = "https://api.dictionaryapi.dev/api/v2/entries/en/"

export async function getWord(word?: string): Promise<APIResponse> {
  if (!word) return {}

  const res = await fetch(`${API_URL}${word}`)

  if (!res.ok) {
    return {
      data: [],
      errors: [
        {
          title: "Error",
          message: "Something went wrong",
          resolution: "Try again later",
        },
      ],
    }
  }

  return {
    data: await res.json(),
    errors: [],
  }
}
