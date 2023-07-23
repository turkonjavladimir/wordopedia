"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"

import { fontOptions } from "@/config/fonts"
import { generateFontDisplayName } from "@/lib/utils"
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { useFontSelector } from "@/components/font-provider"

const FormSchema = z.object({
  font: z.enum(["font-sans", "font-serif", "font-mono"]),
})

export function FontSelector() {
  const { selectedFont, setFont } = useFontSelector()
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  })

  return (
    <Form {...form}>
      <form className="w-2/3 space-y-6">
        <FormField
          control={form.control}
          name="font"
          render={({ field }) => (
            <FormItem>
              <Select
                onValueChange={(value) => {
                  setFont(value)
                }}
                defaultValue={field.value}
              >
                <FormControl>
                  <SelectTrigger className="w-[130px] focus-visible:ring-1 focus-visible:ring-offset-0">
                    <SelectValue
                      placeholder={generateFontDisplayName(selectedFont)}
                    />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {fontOptions.map((option) => (
                    <SelectItem key={option.value} value={option.value}>
                      {option.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </FormItem>
          )}
        />
      </form>
    </Form>
  )
}
