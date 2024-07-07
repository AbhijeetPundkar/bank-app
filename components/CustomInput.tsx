import React from 'react'
import {
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
  } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { string } from 'zod'
import { Form } from "react-hook-form";

interface CustomInputProps {
    control: Control,
    name: string,
    label: string,
    placeholder: string
}

const CustomInput = ({control,name,label,placeholder}: CustomInputProps ) => {
  return (
    <div>
        <FormField
              control={control}
              name={name}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{label}</FormLabel>
                  <FormControl>
                    <Input
                      placeholder={placeholder}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage className="form-message mt-2" />
                </FormItem>
              )}
            />
    </div>
  )
}

export default CustomInput