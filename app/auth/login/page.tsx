"use client"

import * as React from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Icons } from "@/components/ui/icons"
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs"
import { useState } from "react"
import {  useRouter } from "next/navigation"



export default function LoginForm() {
  const [isLoading, setIsLoading] = React.useState<boolean>(false)
  
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const router = useRouter()
    const supabase = createClientComponentClient()

    const handleSignIn = async (e:any)=>{
      e.preventDefault()
      setIsLoading(true)
      await supabase.auth.signInWithPassword({
        email,
        password,
      })
      
      setIsLoading(false)
      router.push('/dashboard')
      
     
  
    }





  return (

  <div className="flex min-h-screen w-full flex-col">
      <header className="sticky top-0 flex h-16 items-center gap-4 border-b bg-background px-4 md:px-6">
      <nav className="hidden flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6">
       
       </nav>
        </header>


    <div className="flex items-center justify-center flex-grow">
      <Card className="mx-auto max-w-sm">
      <CardHeader>
      <CardTitle className="text-xl">Login</CardTitle>
        <CardDescription>
          Enter your email below to login to your account
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid gap-4">
          <div className="grid gap-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="m@example.com"
              required
            />
          </div>
          <div className="grid gap-2">
            <div className="flex items-center">
              <Label htmlFor="password">Password</Label>
              <Link href="#" className="ml-auto inline-block text-sm underline">
                Forgot your password?
              </Link>
            </div>
            <Input id="password" type="password" required />
          </div>
          <Button type="submit" className="w-full" onSubmit={handleSignIn}>
            Login
          </Button>
          <Button variant="outline"  type="button" disabled={isLoading}>
        {isLoading ? (
          <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
        ) : (
          <Icons.gitHub className="mr-2 h-4 w-4" />
        )}{" "}
        GitHub
      </Button>

        </div>
        <div className="mt-4 text-center text-sm">
          Don&apos;t have an account?{" "}
          <Link href="/register" className="underline" type="submit" >
            Sign up
          </Link>
        </div>
      </CardContent>
    </Card>
    </div>
    </div>
  )
}
