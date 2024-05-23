"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { HiArrowUpTray } from "react-icons/hi2";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import Image from "next/image";
import { useState } from "react";

const FormSchema = z.object({
  email: z.string().min(2, {
    message: "E-mail is required",
  }),
  phone_number: z.string().min(9, {
    message: "Phone number is required",
  }),
  message: z.string().min(1, {
    message: "Message is required",
  }),
  file: z.instanceof(File).optional(),
});

const HomepageContact = () => {
  const [fileName, setFileName] = useState("");

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      email: "",
      phone_number: "",
      file: undefined,
    },
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {}

  return (
    <section className="px-4 py-28 max-w-6xl mx-auto">
      <h2 className="text-6xl font-bold my-12 text-center lg:text-end">
        Contact <span className="font-thin">us</span>
      </h2>
      <div className="grid gap-4 grid-cols-12">
        <div className="hidden lg:block lg:col-span-6 relative h-[587px]">
          <Image
            className="rounded-2xl shadow-xl"
            src="/art.jpg"
            fill
            alt="Window image"
          />
        </div>
        <div className="col-span-12 lg:col-span-6">
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className=" space-y-6 w-full sm:max-w-[350px] lg:max-w-[500px] mx-auto"
            >
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem className="flex flex-col   justify-center">
                    <FormControl>
                      <input
                        className="border-b border-black/50 placeholder:text-lg font-thin p-2 w-full  bg-muted cursor-not-allowed"
                        placeholder="E-mail"
                        {...field}
                      />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="phone_number"
                render={({ field }) => (
                  <FormItem className="flex flex-col   justify-center">
                    <FormControl>
                      <input
                        className="border-b border-black/50 placeholder:text-lg font-thin p-2 w-full bg-muted cursor-not-allowed"
                        placeholder="Phone number"
                        {...field}
                      />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem className="flex flex-col   justify-center">
                    <FormControl>
                      <textarea
                        className="border-b border-black/50 placeholder:text-lg font-thin p-2 w-full bg-muted cursor-not-allowed"
                        placeholder="What's your problem ? "
                        {...field}
                      />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="file"
                render={({ field }) => (
                  <FormItem className="flex flex-col items-center justify-center">
                    <FormControl>
                      <label className=" w-64 h-64 border-2 p-5 border-dashed border-gray-400 rounded-md  flex flex-col justify-center items-center hover:bg-gray-100 text-gray-400 lg:w-[500px] cursor-not-allowed">
                        {fileName ? (
                          <span className="text-center text-lg font-thin">
                            {fileName}
                          </span>
                        ) : (
                          <span className="text-center flex flex-col gap-4 items-center">
                            <span className="text-3xl">
                              <HiArrowUpTray />
                            </span>
                            <span className="text-lg font-thin">
                              Add images if necessary
                            </span>
                          </span>
                        )}
                        <input
                          disabled
                          type="file"
                          accept=".jpg,.png,.jpeg,.webp,.pdf"
                          ref={field.ref}
                          onChange={(e) => {
                            if (e.target.files && e.target.files.length > 0) {
                              const file = e.target.files[0];
                              field.onChange(file);
                              setFileName(file.name);
                            }
                          }}
                          className="hidden cursor-not-allowed"
                        />
                      </label>
                    </FormControl>
                    <FormDescription className="text-muted-foreground">
                      File has to be jpg, png, jpeg, webp or pdf. Attached file
                      can&apos;t be bigger than 10MB.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className=" flex justify-center">
                <Button
                  disabled
                  className="w-full disabled:cursor-not-allowed "
                  type="submit"
                >
                  Send
                </Button>
              </div>
            </form>
          </Form>
        </div>
      </div>
    </section>
  );
};

export default HomepageContact;
