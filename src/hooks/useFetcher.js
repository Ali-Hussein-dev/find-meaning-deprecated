// import { useEffect, useState } from "react";
import axios from "axios";
// import * as vars from "./variables";
import { xRapidapiKey } from "./_privateVariables";

//------------------------------------fetcher for searchMachine
export const fetcher = async (xHostUrl, entireUrl) => {
  try {
    const response = await axios(entireUrl, {
      method: "GET",
      headers: {
        "x-rapidapi-host": xHostUrl,
        "x-rapidapi-key": xRapidapiKey,
      },
    });
    return response;
  } catch (error) {
    console.log(error);
  }
};

export const fetcher2 = async (url, token) => {
  try {
    const response = await axios(url, {
      method: "GET",
      headers: {
        Authorization: token,
      },
    });
    return response;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

// const useFetcher = (xHostUrl, entireUrl) => {
//   const [data, setData] = useState([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios(entireUrl, {
//           method: "GET",
//           headers: {
//             "x-rapidapi-host": xHostUrl,
//             "x-rapidapi-key": xRapidapiKey,
//           },
//         });
//         setData(response.data);
//       } catch (error) {
//         console.log(error);
//       }
//     };
//     fetchData();
//   });
// //  [entireUrl] is removed
//   return [data];
// };

// export default useFetcher;
