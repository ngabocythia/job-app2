'use client'

import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../components/ui/dialog";
import AddJobForm from "./AddJobForm";
import { Button } from "./ui/button";

const AddJob = () => {

  const [openModel, setOpenModel ] = useState(false)
  return (
    <Dialog openModel={openModel} onOpenChange={()=>setOpenModel(!openModel)}>
      <DialogTrigger><p className="cursor-pointer">Add Job</p></DialogTrigger>
      <DialogContent className={'border-white/10'}>
        <DialogHeader>
          <DialogTitle className={'mb-12 capitalize'}> Details of job</DialogTitle>
            
            <AddJobForm/>
          <DialogDescription>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default AddJob;
