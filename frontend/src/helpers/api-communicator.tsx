import axios from "axios";

export const loginUser = async (email:string, password:string)=>{
    const res = await axios.post("/user/login",
        {email,password}
    );
    if (res.status !== 200){
        throw new Error("Unable to login");
    }
    const data = await res.data;
    return data;
};

export const signupUser = async (
    name: string,
    email: string,
    password: string
  ) => {
    const res = await axios.post("/user/signup", { name, email, password });
    if (res.status !== 201) {
      throw new Error("Unable to Signup");
    }
    const data = await res.data;
    return data;
  };

  export const logoutUser = async () => {
    const res = await axios.get("/user/logout");
    if (res.status !== 200) {
      throw new Error("Unable to delete chats");
    }
    const data = await res.data;
    return data;
  };


export const checkAuthStatus = async() => {
    const res = await axios.get("/user/auth-status");
    if (res.status !== 200){
        throw new Error("Unable to Authenticate");
    }
    const data = await res.data;
    console.log(data);
    
    return data;
};

export const sendChatRequest = async(message:string) => {
    const res = await axios.post("/chat/new", {message});
    
    if (res.status !== 200){
        
        throw new Error("Unable to Send Chat");
    }
    const data = await res.data;
    
    return data;
};

// export const sendChatRequest = async (message: string) => {
//     try {
        
//         const res = await axios.post("/chat/new", { message });
//         console.log("Response received:", res);

//         if (res.status !== 200) {
//             console.error("Unexpected status code:", res.status);
//             throw new Error("Unable to Send Chat");
//         }

//         const data = res.data;
//         return data;

//     } catch (error) {
//         if (axios.isAxiosError(error)) {
//             console.error("Axios error message:", error.message);
//             console.error("Axios error response:", error.response);
//         } else {
//             console.error("General error:", error);
//         }
//         throw new Error("Unable to Send Chat");
//     }
// };

