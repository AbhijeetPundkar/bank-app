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
import { Field, FieldPath, Form } from "react-hook-form";
import { Control } from 'react-hook-form';
import { authFormSchema } from '@/lib/utils';
import { z } from 'zod'; 

interface CustomInputProps {
    control: Control<z.infer<typeof authFormSchema>>,
    name: FieldPath<z.infer<typeof authFormSchema>>,
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
                      className = "input-class"
                      type={name === 'password' ? 'password' : 'text'}
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