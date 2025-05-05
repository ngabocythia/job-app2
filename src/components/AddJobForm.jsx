"use client"

import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "./ui/textarea"
import { AddItem } from "@/lib/actions/addItem"

const formSchema = z.object({
  jobName: z.string().min(2).max(50),
  location: z.string().min(2).max(50),
  description: z.string().min(2).max(5000),
})


const AddJobForm = () => {
  // 1. Define your form.
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      jobName: "",
      location: "",
      description: "",
    },
  })
 
  const handleAddItem =  async(e) => {
    e.preventDefault();
    
    
    const formData = new FormData(e.target);
    const itemData = {
      jobName: formData.get("jobName"),
      location: formData.get("location"),
      description: formData.get("description"),
     
    };
    console.log(itemData);
  
    const response = await AddItem(itemData);
    console.log(response);
  };
  return (
    <Form {...form}>
      <form onSubmit={(e)=>handleAddItem(e)} className="space-y-8">
        <div className="flex gap-2  items-center justify-between w-full">
        <FormField
          control={form.control}
          name="jobName"
          render={({ field }) => (
            <FormItem className={'w-full '}>
              <FormLabel>Job Name</FormLabel>
              <FormControl>
                <Input className={'border-indigo-200'}  {...field} name="jobName" />
              </FormControl>
              
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="location"
          render={({ field }) => (
            <FormItem className={'w-full '}>
              <FormLabel>Location</FormLabel>
              <FormControl>
                <Input className={'border-indigo-200'} {...field} name="location"/>
              </FormControl>
              
              <FormMessage />
            </FormItem>
          )}
        />
        </div>

        <div className="flex gap-2  items-center justify-between w-full">
        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem className={'w-full '}>
              <FormLabel>Job Details</FormLabel>
              <FormControl>
                <Textarea name="description" placeholder="Enter job details" className={'border-indigo-200 h-40'} {...field} />
              </FormControl>
              
              <FormMessage />
            </FormItem>
          )}
        />
        
        </div>
        <div className="flex gap-2  items-center justify-end cursor-pointer w-full">
        <Button type="submit" className={'cursor-pointer'}>Add job</Button>
        </div>
      </form>
    </Form>
  )
}


export default AddJobForm