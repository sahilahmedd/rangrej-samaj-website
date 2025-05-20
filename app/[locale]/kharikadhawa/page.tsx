import React from 'react'
import Kkdhero from '@/components/kharikadhawa/Kkdhero'
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import KkdEvents from '@/components/kharikadhawa/KkdEvents';



const page = () => {
  return (
    <main className="flex min-h-screen flex-col">
     <Kkdhero />


     {/* Sections */}
     <KkdEvents />
    </main>
  )
}

export default page
