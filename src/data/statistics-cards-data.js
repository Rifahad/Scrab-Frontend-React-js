import {
  BanknotesIcon,
  UserPlusIcon,
  UsersIcon,
  ChartBarIcon,
} from "@heroicons/react/24/solid";
import axios from "axios";
import { useEffect } from "react";

const totalUserCount = ()=>{
  const response = axios.get('localhost:7000/dashboard/totalUserCount')
  console.log(response.data);
  

}

const totalAgentCount = ()=>{
  const response = axios.get('localhost:7000/dashboard/totalAgentCount')
  console.log(response.data);


}
const totalPickupCount = ()=>{
  const response = axios.get('localhost:7000/dashboard/totalPickupCount')
  console.log(response.data);


}

const totalAgentPickupCount = ()=>{
  const response = axios.get('localhost:7000/dashboard/totalAgentPickupCount')
  console.log(response.data);


}
// useEffect(()=>{
//   totalUserCount()
//   totalAgentCount()
//   totalPickupCount()
//   totalAgentPickupCount()
// })



export const statisticsCardsData = [
  {
    color: "gray",
    icon: BanknotesIcon,
    title: "Total Users",
    value: "13",
    footer: {
      color: "text-green-500",
      value: "+55%",
      label: "than last week",
    },
  },
  {
    color: "gray",
    icon: UsersIcon,
    title: "Total Company ",
    value: "2,300",
    footer: {
      color: "text-green-500",
      value: "+3%",
      label: "than last month",
    },
  },
  {
    color: "gray",
    icon: UserPlusIcon,
    title: "Total pickup  user Count",
    value: "3,462",
    footer: {
      color: "text-red-500",
      value: "-2%",
      label: "than yesterday",
    },
  },
  {
    color: "gray",
    icon: ChartBarIcon,
    title: "Total Company pickup count",
    value: "430",
    footer: {
      color: "text-green-500",
      value: "+5%",
      label: "than yesterday",
    },
  },
];

export default statisticsCardsData;
