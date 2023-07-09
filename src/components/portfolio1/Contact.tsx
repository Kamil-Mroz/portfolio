import { FC } from 'react'

import { useFieldArray, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '../ui/Form'
import { Input } from '../ui/Input'

import * as z from 'zod'
import { Textarea } from '../ui/Textarea'
export interface ContactProps {}

const contactFormSchema = z.object({
  name: z
    .string()
    .min(2, { message: 'Name must be at leat 2 characters.' })
    .max(30, { message: 'Name must not me longer than 30 characters.' }),
  email: z
    .string({ required_error: 'Please select an email to display.' })
    .email(),
  text: z.string().max(160).min(4),
})

const Contact: FC<ContactProps> = (props) => {
  const form = useForm<z.infer<typeof contactFormSchema>>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: '',
      email: '',
      text: '',
    },
  })

  const onSubmit = (data: z.infer<typeof contactFormSchema>) => {
    console.log(data)
  }

  return (
    <div
      id="contact"
      className="section grid content-between"
    >
      <h2 className="section-title">Contact</h2>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="max-w-md w-full flex-1 mx-auto mb-16 space-y-4"
        >
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Name"
                    {...field}
                    className="bg-transparent"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Email"
                    {...field}
                    className="bg-transparent"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="text"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Description</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder=""
                    className="resize-none"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <button
            type="submit"
            className="mt-2 bg-violet-500 p-4 py-2 rounded hover:bg-violet-600 text-white"
          >
            Send
          </button>
        </form>
      </Form>
    </div>
  )
}

export default Contact
