"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Mail } from "lucide-react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import axios from "axios";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import EmailButton from "@/components/EmailButton";

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  message: z.string().min(10, {
    message: "Message must be at least 10 characters.",
  }),
});

export default function ContactForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const router = useRouter();
  const { isSubmitting, isValid } = form.formState;

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      const response = await axios.post(`/api/contact`, values);
      toast.success("Detials sent");
      router.refresh();
    } catch (error) {
      toast.error("Something went wrong");
    }
  };
  return (
    <div className="w-full  bg-[#161616] text-white">
      <div className="max-w-4xl mx-auto p-6 mt-20">
        <h1 className="text-4xl font-bold mb-4">Contact</h1>
        <p className="text-gray-400 mb-6">
          Ready to start your project? Get in touch with us today! Our team is
          eager to discuss how we can help you achieve your digital goals.
        </p>
        <div className="flex space-x-4 mb-8">
        <EmailButton
              emailAddress="mailto:support@nexadevs.pro"
              subject="Inquiry about nexa"
              body={`Dear Nexa Support Team,

                I hope this email finds you well. I recently came across your services and I'm interested in learning more about how Nexa can help my business.
                
                Specifically, I'd like to inquire about:
                1. The range of services you offer
                2. Your pricing structure
                3. Typical timelines for project completion
                4. Any case studies or success stories you can share
                
                I'm looking forward to hearing back from you and potentially discussing how we can work together.
                
                Thank you for your time and assistance.
                
                Best regards, `}
            />
        </div>
        <Card className="bg-[#1C1C1C] border-zinc-800">
          <CardHeader>
            <CardTitle className="text-xl text-white">Send a message</CardTitle>
          </CardHeader>
          <CardContent>
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-8"
              >
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-white">Name</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Name"
                          className="bg-zinc-800 border-zinc-700 text-white placeholder-gray-400"
                          {...field}
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
                      <FormLabel className="text-white">Email</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Email"
                          className="bg-zinc-800 border-zinc-700 text-white placeholder-gray-400"
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
                    <FormItem>
                      <FormLabel className="text-white">Message</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Message"
                          className="bg-zinc-800 border-zinc-700 text-white placeholder-gray-400 mb-4"
                          rows={6}
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button
                  className="w-full  text-white "
                  type="submit"
                  disabled={!isValid || isSubmitting}
                >
                  Submit
                </Button>
              </form>
            </Form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
