import { HTMLInputTypeAttribute } from "react";
import { FormControl, FormField, FormLabel, FormMessage } from "./ui/form";
import { Input } from "./ui/input";
import { authFormSchema } from "@/lib/utils";
import { Control, FieldPath } from "react-hook-form";
import { z } from "zod";

const formSchema = authFormSchema("sign-up");

interface customAuthFormFieldProps {
  control: Control<z.infer<typeof formSchema>>;
  name: FieldPath<z.infer<typeof formSchema>>;
  label?: string;
  placeholder: string;
  type?: HTMLInputTypeAttribute | undefined;
}

const CustomAuthFormField = ({
  control,
  name,
  label = name,
  placeholder,
  type = "text",
}: customAuthFormFieldProps) => {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <div className="form-item w-full">
          <FormLabel className="form-label">{label}</FormLabel>
          <div className="flex w-full flex-col">
            <FormControl>
              <Input
                placeholder={placeholder}
                className="input-class"
                type={type}
                {...field}
              />
            </FormControl>
            <FormMessage className="mt-2 form-message" />
          </div>
        </div>
      )}
    />
  );
};
export default CustomAuthFormField;