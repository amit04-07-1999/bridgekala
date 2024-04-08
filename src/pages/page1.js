import React from "react";
import "tailwindcss/tailwind.css";
import { BsBell } from "react-icons/bs";
import { BsExclamationSquare } from "react-icons/bs";
import { TbLogout2 } from "react-icons/tb";
import { BsEye } from "react-icons/bs";
import { VscAdd } from "react-icons/vsc";
import { GoArrowRight } from "react-icons/go";
import { GoArrowLeft } from "react-icons/go";
import "./page1.css"

const page1 = () => {
  return (
    
      <div class="d-flex flex-column justify-content-center w-100 h-100">
      <div class="flex space-x-4 justify-center p-10">
        <BsExclamationSquare class="size-6 mt-3 text-white z-50" />
        <BsBell class="size-6 mt-3 text-white z-50" />
        <div class="items-center space-x-1 text-white z-50">
          <p>
            Hi, <span class=" text-cyan-400">Dandan Dongmei</span>
          </p>
          <p>welcome back!</p>
        </div>
        <img
          src="Images/girl.jpg"
          class=" size-16 rounded-full border-2 border-solid border-pink-400 z-50"
        />
      </div>

      <div className="flex h-screen text-white space-x-3 ml-8 mr-8">
        <nav className="w-64 flex flex-col p-4 border-solid border-2 rounded-xl border-pink-400 z-50 shadow-pink-400 shadow-lg mb-8">
          <details open="" class="group">
            <summary class="flex items-center justify-between cursor-pointer hover:border-solid border-2 rounded border-pink-400 h-10 text-pink-400 shadow-pink-400 shadow-md">
              <span class="ml-2 font-semibold text-lg">Events</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                class="w-4 h-4 ml-28 transform group-open:rotate-180"
              >
                <path d="m6 9 6 6 6-6"></path>
              </svg>
            </summary>
            <div class="mt-2 ml-4 space-y-1">
              <div class="hover:border-solid hover:border-2 hover:rounded hover:border-pink-400 h-8 hover:text-pink-400">
                <span class="ml-2">New Requests</span>
              </div>
              <div class="hover:border-solid hover:border-2 hover:rounded hover:border-pink-400 h-8 hover:text-pink-400">
                <span class="ml-2">Estimate</span>
              </div>
              <div class="hover:border-solid hover:border-2 hover:rounded hover:border-pink-400 h-8 hover:text-pink-400">
                <span class="ml-2">Partial Requests</span>
              </div>
            </div>
          </details>
          <div class="flex flex-col space-y-2 mb-6 mt-6">
            <summary class="flex items-center justify-between cursor-pointer hover:border-solid hover:border-2 rounded hover:border-pink-400 h-10 hover:text-pink-400">
              <h2 class="text-lg font-semibold ml-2">Positions</h2>
            </summary>
            <summary class="flex items-center justify-between cursor-pointer hover:border-solid hover:border-2 rounded hover:border-pink-400 h-10 hover:text-pink-400">
              <h2 class="text-lg font-semibold ml-2">Contractors</h2>
            </summary>
          </div>
          <details open="" class="group">
            <summary class="flex items-center justify-between cursor-pointer hover:border-solid hover:border-2 rounded hover:border-pink-400 h-10 hover:text-pink-400">
              <span class="ml-2 font-semibold text-lg">Users</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="w-4 h-4 ml-28 transform group-open:rotate-180"
              >
                <path d="m6 9 6 6 6-6"></path>
              </svg>
            </summary>
            <div class="mt-2 ml-4 space-y-1">
              <div class="hover:border-solid hover:border-2 hover:rounded hover:border-pink-400 h-8 hover:text-pink-400">
                <span class="ml-2">Admins</span>
              </div>
              <div class="hover:border-solid hover:border-2 hover:rounded hover:border-pink-400 h-8 hover:text-pink-400">
                <span class="ml-2">Clients</span>
              </div>
              <div class="hover:border-solid hover:border-2 hover:rounded hover:border-pink-400 h-8 hover:text-pink-400">
                <span class="ml-2">Coordinators</span>
              </div>
            </div>
          </details>
          <div class="flex flex-col space-y-2 mb-6 mt-6">
            <summary class="flex items-center justify-between cursor-pointer hover:border-solid hover:border-2 rounded hover:border-pink-400 h-10 hover:text-pink-400">
              <h2 class="text-lg font-semibold ml-2">Profile</h2>
            </summary>
          </div>
          <div class="mt-auto bg-black rounded-md">
            <a href="#" class="flex items-center space-x-2 ml-16">
              <TbLogout2 class=" h-10" />
              <span>Logout</span>
            </a>
          </div>{" "}
        </nav>

        <div className="flex-1 flex flex-col border-solid border-2 rounded-xl border-pink-400 z-50 shadow-pink-400 shadow-lg mb-8">
          <header className="flex justify-between items-center mb-3">
            <h1 class="text-2xl font-semibold p-4">Event Requests</h1>
            <div class="flex items-center space-x-4 mr-5">
              <span class="relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full"></span>
              <input
                class=" bg-transparent flex h-12 w-60 rounded-lg border-input px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 border-2 shadow-inner shadow-black"
                placeholder="Search here"
                type="search"
              />
              <button class="inline-flex items-center justify-center text-2xl rounded-md h-9 w-9 bg-gradient-to-r from-pink-500 via-purple-800 to-purple-900 text-white">
                <VscAdd class="" />
              </button>
            </div>{" "}
          </header>
          <main className="flex-1 overflow-auto ">
            <div className="relative w-full overflow-auto">
              <table className="w-full caption-bottom text-sm">
                <thead className="">
                  <tr class=" transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted bg-pink-400 text-lg ">
                    <th class="h-10  px-4 text-left align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0">
                      Event Name
                    </th>
                    <th class="h-10 px-4 text-left align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0">
                      Event Start
                    </th>
                    <th class="h-10 px-4 text-left align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0">
                      Event End
                    </th>
                    <th class="h-10 px-4 text-left align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0">
                      Client Name
                    </th>
                    <th class="h-10 px-4 text-left align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0">
                      Contact Info
                    </th>
                    <th class="h-10 px-4 text-left align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0">
                      Venue
                    </th>
                  </tr>
                </thead>
                <tbody className="[&amp;_tr:last-child]: border-0 ">
                  <tr class=" transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted border-2 border-solid border-pink-400">
                    <th class="h-9 px-4 text-left align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0">
                      <div class="flex">
                        {" "}
                        <BsEye class="mr-2 size-5" />
                        Filled Name
                      </div>
                    </th>
                    <th class="h-9 px-4 text-left align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0">
                      Jan 12, 2024
                    </th>
                    <th class="h-9 px-4 text-left align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0">
                      Jan 14, 2024
                    </th>
                    <th class="h-9 px-4 text-left align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0">
                    Dandan Dongmei
                    </th>
                    <th class="h-9 px-4 text-left align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0">
                      + 1 234 566 7890
                    </th>
                    <th class="h-9 px-4 text-left align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0">
                      Lorem ipsum dolor sit amet
                    </th>
                  </tr>
                  <tr class=" transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted border-2 border-solid border-pink-400">
                    <th class="h-9 px-4 text-left align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0">
                      <div class="flex">
                        {" "}
                        <BsEye class="mr-2 size-5" />
                        Filled Name
                      </div>
                    </th>
                    <th class="h-9 px-4 text-left align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0">
                      Jan 12, 2024
                    </th>
                    <th class="h-9 px-4 text-left align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0">
                      Jan 14, 2024
                    </th>
                    <th class="h-9 px-4 text-left align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0">
                    Dandan Dongmei
                    </th>
                    <th class="h-9 px-4 text-left align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0">
                      + 1 234 566 7890
                    </th>
                    <th class="h-9 px-4 text-left align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0">
                      Lorem ipsum dolor sit amet
                    </th>
                  </tr>
                  <tr class=" transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted border-2 border-solid border-pink-400">
                    <th class="h-9 px-4 text-left align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0">
                      <div class="flex">
                        {" "}
                        <BsEye class="mr-2 size-5" />
                        Filled Name
                      </div>
                    </th>
                    <th class="h-9 px-4 text-left align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0">
                      Jan 12, 2024
                    </th>
                    <th class="h-9 px-4 text-left align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0">
                      Jan 14, 2024
                    </th>
                    <th class="h-9 px-4 text-left align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0">
                    Dandan Dongmei
                    </th>
                    <th class="h-9 px-4 text-left align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0">
                      + 1 234 566 7890
                    </th>
                    <th class="h-9 px-4 text-left align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0">
                      Lorem ipsum dolor sit amet
                    </th>
                  </tr>
                  <tr class=" transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted border-2 border-solid border-pink-400">
                    <th class="h-9 px-4 text-left align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0">
                      <div class="flex">
                        {" "}
                        <BsEye class="mr-2 size-5" />
                        Filled Name
                      </div>
                    </th>
                    <th class="h-9 px-4 text-left align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0">
                      Jan 12, 2024
                    </th>
                    <th class="h-9 px-4 text-left align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0">
                      Jan 14, 2024
                    </th>
                    <th class="h-9 px-4 text-left align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0">
                    Dandan Dongmei
                    </th>
                    <th class="h-9 px-4 text-left align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0">
                      + 1 234 566 7890
                    </th>
                    <th class="h-9 px-4 text-left align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0">
                      Lorem ipsum dolor sit amet
                    </th>
                  </tr>
                  <tr class=" transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted border-2 border-solid border-pink-400">
                    <th class="h-9 px-4 text-left align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0">
                      <div class="flex">
                        {" "}
                        <BsEye class="mr-2 size-5" />
                        Filled Name
                      </div>
                    </th>
                    <th class="h-9 px-4 text-left align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0">
                      Jan 12, 2024
                    </th>
                    <th class="h-9 px-4 text-left align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0">
                      Jan 14, 2024
                    </th>
                    <th class="h-9 px-4 text-left align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0">
                    Dandan Dongmei
                    </th>
                    <th class="h-9 px-4 text-left align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0">
                      + 1 234 566 7890
                    </th>
                    <th class="h-9 px-4 text-left align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0">
                      Lorem ipsum dolor sit amet
                    </th>
                  </tr>
                  <tr class=" transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted border-2 border-solid border-pink-400">
                    <th class="h-9 px-4 text-left align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0">
                      <div class="flex">
                        {" "}
                        <BsEye class="mr-2 size-5" />
                        Filled Name
                      </div>
                    </th>
                    <th class="h-9 px-4 text-left align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0">
                      Jan 12, 2024
                    </th>
                    <th class="h-9 px-4 text-left align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0">
                      Jan 14, 2024
                    </th>
                    <th class="h-9 px-4 text-left align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0">
                    Dandan Dongmei
                    </th>
                    <th class="h-9 px-4 text-left align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0">
                      + 1 234 566 7890
                    </th>
                    <th class="h-9 px-4 text-left align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0">
                      Lorem ipsum dolor sit amet
                    </th>
                  </tr>
                  <tr class=" transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted border-2 border-solid border-pink-400">
                    <th class="h-9 px-4 text-left align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0">
                      <div class="flex">
                        {" "}
                        <BsEye class="mr-2 size-5" />
                        Filled Name
                      </div>
                    </th>
                    <th class="h-9 px-4 text-left align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0">
                      Jan 12, 2024
                    </th>
                    <th class="h-9 px-4 text-left align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0">
                      Jan 14, 2024
                    </th>
                    <th class="h-9 px-4 text-left align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0">
                    Dandan Dongmei
                    </th>
                    <th class="h-9 px-4 text-left align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0">
                      + 1 234 566 7890
                    </th>
                    <th class="h-9 px-4 text-left align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0">
                      Lorem ipsum dolor sit amet
                    </th>
                  </tr>
                  <tr class=" transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted border-2 border-solid border-pink-400">
                    <th class="h-9 px-4 text-left align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0">
                      <div class="flex">
                        {" "}
                        <BsEye class="mr-2 size-5" />
                        Filled Name
                      </div>
                    </th>
                    <th class="h-9 px-4 text-left align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0">
                      Jan 12, 2024
                    </th>
                    <th class="h-9 px-4 text-left align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0">
                      Jan 14, 2024
                    </th>
                    <th class="h-9 px-4 text-left align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0">
                    Dandan Dongmei
                    </th>
                    <th class="h-9 px-4 text-left align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0">
                      + 1 234 566 7890
                    </th>
                    <th class="h-9 px-4 text-left align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0">
                      Lorem ipsum dolor sit amet
                    </th>
                  </tr>
                  <tr class=" transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted border-2 border-solid border-pink-400">
                    <th class="h-9 px-4 text-left align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0">
                      <div class="flex">
                        {" "}
                        <BsEye class="mr-2 size-5" />
                        Filled Name
                      </div>
                    </th>
                    <th class="h-9 px-4 text-left align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0">
                      Jan 12, 2024
                    </th>
                    <th class="h-9 px-4 text-left align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0">
                      Jan 14, 2024
                    </th>
                    <th class="h-9 px-4 text-left align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0">
                    Dandan Dongmei
                    </th>
                    <th class="h-9 px-4 text-left align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0">
                      + 1 234 566 7890
                    </th>
                    <th class="h-9 px-4 text-left align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0">
                      Lorem ipsum dolor sit amet
                    </th>
                  </tr>
                  <tr class=" transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted border-2 border-solid border-pink-400">
                    <th class="h-9 px-4 text-left align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0">
                      <div class="flex">
                        {" "}
                        <BsEye class="mr-2 size-5" />
                        Filled Name
                      </div>
                    </th>
                    <th class="h-9 px-4 text-left align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0">
                      Jan 12, 2024
                    </th>
                    <th class="h-9 px-4 text-left align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0">
                      Jan 14, 2024
                    </th>
                    <th class="h-9 px-4 text-left align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0">
                    Dandan Dongmei
                    </th>
                    <th class="h-9 px-4 text-left align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0">
                      + 1 234 566 7890
                    </th>
                    <th class="h-9 px-4 text-left align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0">
                      Lorem ipsum dolor sit amet
                    </th>
                  </tr>
                  <tr class=" transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted border-2 border-solid border-pink-400">
                    <th class="h-9 px-4 text-left align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0">
                      <div class="flex">
                        {" "}
                        <BsEye class="mr-2 size-5" />
                        Filled Name
                      </div>
                    </th>
                    <th class="h-9 px-4 text-left align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0">
                      Jan 12, 2024
                    </th>
                    <th class="h-9 px-4 text-left align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0">
                      Jan 14, 2024
                    </th>
                    <th class="h-9 px-4 text-left align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0">
                    Dandan Dongmei
                    </th>
                    <th class="h-9 px-4 text-left align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0">
                      + 1 234 566 7890
                    </th>
                    <th class="h-9 px-4 text-left align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0">
                      Lorem ipsum dolor sit amet
                    </th>
                  </tr>
                </tbody>
              </table>
            </div>
          </main>
          <footer className="flex justify-center items-center space-x-2 py-4 border-2 border-solid border-pink-400 rounded-b-lg bg-black h-10">
          <GoArrowLeft />
            <span>1</span>
            <span>2</span>
            <span>3</span>
            <span>4</span>
            <GoArrowRight />{" "}
          </footer>
        </div>
      </div>
    </div>
  );
};

export default page1;
