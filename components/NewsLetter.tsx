"use client"
import React from "react"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

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
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
})

export default function NewsLetter() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values) // Replace with API call later
  }

  return (
    <div className="order-1 md:order-2 space-y-3">
      <h3 className="font-medium text-2xl md:text-3xl lg:text-4xl">
        SIGN UP FOR NEWSLETTERS AND UPDATES
      </h3>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <div className="flex items-center border-2 border-white rounded-xl p-2">
                    <Input
                      type="email"
                      placeholder="Your Email..."
                      className="border-0 focus:ring-0 focus-visible:ring-0 text-2xl md:text-2xl text-white placeholder:text-white/70"
                      {...field}
                    />
                    <Button
                      type="submit"
                      className="h-full py-3 pb-2 text-2xl font-bold text-secondary"
                    >
                      JOIN NOW!
                    </Button>
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </form>
      </Form>
    </div>
  )
}
