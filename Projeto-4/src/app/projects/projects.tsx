"use client"
import { useState } from 'react'

import { Button } from '@/components/ui/button'

import { Input } from '@/components/ui/input'

const projectList = [ {
  id:1,
  name:"Wiki para Fans",
  desc: "Wiki Naruto",
  upvoteCount: 100,
  tags:["React", "API", "Front-end", "Search Engine","useState"],
  mainStack: "React"
}, {
  id:2,
  name:"Wiki para Fans",
  desc: "Wiki Naruto",
  upvoteCount: 100,
  tags:["React", "API", "Front-end", "Search Engine","useState"],
  mainStack: "React"

}, {
  id:3,
  name:"Autenticação",
  desc: "Wiki Naruto",
  upvoteCount: 14,
  tags:["Backend", "Auth", "EJS", "JWT","CRUD"],
  mainStack: "React"

},
]

export default function Projects() {
  return (
    <div className={`box-border flex flex-row !mt-8 !md:mt-10 ml-auto mr-auto max-w-7xl`}>
      <main className="flex">
        <div className={`mb-12`}>
          <div className={`flex flex-col gap-10`}>
            <div className={`bg-gray-100/100 relative flex flex-col rounded mb-12 p-5`}>
              <div className={`absolute right-2.5 top-2.5`}>
                <button type={`button`}>X</button>
              </div>
              <div className={`font-semibold text-2xl text-dark`}>
                Welcome to Project Hunt! 👋
              </div>
              <div className={`flex flex-row`}>
                <div className={`font-normal text-base text-light`}>
                  The place to launch and discover new tech projects.
                </div>
                <button type="button" className={`text-left text-base font-normal text-blue ml-1 cursor-pointer`}>Take a
                  tour.
                </button>
              </div>
            </div>
            <div id="section-0" className={`flex flex-row items-start border-b pb-2.5 gap-3 box-content`}>
              <h1 className={`text-2xl font-semibold text-dark-gray flex-1`}>Top Projects Launching Today</h1>
              <div className={`flex flex-row items-center gap-3`}>
                <a href="#">Featured</a>
                <span className={`w-0.5 bg-gray-200 h-3.5`}></span>
                <a href="#">All</a>
              </div>
            </div>
            <div className={`font-normal sm:text-base text-sm text-light text-gray-600/100 mb-6 mt-0`}>
              For the first 4 hours of the day, we're hiding upvotes to help every project get a chance to catch your
              interest.
              <a className="text-sm sm:text-base font-normal text-blue-900" href="/stories/let-s-talk-about-spam">Read
                more</a>
            </div>
            <div id="produtcs">
              {projectList.map((project) => (
                <>
                  <div className=" my-2 flex flex-1 flex-row gap-2 py-2 sm:gap-4"
                       data-test="post-item-478016">

                    <div className=" flex flex-1 flex-col sm:mr-4">
                      <a
                        className="text-14 sm:text-16 md:text-16 font-normal text-dark-gray styles_noOfLines-2__k_Ta_ styles_titleTaglineItem__d5Rut block"
                        data-test="post-name-478016" href="/posts/bardeen-3-0">
                        <strong>{project.name}</strong> <span className="opacity-50">—</span> {project.desc}
                        <svg xmlns="http://www.w3.org/2000/svg" width="13" height="14" viewBox="0 0 13 14"
                             className="relative ml-1 inline-block cursor-pointer text-gray-600 px-1 transition-all hover:stroke-coral">
                          <g fill="none" fillRule="evenodd" strokeWidth="1.5">
                            <path d="M9.6 4H4.2a2.4 2.4 0 0 0-2.4 2.4V10"></path>
                            <path d="m6.6 7 3-3-3-3m5.4 9v3H0"></path>
                          </g>
                        </svg>
                      </a>
                      <div className="flex flex-row items-center gap-2">
                        <div
                          className="text-sm font-semibold text-light-gray hover:text-coral styles_commentLink__VXAIF cursor-pointer">
                          <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" transform="matrix(-1, 0, 0, 1, 0, 0)" stroke="#b6b4b4">
                            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round">

                          </g><g id="SVGRepo_iconCarrier"> <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 13.5997 2.37562 15.1116 3.04346 16.4525C3.22094 16.8088 3.28001 17.2161 3.17712 17.6006L2.58151 19.8267C2.32295 20.793 3.20701 21.677 4.17335 21.4185L6.39939 20.8229C6.78393 20.72 7.19121 20.7791 7.54753 20.9565C8.88837 21.6244 10.4003 22 12 22Z" stroke="#ababab" strokeWidth="1.5"></path> </g></svg>                        </div>
                        <span className="relative -top-px text-sm text-light-gray opacity-45">•</span>
                        <a className="text-sm font-normal text-light-gray styles_underlinedLink__MUPq8"
                           href="/topics/productivity">Productivity</a>
                        <span className="relative -top-px text-sm text-light-gray opacity-45">•    </span>
                        <a className="text-sm font-normal text-light-gray styles_underlinedLink__MUPq8"
                           href="/topics/task-management">Task Management</a>
                        <span className="relative -top-px text-sm text-light-gray opacity-45">•</span>
                        <a className="text-sm font-normal text-light-gray styles_underlinedLink__MUPq8"
                           href="/topics/tech">Tech</a>
                      </div>
                    </div>
                    <button type="button" data-test="vote-button"
                            className="my-2 ml-2 mr-0 sm:ml-0 sm:mr-2">
                      <div className="flex flex-col items-center">
                        <div className="">
                        </div>
                        <div className="text-sm font-semibold text-light-gray styles_voteCountItem__zwuqk">281</div>
                      </div>
                    </button>
                  </div>
                </>
              ))
              }

            </div>
          </div>
        </div>
      </main>
      <aside className={`border-l w-1/4 ml-16 p-20 `}>
        <div className={`flex flex-col box-content `}>
          <a href={`#`} className={`text-sm font-semibold text-light text-gray-600/100 uppercase hover:text-orange-600  styles_link__C4Fnb mb-5`}>Recent Add <span>&rarr;</span></a>
          <div className={`flex flex-col gap-4`}>
            {projectList.map((project) => (
              <>
                <div className={`flex flex-col rounded border border-blue-100/100 py-4`}>
                  <div className={`flex flex-row cursor-pointer gap-2 borbder-b border-blue-100/100 pb-4 px-4`}>
                    <img loading="lazy"
                         src="https://ph-files.imgix.net/df9585dd-7bdf-40ff-b6f3-e592906df847.png?auto=compress&amp;codec=mozjpeg&amp;cs=strip&amp;auto=format&amp;w=30&amp;h=30&amp;fit=crop"
                         alt="FinGrow Finance" className="relative rounded"
                         width={30}
                        height={30}
                    />
                  </div>
                  <div className={`overflow-ellipsis font-normal text-dark text-sm mt-1`}> <strong>{ project.name}</strong> {project.desc}
                  </div>
                  <div className={`flex flex-row items-center justify-between px-4`}>
                    <div className={`flex flex-row flex-wrap items-center gap-1`}>
                      <div className={`font-medium text-sm text-dark`}>
                        Shouted-out
                      </div>
                      <div className={`flex flex-row items-center`}>
                        <img loading="lazy"
                             src="https://ph-files.imgix.net/c60d78df-e572-4765-803b-d0a08c7ed6fe.png?auto=compress&amp;codec=mozjpeg&amp;cs=strip&amp;auto=format&amp;w=14&amp;h=14&amp;fit=crop"
                             alt="Swift" className="rounded pr-1" data-test="Swift-thumbnail"
                             width={14}
                            height={14}
                        />
                      </div>
                      <a className="text-sm font-medium text-dark text-gray-600" target="_blank" href="/products/swift">{project.mainStack}</a>
                    </div>

                  </div>
                </div>
              </>
            ))
            }
          </div>
        </div>
      </aside>
    </div>

  )
}