"use client"
import { useState } from 'react'

import { Button } from '@/components/ui/button'

import { Input } from '@/components/ui/input'

const projectList = [ {
  id:1,
  name:"Wiki para Fans",
  upvoteCount: 100,
  tags:["React", "API", "Front-end", "Search Engine","useState"]
}, {
  id:2,
  name:"Wiki para Fans",
  upvoteCount: 100,
  tags:["React", "API", "Front-end", "Search Engine","useState"]
}, {
  id:3,
  name:"Autenticação",
  upvoteCount: 14,
  tags:["Backend", "Auth", "EJS", "JWT","CRUD"]
},
]
export default function Projects() {
  return (
    <div className={`box-border flex flex-row !mt-8 !md:mt-10 ml-auto mr-auto max-w-7xl`}>
      <main className="flex">
        <div className={`mb-12`}>
          <div className={`flex flex-col gap-10`}>
            <div className={`flex flex-row items-start border-b pb-2.5 gap-3`}>
              <h1 className={`text-2xl font-semibold text-dark-gray flex-1`}>Top Products Launching Today</h1>
              <div className={`flex flex-row items-center gap-3`}>
                <a href="#">Featured</a>
                <span className={`w-0.5 bg-gray-200 h-3.5`}></span>
                <a href="#">All</a>
              </div>
            </div>
            <div className={`font-normal sm:text-base text-sm text-light text-gray-600/100 mb-6 mt-0`}>
              For the first 4 hours of the day, we're hiding upvotes to help every product get a chance to catch your
              interest.
              <a className="text-sm sm:text-base font-normal text-blue-900" href="/stories/let-s-talk-about-spam">Read
                more</a>
            </div>
          </div>
        </div>
      </main>
      <aside className={`border-l w-1/4 ml-16 p-20`}>
        Teste
      </aside>
    </div>

  )
}