import React from "react";
import "tailwindcss/tailwind.css";
import { BsBell } from "react-icons/bs";
import { BsExclamationSquare } from "react-icons/bs";
import { TbLogout2 } from "react-icons/tb";
import { PiStarFourBold } from "react-icons/pi";

import "./page1.css";
import { Link } from "react-router-dom";

const page1 = () => {
  return (
    <div class="d-flex flex-column justify-content-center">
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

      <div className="flex text-white space-x-3 ml-3 mr-3 mb-3">
        <nav className="w-64 flex flex-col p-4 border-solid border-2 rounded-xl border-pink-400 z-50 shadow-pink-400 shadow-lg">
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
               <Link to="/">
              <div class="hover:border-solid hover:border-2 hover:rounded hover:border-pink-400 h-8 hover:text-pink-400">
                <span class="ml-2">New Requests</span>
              </div>
               </Link>
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

        <div className="flex-1 flex flex-col border-solid border-2 rounded-xl border-pink-400 z-50 shadow-pink-400 shadow-lg ">
          <header className="mb-6">
            <div className="flex space-x-1 p-4">
              <h1 class="text-3xl font-semibold ">Event Name</h1>
              <span className="mt-3">(Venue Details)</span>
            </div>
            <div className="flex ml-3 p-1 ">
              <button className="inline-flex items-center justify-center whitespace-nowrap rounded-l-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 border-2 border-pink-400 hover:bg-pink-400">
                Event Details
              </button>
              <button className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 border-2 border-pink-400 hover:bg-pink-400">
                Assign Coordinator/Coordinator
              </button>
              <button className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 border-2 border-pink-400 hover:bg-pink-400">
                Session Management
              </button>
              <button className="inline-flex items-center justify-center whitespace-nowrap rounded-r-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 border-2 border-pink-400 hover:bg-pink-400">
                Generate SOW
              </button>
            </div>
          </header>
          <div className="grid grid-cols-2 gap-8 p-4">
            <div>
              <section className="mb-6">
                <h2 className="text-xl font-semibold mb-2">
                  Assign Coordinator
                </h2>
                <button
                  type="button"
                  role="combobox"
                  aria-controls="radix-:r36:"
                  aria-expanded="false"
                  aria-autocomplete="none"
                  dir="ltr"
                  data-state="closed"
                  data-placeholder=""
                  className="flex h-12 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  id="coordinator"
                >
                  <span style={{ pointerEvents: "none" }}>
                    Search Coordinator
                  </span>
                </button>
              </section>
            </div>
            <div>
              <section className="rounded-md">
                <div className="flex space-x-1 ">
                  <h2 className="text-xl font-semibold mb-2">Event Name</h2>
                  <span className="mt-1">(Venue Here)</span>
                </div>
                <div className="flex space-x-4 border-2 border-pink-400 px-1 rounded-md justify-between">
                  <div>
                    Start: <input type="date" className=" bg-transparent" />
                  </div>

                  <div>
                    Ends: <input type="date" className=" bg-transparent" />
                  </div>
                </div>
                <div className="border-2 border-pink-400 px-1 rounded-md mt-2">
                  
                    Venue Address: <input placeholder="Address" className=" bg-transparent border-none" />
                  
                </div>
              </section>
            </div>
          </div>
          <div>

            <div className="flex">
            <div className="ml-3">
              <h2 className="text-xl font-semibold mb-2">Assign Contractor</h2>
              <div className=" w-80 flex flex-col p-4 border-solid border-2 rounded-xl border-pink-400 z-50 shadow-pink-400 shadow-lg bg-black">
          
          <div className="cursor-pointer hover:border-solid hover:border-2 rounded-xl hover:bg-pink-400 hover:text-white border-2 border-pink-400 p-3">
            <div class="flex items-center justify-between font-bold">
                Meeting Room 1 <PiStarFourBold /> <strong className=" hover:text-black text-xs font-bold">12 Positions</strong>
            </div>
            <p className="text-xs">Start from 12 jan 2023  Ends at 15 jan 2023</p>
            </div>

          <div className="cursor-pointer hover:border-solid hover:border-2 rounded-xl hover:bg-pink-400 hover:text-white border-2 border-pink-400 p-3 mt-3">
            <div class="flex items-center justify-between font-bold">
                Meeting Room 1 <PiStarFourBold /> <strong className=" hover:text-black text-xs font-bold">12 Positions</strong>
            </div>
            <p className="text-xs">Start from 12 jan 2023  Ends at 15 jan 2023</p>
            </div>
          <div className="cursor-pointer hover:border-solid hover:border-2 rounded-xl hover:bg-pink-400 hover:text-white border-2 border-pink-400 p-3 mt-3">
            <div class="flex items-center justify-between font-bold">
                Meeting Room 1 <PiStarFourBold /> <strong className=" hover:text-black text-xs font-bold">12 Positions</strong>
            </div>
            <p className="text-xs">Start from 12 jan 2023  Ends at 15 jan 2023</p>
            </div>
          <div className="cursor-pointer hover:border-solid hover:border-2 rounded-xl hover:bg-pink-400 hover:text-white border-2 border-pink-400 p-3 mt-3">
            <div class="flex items-center justify-between font-bold">
                Meeting Room 1 <PiStarFourBold /> <strong className=" hover:text-black text-xs font-bold">12 Positions</strong>
            </div>
            <p className="text-xs">Start from 12 jan 2023  Ends at 15 jan 2023</p>
            </div>
          <div className="cursor-pointer hover:border-solid hover:border-2 rounded-xl hover:bg-pink-400 hover:text-white border-2 border-pink-400 p-3 mt-3">
            <div class="flex items-center justify-between font-bold">
                Meeting Room 1 <PiStarFourBold /> <strong className=" hover:text-black text-xs font-bold">12 Positions</strong>
            </div>
            <p className="text-xs">Start from 12 jan 2023  Ends at 15 jan 2023</p>
            </div>
        </div>
            </div>

        <div className=" w-full">
            <h2 className="text-xl font-semibold mb-2">Positions</h2>
            <div className="flex-1 overflow-auto border-2 border-pink-400 rounded-xl mr-2 ml-2 bg-black shadow-pink-400 shadow-lg ">
            <div className="relative overflow-auto">
              <table className="caption-bottom text-sm w-full">
                <thead className="">
                  <tr class=" transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted text-lg w-full">
                    <th class="h-14  px-4 text-left align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0">
                      Position
                    </th>
                    <th class="h-14 px-4 text-left align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0">
                      Time
                    </th>
                    <th class="h-14 px-4 text-left align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0">
                      Info
                    </th>
                    <th class="h-14 px-4 text-left align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0">
                      Quantity
                    </th>
                    <th class="h-14 px-4 text-left align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0">
                
                    </th>
                  </tr>
                </thead>
                <tbody className="[&amp;_tr:last-child]: border-0">
                  <tr class=" transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted border-2 border-solid border-pink-400">
                    <th class="h-14 px-4 text-left align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0">
                      <div class="flex">
                        {" "}
                        Camera 1 (Video)
                      </div>
                    </th>
                    <th class="h-14 px-4 text-left align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0">
                      <input type="time" className=" bg-transparent"/>
                    </th>
                    <th class="h-14 px-4 text-left align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0">
                      LP default
                    </th>
                    <th class="h-14 px-4 text-left align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0">
                    20
                    </th>
                    <th class="h-14 text-left align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0 ">
                    <input placeholder="Selector Contractor" className="border-2 border-pink-400 rounded-md h-10 w-52 bg-transparent p-3"/>
                    </th>
                  </tr>
                  <tr class=" transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted border-2 border-solid border-pink-400">
                    <th class="h-14 px-4 text-left align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0">
                      <div class="flex">
                        {" "}
                        Camera 1 (Video)
                      </div>
                    </th>
                    <th class="h-14 px-4 text-left align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0">
                      <input type="time" className=" bg-transparent"/>
                    </th>
                    <th class="h-14 px-4 text-left align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0">
                      LP default
                    </th>
                    <th class="h-14 px-4 text-left align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0">
                    20
                    </th>
                    <th class="h-14 text-left align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0 ">
                    <input placeholder="Selector Contractor" className="border-2 border-pink-400 rounded-md h-10 w-52 bg-transparent p-3"/>
                    </th>
                  </tr>
                  <tr class=" transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted border-2 border-solid border-pink-400">
                    <th class="h-14 px-4 text-left align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0">
                      <div class="flex">
                        {" "}
                        Camera 1 (Video)
                      </div>
                    </th>
                    <th class="h-14 px-4 text-left align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0">
                      <input type="time" className=" bg-transparent"/>
                    </th>
                    <th class="h-14 px-4 text-left align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0">
                      LP default
                    </th>
                    <th class="h-14 px-4 text-left align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0">
                    20
                    </th>
                    <th class="h-14 text-left align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0 ">
                    <input placeholder="Selector Contractor" className="border-2 border-pink-400 rounded-md h-10 w-52 bg-transparent p-3"/>
                    </th>
                  </tr>
                  <tr class=" transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted border-2 border-solid border-pink-400">
                    <th class="h-14 px-4 text-left align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0">
                      <div class="flex">
                        {" "}
                        Camera 1 (Video)
                      </div>
                    </th>
                    <th class="h-14 px-4 text-left align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0">
                      <input type="time" className=" bg-transparent"/>
                    </th>
                    <th class="h-14 px-4 text-left align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0">
                      LP default
                    </th>
                    <th class="h-14 px-4 text-left align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0">
                    20
                    </th>
                    <th class="h-14 text-left align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0 ">
                    <input placeholder="Selector Contractor" className="border-2 border-pink-400 rounded-md h-10 w-52 bg-transparent p-3"/>
                    </th>
                  </tr>
                  <tr class=" transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted border-2 border-solid border-pink-400">
                    <th class="h-14 px-4 text-left align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0">
                      <div class="flex">
                        {" "}
                        Camera 1 (Video)
                      </div>
                    </th>
                    <th class="h-14 px-4 text-left align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0">
                      <input type="time" className=" bg-transparent"/>
                    </th>
                    <th class="h-14 px-4 text-left align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0">
                      LP default
                    </th>
                    <th class="h-14 px-4 text-left align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0">
                    20
                    </th>
                    <th class="h-14 text-left align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0 ">
                    <input placeholder="Selector Contractor" className="border-2 border-pink-400 rounded-md h-10 w-52 bg-transparent p-3"/>
                    </th>
                  </tr>
                  <tr class=" transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted border-2 border-solid border-pink-400">
                    <th class="h-14 px-4 text-left align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0">
                      <div class="flex">
                        {" "}
                        Camera 1 (Video)
                      </div>
                    </th>
                    <th class="h-14 px-4 text-left align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0">
                      <input type="time" className=" bg-transparent"/>
                    </th>
                    <th class="h-14 px-4 text-left align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0">
                      LP default
                    </th>
                    <th class="h-14 px-4 text-left align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0">
                    20
                    </th>
                    <th class="h-14 text-left align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0 ">
                    <input placeholder="Selector Contractor" className="border-2 border-pink-400 rounded-md h-10 w-52 bg-transparent p-3"/>
                    </th>
                  </tr>
                  <tr class=" transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted border-2 border-solid border-pink-400">
                    <th class="h-14 px-4 text-left align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0">
                      <div class="flex">
                        {" "}
                        Camera 1 (Video)
                      </div>
                    </th>
                    <th class="h-14 px-4 text-left align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0">
                      <input type="time" className=" bg-transparent"/>
                    </th>
                    <th class="h-14 px-4 text-left align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0">
                      LP default
                    </th>
                    <th class="h-14 px-4 text-left align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0">
                    20
                    </th>
                    <th class="h-14 text-left align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0 ">
                    <input placeholder="Selector Contractor" className="border-2 border-pink-400 rounded-md h-10 w-52 bg-transparent p-3"/>
                    </th>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          </div>
            </div>
          </div>
          <div className="flex justify-center items-center">
          <button class="bg-pink-400 shadow-lg shadow-pink-400/50 mt-5 mb-5 w-28 h-10 rounded-lg">Save Edits</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page1;
