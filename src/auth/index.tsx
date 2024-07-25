"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const authSchema = z.object({
  memberId: z.string().min(1, {
    message: "Please enter valid username",
  }),
  organisationPassword: z.string().min(8, {
    message: "Password must be of minimum 8 characters",
  }),
});

function AuthComponent() {
  const form = useForm<z.infer<typeof authSchema>>({
    resolver: zodResolver(authSchema),
    defaultValues: {
      memberId: "",
      organisationPassword: "",
    },
  });

  function onSubmit(values: z.infer<typeof authSchema>) {
    console.log(values);
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-5 pb-40 pt-5 flex flex-col items-center"
      >
        <FormField
          control={form.control}
          name="memberId"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Username</FormLabel>
              <FormControl>
                <Input
                  placeholder="Add your unique member Id"
                  {...field}
                  className="w-screen md:max-w-screen-sm max-w-xs"
                />
              </FormControl>
              <FormDescription className="text-xs">
                Unique member id must be numeric value
              </FormDescription>
              <FormMessage className="text-xs text-rose" />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="organisationPassword"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input
                  placeholder="Please add your organisation password"
                  className="w-screen md:max-w-screen-sm max-w-xs"
                  {...field}
                />
              </FormControl>
              <FormDescription className="text-xs">
                Please enter your organisation password
              </FormDescription>
              <FormMessage className="text-xs text-rose" />
            </FormItem>
          )}
        />
        <Button type="submit" className="w-screen md:max-w-screen-sm max-w-xs">
          Login
        </Button>
      </form>
    </Form>
  );
}

export default AuthComponent;
