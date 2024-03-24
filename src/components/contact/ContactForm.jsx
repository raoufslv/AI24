import { useRef } from "react";

import SubmitButton from "@/components/customUI/forms/SubmitButton";
import FormInput from "@/components/customUI/forms/FormInput";
import FormTextarea from "@/components/customUI/forms/FormTextarea";
import ErrorMessage from "@/components/customUI/forms/ErrorMessage";
import emailjs from "@emailjs/browser";
import { useToast } from "@/components/ui/use-toast";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const ContactFormSchema = z.object({
  name: z.string().min(2).max(50),
  number: z.string().optional(),
  email: z.string().email(),
  subject: z.string().min(8).max(2000),
});

export default function ContactForm() {
  const formRef = useRef(null);
  const { toast } = useToast();
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
    setValue,
  } = useForm({
    defaultValues: {
      name: "",
      number: "",
      email: "",
      subject: "",
    },
    resolver: zodResolver(ContactFormSchema),
  });

  const onSubmit = async (data) => {
    try {
      const response = await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        data,
        import.meta.env.VITE_EMAILJS_USER_ID
      );

      if (response.status !== 200) {
        throw new Error("Failed to send message. Please try again later");
      }

      // Show success message
      toast({
        variant: "success",
        title: "Message sent successfully",
        description: "We will get back to you soon",
      });

      // Clear the data object
      setValue("name", "");
      setValue("number", "");
      setValue("email", "");
      setValue("subject", "");
    } catch (error) {
      setError("root", {
        type: "manual",
        message: error.message,
      });
    }
  };

  return (
    <form
      ref={formRef}
      action=""
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-4 bg-white dark:bg-black p-8 rounded-xl shadow-input w-full md:w-96"
    >
      <div className="flex flex-col gap-4">
        <FormInput
          register={register}
          errors={errors}
          id="name"
          name="Your name"
          placeholder="Enter your full name"
        />
        <FormInput
          register={register}
          errors={errors}
          id="number"
          name="Your number"
          placeholder="Enter your phone number"
        />

        <FormInput
          register={register}
          errors={errors}
          id="email"
          name="Your email"
          placeholder="Enter your email address"
        />
        <FormTextarea
          register={register}
          errors={errors}
          id="subject"
          name="Subject"
          placeholder="Enter your message subject"
        />
      </div>
      <div>
        <SubmitButton
          isSubmitting={isSubmitting}
          text="send message"
          loading="sending message..."
        />
        <ErrorMessage errors={errors} name="root" />
      </div>
    </form>
  );
}
