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
    message: "E-mail jest wymagany.",
  }),
  phone_number: z.string().min(9, {
    message: "Niepoprawny numer telefonu",
  }),
  message: z.string().min(1, {
    message: "Wiadomość jest wymagana",
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
    <section className="py-20 px-8 max-w-6xl mx-auto">
      <h2 className="text-6xl font-bold my-12">
        {" "}
        Contact <span className="font-thin">us</span>
      </h2>
      <div className="grid gap-4 grid-cols-12">
        <div className="hidden lg:block lg:col-span-6 relative h-[587px]">
          <Image
            className="rounded-xl"
            src="/art.jpg"
            fill
            alt="Window image"
          />
        </div>
        <div className="col-span-12 lg:col-span-6">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className=" space-y-6">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem className="flex flex-col   justify-center">
                    <FormControl>
                      <input
                        className="border-b border-black/50 placeholder:text-lg font-thin p-2 w-full sm:w-[500px] bg-muted"
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
                        className="border-b border-black/50 placeholder:text-lg font-thin p-2 w-full sm:w-[500px] bg-muted"
                        placeholder="Numer telefonu"
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
                        className="border-b border-black/50 placeholder:text-lg font-thin p-2 w-full sm:w-[500px] bg-muted"
                        placeholder="Opisz nam swój problem..."
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
                      <label className=" w-64 h-64 border-2 p-5 border-dashed border-gray-400 rounded-md cursor-pointer flex flex-col justify-center items-center hover:bg-gray-100 text-gray-400 sm:w-[500px]">
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
                              Dodaj zdjęcia lub projekt jeśli posiadasz.
                            </span>
                          </span>
                        )}
                        <input
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
                          className="hidden"
                        />
                      </label>
                    </FormControl>
                    <FormDescription className="text-muted-foreground sm:w-[500px]">
                      Plik musi być w formacie jpg, png, jpeg, webp lub pdf.
                      Załączony plik nie może być większy niż 10MB.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className=" flex justify-center">
                <Button className="w-full sm:w-[500px] " type="submit">
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
