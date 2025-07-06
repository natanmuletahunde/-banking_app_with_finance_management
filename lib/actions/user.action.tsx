'use server'

import { ID } from "node-appwrite";
import { createAdminClient, createSessionClient } from "../appwrite";
import { cookies } from "next/headers";
import { parseStringify } from "../utils";

export const signIn = async () => {
  try {

  } catch (error) {
    console.log(error);
  }
}
export const signUp = async (userData: SignUpParams) => {
  const { email, password, firstName, lastName } = userData
  try {
    console.log("Creating user with:", userData) // ✅ log form values

    const { account } = await createAdminClient()

    const newUserAccount = await account.create(
      ID.unique(),
      email,
      password,
      `${firstName} ${lastName}`
    )

    const session = await account.createEmailPasswordSession(email, password)

    ;(await cookies()).set("appwrite-session", session.secret, {
      path: "/",
      httpOnly: true,
      sameSite: "strict",
      secure: true,
    })

    return parseStringify(newUserAccount)
  } catch (error) {
    console.error("Appwrite signUp error:", error) // ✅ log Appwrite errors
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


