import { getAuth } from "@kobbleio/next/server"

export default async function Protected(){

    const session = await getAuth()

    console.log({session})


    return <h2>Protected Route</h2>
}