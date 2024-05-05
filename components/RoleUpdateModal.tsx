"use client";
import React, { useState, useEffect } from "react";

import { Button } from "@/components/ui/button";
import { userid } from "@/utils/cookiesNames";
import { getCookie } from "@/utils/cookiesFunction";

import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"
  
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import formatTimestamp from "@/lib/formatTimestamp";
import { updateMeal, updateRole } from "@/utils/meals";

interface DialogWrapperProps {
    children: React.ReactNode;
  }

export const RoleUpdateModal : React.FC<DialogWrapperProps> = ({
    children,
  }) => {
    const currentDate = new Date();
    const currentHour = currentDate.getHours();
  const currentMinutes = currentDate.getMinutes();
 
    const [selectPlayer, setSelectPlayer] = useState<string>('bipul');
    const [role, setRole] = useState<string>('bipul');
   

    const [showModalType, setShowModalType] = useState<string>('lunch');



  async function updateRoleFunc() {
   

    try {
     
      // console.log(selectedMeal);
      // console.log(newDateFormat);
      // console.log(count);
      // console.log(selectComment);
      // console.log(showModalType);
    
    
    const responseValue = await updateRole(selectPlayer, role)
       console.log(responseValue);
} catch (error) {
      console.error('Error fetching lunch count:', error);
    }
  }


  const handleButton = async () => {

    await updateRoleFunc();
  };



  useEffect(() => {
      if (currentHour > 10 || (currentHour === 10 && currentMinutes > 0)) {
        setShowModalType('lunch');
      } else {
        setShowModalType('dinner');
      }
     
  }, []);
  


  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Assign Role</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>{showModalType==='lunch' && <div className='text-white'>Assign Manager / messmate</div>}
          {showModalType==='dinner' && <div className='text-white'>Update Dinner Meal</div>}
          </DialogTitle>
          <DialogDescription>
      
            Whenever you are assigning another player as manager, please make sure you become user

          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
        <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="player" className="text-right">
             Players
            </Label>
            <Select value={selectPlayer} onValueChange={(e) => setSelectPlayer(e)}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Select a Player" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Player List</SelectLabel>
                  <SelectItem value="9">Nafi</SelectItem>
                  <SelectItem value="10">Shamim</SelectItem>
                  <SelectItem value="11">Rifaat</SelectItem>
                  <SelectItem value="12">Bipul</SelectItem>
                  <SelectItem value="13">Fardeen</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>


        

          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="role" className="text-right">
             Set Role
            </Label>
            <Select value={role} onValueChange={(e) => setRole(e)}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Select a Meal" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Meal Count</SelectLabel>
                  <SelectItem value="messmate">Messmate</SelectItem>
                  <SelectItem value="manager">Manager</SelectItem>

                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
          
        </div>
        <DialogFooter>
        <DialogClose asChild>
          <Button type="submit"
          onClick={handleButton} 
          >Save changes</Button>
          </DialogClose>
          
          {/* {statusDone && <div className='text-white'>Your meal is updated successfully ✅</div>} */}
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
