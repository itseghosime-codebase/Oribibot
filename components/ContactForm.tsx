"use client"
import React from 'react'

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import Image from 'next/image'

import Person from '@/assets/Icons/person.svg'
import Mail from '@/assets/Icons/email.svg'
import Subject from '@/assets/Icons/subject.svg'
import Pen from '@/assets/Icons/message.svg'
import { Textarea } from './ui/textarea'

const formSchema = z.object({
    name: z
        .string()
        .min(2, { message: "Name must be at least 2 characters." })
        .max(50, { message: "Name must not exceed 50 characters." })
        .regex(/^[a-zA-Z\s'-]+$/, { message: "Name can only contain letters, spaces, apostrophes, and dashes." }),

    email: z
        .string()
        .email({ message: "Please enter a valid email address." }),

    subject: z
        .string()
        .min(3, { message: "Subject must be at least 3 characters." })
        .max(100, { message: "Subject must not exceed 100 characters." }),

    message: z
        .string()
        .min(10, { message: "Message must be at least 10 characters." })
        .max(1000, { message: "Message must not exceed 1000 characters." }),
});

export default function ContactForm() {
    // 1. Define your form.
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            email: "",
            subject: "",
            message: ''
        },
    })

    // 2. Define a submit handler.
    function onSubmit(values: z.infer<typeof formSchema>) {
        // Do something with the form values.
        // ✅ This will be type-safe and validated.
        console.log(values)
    }

    return (
        <div className='max-w-xl mx-auto'>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                    <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                            <FormItem>
                                <div className="relative border rounded-xl border-primary py-2.5 px-4 flex items-center gap-2">

                                    <Image
                                        src={Person}
                                        alt='User Icon'
                                        sizes='100%'
                                        className='h-5 md:h-6 lg:h-7 xl:h-8 w-auto'
                                    />
                                    {/* Input */}
                                    <FormControl>
                                        <Input
                                            {...field}
                                            placeholder=" " // important: space so peer-placeholder-shown works
                                            className="peer border-0 bg-transparent focus-visible:ring-0 text-xl md:text-2xl lg:text-3xl font-light"
                                        />
                                    </FormControl>

                                    {/* Label */}
                                    <FormLabel
                                        className="absolute left-12 lg:left-16 top-1/2 -translate-y-1/2 text-xl md:text-2xl lg:text-3xl font-light text-white/60 transition-all
          peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-xl md:peer-placeholder-shown:text-2xl lg:peer-placeholder-shown:text-3xl peer-placeholder-shown:text-white/60
          peer-focus:top-0 peer-focus:text-sm peer-focus:opacity-0
          peer-not-placeholder-shown:top-0 peer-not-placeholder-shown:text-sm peer-not-placeholder-shown:opacity-0"
                                    >
                                        Name<span>*</span>
                                    </FormLabel>
                                </div>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                            <FormItem>
                                <div className="relative border rounded-xl border-primary py-2.5 px-4 flex items-center gap-2">

                                    <Image
                                        src={Mail}
                                        alt='Mail Icon'
                                        sizes='100%'
                                        className='h-5 md:h-6 lg:h-7 xl:h-8 w-auto'
                                    />
                                    {/* Input */}
                                    <FormControl>
                                        <Input
                                            {...field}
                                            placeholder=" " // important: space so peer-placeholder-shown works
                                            className="peer border-0 bg-transparent focus-visible:ring-0 text-xl md:text-2xl lg:text-3xl font-light"
                                        />
                                    </FormControl>

                                    {/* Label */}
                                    <FormLabel
                                        className="absolute left-12 lg:left-16 top-1/2 -translate-y-1/2 text-xl md:text-2xl lg:text-3xl font-light text-white/60 transition-all
          peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-xl md:peer-placeholder-shown:text-2xl lg:peer-placeholder-shown:text-3xl peer-placeholder-shown:text-white/60
          peer-focus:top-0 peer-focus:text-sm peer-focus:opacity-0
          peer-not-placeholder-shown:top-0 peer-not-placeholder-shown:text-sm peer-not-placeholder-shown:opacity-0"
                                    >
                                        Email Address<span>*</span>
                                    </FormLabel>
                                </div>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <FormField
                        control={form.control}
                        name="subject"
                        render={({ field }) => (
                            <FormItem>
                                <div className="relative border rounded-xl border-primary py-2.5 px-4 flex items-center gap-2">

                                    <Image
                                        src={Subject}
                                        alt='Subject Icon'
                                        sizes='100%'
                                        className='h-5 md:h-6 lg:h-7 xl:h-8 w-auto'
                                    />
                                    {/* Input */}
                                    <FormControl>
                                        <Input
                                            {...field}
                                            placeholder=" " // important: space so peer-placeholder-shown works
                                            className="peer border-0 bg-transparent focus-visible:ring-0 text-xl md:text-2xl lg:text-3xl font-light"
                                        />
                                    </FormControl>

                                    {/* Label */}
                                    <FormLabel
                                        className="absolute left-12 lg:left-16 top-1/2 -translate-y-1/2 text-xl md:text-2xl lg:text-3xl font-light text-white/60 transition-all
          peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-xl md:peer-placeholder-shown:text-2xl lg:peer-placeholder-shown:text-3xl peer-placeholder-shown:text-white/60
          peer-focus:top-0 peer-focus:text-sm peer-focus:opacity-0
          peer-not-placeholder-shown:top-0 peer-not-placeholder-shown:text-sm peer-not-placeholder-shown:opacity-0"
                                    >
                                        SUBJECT<span>*</span>
                                    </FormLabel>
                                </div>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <FormField
                        control={form.control}
                        name="message"
                        render={({ field }) => (
                            <FormItem>
                                <div className="relative border rounded-xl border-primary py-2.5 px-4 space-y-3">

                                    <div className='flex items-center gap-2'>
                                        <Image
                                            src={Pen}
                                            alt='Pen Icon'
                                            sizes='100%'
                                            className='h-5 md:h-6 lg:h-7 xl:h-8 w-auto'
                                        />
                                        <FormLabel
                                            className="text-xl md:text-2xl lg:text-3xl font-light text-white/60"
                                        >
                                            MESSAGE<span>*</span>
                                        </FormLabel>
                                    </div>
                                    {/* Input */}
                                    <FormControl>
                                        <Textarea
                                            {...field}
                                            placeholder=" " // important: space so peer-placeholder-shown works
                                            className="border-0 break-after-alls resize-y max-w-xl bg-transparent focus-visible:ring-0 text-xl md:text-2xl lg:text-3xl font-light"
                                        />
                                    </FormControl>

                                </div>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <Button type="submit" className='w-full text-[#193A51] font-bold text-xl md:text-2xl lg:text-3xl pt-3 pb-2 block h-full'>SEND EMAIL</Button>
                </form>
            </Form>
        </div>
    )
}
