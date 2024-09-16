  import axios from "axios";

  const Instance = axios.create({
    baseURL: "https://api.tkmscraps.com", 
    timeout: 20000,
  });


  export default Instance;
