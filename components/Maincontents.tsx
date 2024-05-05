
import React, { useState } from 'react';
import AllMealShow from './mealsTable';
import DinnerMealShow from './dinnerTable';
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import useGetAllMeals from '@/utils/getAllMealsHook';

type DateComponent = {
  month: string;
  setMonth: React.Dispatch<React.SetStateAction<string>>;
};

type YearComponent = {
  year: string;
  setYear: React.Dispatch<React.SetStateAction<string>>;
};

type MealDetailsTypes = {
  date: string;
  bipulLunch: string;
  bipulLunchCount: number;
  bipulDinner: string;
  bipulDinnerCount: number;
  
  shamimLunch: string;
  shamimLunchCount: number;
  shamimDinner: string;
  shamimDinnerCount: number;

  fardeenLunch: string;
  fardeenLunchCount: number;
  fardeenDinner: string;
  fardeenDinnerCount: number;

  rifaatLunch:string;
  rifaatLunchCount: number;
  rifaatDinner:string;
  rifaatDinnerCount: number;

  nafiLunch: string;
  nafiLunchCount:number;
  nafiDinner: string;
  nafiDinnerCount: number;
}




const MonthsSelect: React.FC<DateComponent> = ({ month, setMonth }) => {
  // Adding 1 to convert from zero-based to one-based

// console.log("Current month:", currentMonth);

 // 


 return (
   <DropdownMenu>
     <DropdownMenuTrigger asChild>
       <Button variant="outline" className="text-white">Select Month</Button>
     </DropdownMenuTrigger>
     <DropdownMenuContent className="w-56">
       <DropdownMenuLabel> Month List</DropdownMenuLabel>
       <DropdownMenuSeparator />
       <DropdownMenuRadioGroup value={month} onValueChange={setMonth}>
         <DropdownMenuRadioItem value="1">January</DropdownMenuRadioItem>
         <DropdownMenuRadioItem value="2">February</DropdownMenuRadioItem>
         <DropdownMenuRadioItem value="3">March</DropdownMenuRadioItem>
         <DropdownMenuRadioItem value="4">April</DropdownMenuRadioItem>
         <DropdownMenuRadioItem value="5">May</DropdownMenuRadioItem>
         <DropdownMenuRadioItem value="6">June</DropdownMenuRadioItem>
         <DropdownMenuRadioItem value="7">July</DropdownMenuRadioItem>
         <DropdownMenuRadioItem value="8">August</DropdownMenuRadioItem>
         <DropdownMenuRadioItem value="9">Sepetember</DropdownMenuRadioItem>
         <DropdownMenuRadioItem value="10">October</DropdownMenuRadioItem>
         <DropdownMenuRadioItem value="11">November</DropdownMenuRadioItem>
         <DropdownMenuRadioItem value="12">December</DropdownMenuRadioItem>
       </DropdownMenuRadioGroup>
     </DropdownMenuContent>
   </DropdownMenu>
 )
}

const YearSelect: React.FC<YearComponent> = ({ year, setYear }) => {
 const currentDate = new Date();
 const currentYear = currentDate.getFullYear() ; 
 
 // console.log("Current month:", currentMonth);
 
   
 
  
   return (
     <DropdownMenu>
       <DropdownMenuTrigger asChild>
         <Button variant="outline" className="text-white">{year}</Button>
       </DropdownMenuTrigger>
       <DropdownMenuContent className="w-56">
         <DropdownMenuLabel> Years List</DropdownMenuLabel>
         <DropdownMenuSeparator />
         <DropdownMenuRadioGroup value={year} onValueChange={setYear}>
           <DropdownMenuRadioItem value="2024">2024</DropdownMenuRadioItem>
           <DropdownMenuRadioItem value="2025">2025</DropdownMenuRadioItem>
           <DropdownMenuRadioItem value="2026">2026</DropdownMenuRadioItem>
           
          
         </DropdownMenuRadioGroup>
       </DropdownMenuContent>
     </DropdownMenu>
   )
}

const Maincontents = () => {
  //date time

  const currentDate = new Date();
const currentMonth = currentDate.getMonth() + 1;
const currentYear = currentDate.getFullYear() ; 


  const [month, setMonth] = React.useState(`${currentMonth}`);
  const [year, setYear] = React.useState(`${currentYear}`);

  const [searchClicked, setSearchClicked] = useState(true);
  const [refreshKey, setRefreshKey] = useState(0);
  const [searchKey, setSearchKey] = useState(0);
  const [data, setData] = React.useState<MealDetailsTypes[]>([]);


  const {mealsList, getMealDetails} = useGetAllMeals();

  async function getAllUpcomingVehicles() {
    
    await getMealDetails(month,year);
  }

  React.useEffect(() => {
    getAllUpcomingVehicles();
  }, []);

  React.useEffect(() => {
    setData(mealsList);
  }, [mealsList]);

    const handleButtonClick = async () => {

    
      //   try{
      //       const response = await getMealDetails('5','2024');
      //       const data = await response;
      // //  setMessage(data.message);
      // console.log(response);
      //     }catch(e){
      //       console.error('Error:', e);
      //     }
      // setSearchClicked(false);
      // setSearchClicked(true);
      // setRefreshKey(refreshKey + 1); 

      getAllUpcomingVehicles();
      console.log(month);
      console.log(year);
      };



  return (
    <div className='text-black w-full h-full p-10 pr-14'>
        <div className='w-full flex justify-between '>
            <div className='text-3xl font-bold sm:xl'>Meals Page </div>
            <div>Update meal </div>
        </div>
        <div className='w-full h-1 bg-slate-500 my-8'></div>
        <MonthsSelect month={month} setMonth={setMonth}/>
    <div className="w-[10px] inline-block"></div>
    <YearSelect year={year} setYear={setYear}/>
    <div className="w-[10px] inline-block"></div>
    <Button className='text-white bg-black hover:text-black' onClick={handleButtonClick}>Search</Button>
          <AllMealShow  data={data} />
          <DinnerMealShow data={data} />
    </div>
  )
}

export default Maincontents