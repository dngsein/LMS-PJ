"use client";
import * as z from "zod";
import axios from "axios";
import { zodResolver } from "@hookform/resolvers/zod";

import { Form, FormControl, FormItem, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { title } from "process";
import { Pencil } from "lucide-react";
import { useForm } from "react-hook-form";

interface TitleFormProps {
  initialData: {
    title: string;
  };
  courseId: string;
}

const formShema = z.object({
  title: z.string().min(1, {
    message: "Title is required",
  }),
});

export const TitleForm = ({ initialData, courseId }: TitleFormProps) => {
  const form = useForm<z.infer<typeof formShema>>({
    resolver: zodResolver(formShema),
    defaultValues: initialData,
  });
  const { isSubmitting, isValid } = form.formState;
  const onSubmit = async (values: z.infer<typeof formShema>) => {
    console.log(values);
  };
  return (
    <div className="mt-6 border bg-slate-100 rounded-md p-4">
      <div className="font-medium flex items-center justify-between">
        Course Title
        <Button>
          <Pencil className="h-4 mr-2" />
        </Button>
      </div>
    </div>
  );
};
