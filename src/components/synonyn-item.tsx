"use client"

import useSearchURL from "@/hooks/useSearchUrl"

const SynonymItem = ({ label }: { label: string }) => {
  const { updateSearchURL } = useSearchURL()
  const synonym = label.trim().replace(/,$/, "")
  return (
    <span
      onClick={() => updateSearchURL(synonym)}
      className="mr-1 cursor-pointer font-bold text-ring hover:underline md:text-lg"
    >
      {label}
    </span>
  )
}

export default SynonymItem
