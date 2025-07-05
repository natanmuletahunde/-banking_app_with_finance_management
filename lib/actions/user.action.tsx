'user server'

import { createSessionClient } from "../appwrite";

export const signIn = async ()=> {
    try {
            
    } catch (error) {
         console.log(error); 
    }
}
export  const  signUp = async ()=> {
  try {
    
  } catch (error) {
      console.log(error); 
  }
}
 

export async function getLoggedInUser() {
  try {
    const { account } = await createSessionClient();
    return await account.get();
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (error) {
    return null;
  }
}


