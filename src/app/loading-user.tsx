'use client'

import { useAuth } from "@kobbleio/next/client";

export default function LoadingUser({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>){

    const {isLoading, user} = useAuth()

    console.log({user})

    if (isLoading) return <span>loading user..</span>

    return (
        <>
            {children}
        </>
    )
  }