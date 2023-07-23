"use client"

import React, { createContext, useContext, useEffect, useState } from "react"

const FontContext = createContext<{
  selectedFont: string
  setFont: (font: string) => void
}>({
  selectedFont: "",
  setFont: () => {},
})

export const useFontSelector = () => useContext(FontContext)

export const FontProvider = ({ children }: { children: React.ReactNode }) => {
  const [selectedFont, setSelectedFont] = useState<string | null>("font-sans")

  useEffect(() => {
    if (selectedFont !== null) {
      localStorage.setItem("font", selectedFont)
    }
  }, [selectedFont])

  return (
    <FontContext.Provider
      value={{ selectedFont: selectedFont ?? "", setFont: setSelectedFont }}
    >
      <div className={selectedFont ?? "font-sans"}>{children}</div>
    </FontContext.Provider>
  )
}
