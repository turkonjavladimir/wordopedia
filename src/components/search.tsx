"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { Loader2, Search as SearchIcon } from "lucide-react"
import { useForm } from "react-hook-form"
import * as z from "zod"

import useSearchURL from "@/hooks/useSearchUrl"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"

const formSchema = z.object({
  query: z.string().trim().toLowerCase(),
})

const Search = () => {
  const { isPending, updateSearchURL } = useSearchURL()
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      query: "",
    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    updateSearchURL(values.query)
    form.reset()
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="query"
          render={({ field }) => (
            <FormItem className="relative">
              <FormControl>
                <Input
                  placeholder="Search for any word..."
                  {...field}
                  className="border-none bg-input-backgorund focus-visible:ring-1 focus-visible:ring-offset-0"
                />
              </FormControl>

              <Button
                size="icon"
                variant="ghost"
                aria-label="Search"
                className={`absolute -top-2 right-0 z-50 rounded-full hover:bg-transparent ${
                  isPending ? "opacity-0" : "opacity-100"
                }`}
              >
                <SearchIcon className="stroke-accent-purple h-4 w-4 cursor-pointer stroke-ring" />
              </Button>

              <Loader2
                aria-label="Loading..."
                className={`${
                  isPending ? "opacity-100" : "opacity-0"
                } text-muted-foreground/0.5 stroke-accent-purple absolute right-3 top-1 h-4 w-4 animate-spin stroke-ring`}
              />
              <FormMessage />
            </FormItem>
          )}
        />
      </form>
    </Form>
  )
}

export default Search
