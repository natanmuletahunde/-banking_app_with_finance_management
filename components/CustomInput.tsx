import React from 'react'
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from './ui/form'
import { Input } from './ui/input'
import {Control, FieldPath, } from  'react-hook-form'
import z from 'zod'
import { authFormSchema } from '@/lib/utils'


const formSchema = authFormSchema('sign-up')
interface CustomInput {
    control  : Control<z.infer<typeof formSchema>>,
    name: FieldPath<z.infer<typeof formSchema>>,
    placeholder: string,
    label: string, 
}

 const CustomInput = ({ control, name ,placeholder, label, }) => {
  return (
    <FormField
              control={control}
              name={name}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{label}</FormLabel>
                  <FormControl>
                    <Input
                      placeholder={placeholder}
                      className='input-class'
                       type={name === 'password' ? 'password' : 'text'}
                    />
                  </FormControl>
                  <FormMessage className="text-red-500 text-sm mt-1" />
                </FormItem>
              )}
            />
  )
}

export default CustomInput