"use client";

import * as z from "zod";
import { Loader2, Search as SearchIcon } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { Input } from "@/components/ui/input";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import useSearchURL from "@/hooks/useSearchUrl";
import { Button } from "@/components/ui/button";

const formSchema = z.object({
  query: z.string().trim().toLowerCase(),
});

const Search = () => {
  const { isPending, updateSearchURL } = useSearchURL();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      query: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    updateSearchURL(values.query);
    form.reset();
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
                <Input placeholder="Search for any word..." {...field} />
              </FormControl>

              <Button
                variant="ghost"
                size="icon"
                className={`absolute -top-2 right-0 z-50 rounded-full hover:bg-transparent ${
                  isPending ? "opacity-0" : "opacity-100"
                }`}
              >
                <SearchIcon className="stroke-accent-purple h-4 w-4 cursor-pointer" />
              </Button>

              <Loader2
                className={`${
                  isPending ? "opacity-100" : "opacity-0"
                } text-muted-foreground/0.5 stroke-accent-purple absolute right-3 top-1 h-4 w-4 animate-spin`}
              />
              <FormMessage />
            </FormItem>
          )}
        />
      </form>
    </Form>
  );
};

export default Search;
