import { useState, useEffect } from "react";
import axios from "axios";
import { uri } from "./constant";

// import { jwtToken } from "@/data/cookieNames";
// import { getCookie } from "@/lib/cookieFunctions";




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

type UserMeals = {
  date: string;
  lunchmeal: string;
  lunchcount: number;
  dinner: string;
  dinnercount: number;
}

interface Meal {
  date: string;
  lunchmeal: string;
  lunchcount: number;
  dinner: string;
  dinnercount: number;
}


export default function useGetAllMeals () {
  const [mealsList, setMealsList] = useState<MealDetailsTypes[]>([]); // Initialize with an empty array of Vehicle objects
  const [bipulList, setBipulList] = useState<UserMeals[]>([]);
  const [shamimList, setShamimList] = useState<UserMeals[]>([]);
  const [fardeenList, setFardeenList] = useState<UserMeals[]>([]);
  const [rifaatList, setRifaatList] = useState<UserMeals[]>([]);
  const [nafiList, setNafiList] = useState<UserMeals[]>([]);
  let messMeal: MealDetailsTypes[] = [];

   const getMealDetails = async (
    month: string,
    year: string,

   ) => {
    try {
      const res = await axios.get(`${uri}/mealsDetails?month=${month}&messid=5&year=${year}` );
      // Assuming the response data is an array of vehicles
    //  console.log(res.data);
        const BipulAllMeals: UserMeals[] = res.data.Bipul?.map((meal: Meal) => ({

        date: meal.date,
      lunchmeal: meal.lunchmeal,
     lunchcount: meal.lunchcount,
       dinner: meal.dinner,
      dinnercount: meal.dinnercount,
    
      }));
      setBipulList(BipulAllMeals);
     // console.log(bipulList);


      const ShamimAllMeals: UserMeals[] = res.data.Shamim?.map((meal: Meal) => ({

        date: meal.date,
        lunchmeal: meal.lunchmeal,
       lunchcount: meal.lunchcount,
         dinner: meal.dinner,
        dinnercount: meal.dinnercount,
    
      }));
      setShamimList(ShamimAllMeals);

      const FardeenAllMeals: UserMeals[] = res.data.Fardeen?.map((meal: Meal) => ({

        date: meal.date,
      lunchmeal: meal.lunchmeal,
     lunchcount: meal.lunchcount,
       dinner: meal.dinner,
      dinnercount: meal.dinnercount,
    
      }));
      setFardeenList(FardeenAllMeals);

      const RifaatAllMeals: UserMeals[] = res.data.Rifaat?.map((meal: Meal) => ({

        date: meal.date,
        lunchmeal: meal.lunchmeal,
       lunchcount: meal.lunchcount,
         dinner: meal.dinner,
        dinnercount: meal.dinnercount,
    
      }));
      setRifaatList(RifaatAllMeals);

      const NafiAllMeals: UserMeals[] = res.data.Nafi?.map((meal: Meal) => ({

        date: meal.date,
      lunchmeal: meal.lunchmeal,
     lunchcount: meal.lunchcount,
       dinner: meal.dinner,
      dinnercount: meal.dinnercount,
    
      }));
      setNafiList(NafiAllMeals);


      
    //   const AllMeals: MealDetailsTypes[] = bipulList.map((vehicle: any) => ({

    //     date: vehicle.Bipul.date,
    // bipulLunch: vehicle.Bipul.lunchmeal,
    // bipulLunchCount: vehicle.Bipul.lunchcount,
    // bipulDinner: vehicle.Bipul.dinner,
    // bipulDinnerCOunt: vehicle.Bipul.dinnercount,
    
    // shamimLunch: vehicle.Shamim.lunchmeal,
    // shamimLunchCount: vehicle.Shamim.lunchcount,
    // shamimDinner: vehicle.Shamim.dinner,
    // shamimDinnerCount: vehicle.Shamim.dinnercount,

    // fardeenLunch: vehicle.Fardeen.lunchmeal,
    // fardeenLunchCount: vehicle.Fardeen.lunchcount,
    // fardeenDinner: vehicle.Fardeen.dinner,
    // fardeenDinnerCount: vehicle.Fardeen.dinnercount,

    // rifaatLunch:vehicle.Rifaat.lunchmeal,
    // rifaatLunchCount: vehicle.Rifaat.lunchcount,
    // rifaatDinner: vehicle.Rifaat.dinner,
    // rifaatDinnerCount: vehicle.Rifaat.dinnercount,

    // nafiLunch: vehicle.Nafi.lunchmeal,
    // nafiLunchCount:vehicle.Nafi.lunchcount,
    // nafiDinner: vehicle.Nafi.dinner,
    // nafiDinnerCount: vehicle.Nafi.dinnercount
    //   }));
     

      //setMealsList(AllMeals);
      

      return true;
    } catch (error: any) {
      console.log(error);
      return false;
    }
  }
  useEffect(() => {
    // console.log(bipulList);
    // console.log(fardeenList);
    // console.log(shamimList);
    // console.log(nafiList);
    // console.log(rifaatList);
    const len = bipulList?.length || 0;
//console.log(len);

   if(len !== 0){

for (let i = 0; i < bipulList.length; i++) {
    const dailyMeal = {
        date: bipulList[i].date,
        bipulLunch: `${bipulList[i].lunchmeal} (${bipulList[i].lunchcount})`,
        bipulLunchCount: bipulList[i].lunchcount,
        bipulDinner: `${bipulList[i].dinner} (${bipulList[i].dinnercount})`,
        bipulDinnerCount: bipulList[i].dinnercount,
        shamimLunch: `${shamimList[i].lunchmeal} (${shamimList[i].lunchcount})`,
        shamimLunchCount: shamimList[i].lunchcount,
        shamimDinner: `${shamimList[i].dinner} (${shamimList[i].dinnercount})`,
        shamimDinnerCount: shamimList[i].dinnercount,

          fardeenLunch: `${fardeenList[i].lunchmeal} (${fardeenList[i].lunchcount})`,
    fardeenLunchCount: fardeenList[i].lunchcount,
    fardeenDinner: `${fardeenList[i].dinner} (${fardeenList[i].dinnercount})`,
    fardeenDinnerCount: fardeenList[i].dinnercount,

    rifaatLunch: `${rifaatList[i].lunchmeal} (${rifaatList[i].lunchcount})`,
    rifaatLunchCount: rifaatList[i].lunchcount,
    rifaatDinner: `${rifaatList[i].dinner} (${rifaatList[i].dinnercount})`,
    rifaatDinnerCount: rifaatList[i].dinnercount,

    nafiLunch: `${nafiList[i].lunchmeal} (${nafiList[i].lunchcount})`,
    nafiLunchCount: nafiList[i].lunchcount,
    nafiDinner: `${nafiList[i].dinner} (${nafiList[i].dinnercount})`,
    nafiDinnerCount: nafiList[i].dinnercount
    };
    
    messMeal.push(dailyMeal);
    // Assuming you want to push each dailyMeal object to messMeal
   
}
    
//console.log(messMeal);
setMealsList(messMeal);

   }

  }, [bipulList]);

  return { mealsList, getMealDetails };
}