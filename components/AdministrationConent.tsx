import React from 'react'
import { ManagerMealUpdateModal } from './ManagerMealUpdate'
import { Button } from "@/components/ui/button"
import { role,userid } from '@/utils/cookiesNames'
import { getCookie } from '@/utils/cookiesFunction'
import AllUsersShow from './AllUserShow'
import { RoleUpdateModal } from './RoleUpdateModal'
const AdministrationConent = () => {
    const myrole = getCookie(role);
    const adminId = getCookie(userid);

  return (
    <div className=' w-full h-full p-10 pr-14'>
        <div className='w-full flex justify-between '>
            <div className='text-black text-3xl font-bold sm:xl'>Administration Page </div>
          
            
        </div>
        <div className='w-full h-1 bg-slate-500 my-8'></div>

       
        <div className='text-xl text-black font-bold sm:xl my-8'>Custom Update Player's meals</div>
        {myrole==='manager'  && <ManagerMealUpdateModal>
            <Button ></Button>
          </ManagerMealUpdateModal>}

          {myrole!=='manager'  && <div><Button className='bg-black text-white hover:text-black'>Update Meal</Button> <div className='text-black my-5'>You can't update others meal, because you are bloody player not manager.</div></div>}
        

          
          {myrole==='manager'  && <div className='text-xl text-black font-bold sm:xl my-16'>Assign a player as manager</div>}
          {myrole!=='manager'  && <div className='text-xl text-black font-bold sm:xl my-16'>All Last Night Playarz</div>}
            <AllUsersShow/>
        {/* <UserList /> */}
        {(myrole==='manager' || adminId==='9')  && <div className='my-8'><RoleUpdateModal>
            <Button ></Button>
          </RoleUpdateModal></div>}



    </div>
  )
}

export default AdministrationConent