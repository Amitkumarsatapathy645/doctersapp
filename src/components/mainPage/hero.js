"use client";

import { IoHomeOutline } from "react-icons/io5";
import { IoCallOutline } from "react-icons/io5";
import { IoMdSend } from "react-icons/io";
import { FaBell } from "react-icons/fa";
import { IoIosNotifications } from "react-icons/io";
import { FaWpforms } from "react-icons/fa";
import { IoIosTimer } from "react-icons/io";
import { MdWavingHand } from "react-icons/md";
import { IoMdLogOut } from "react-icons/io";
import { CiSearch } from "react-icons/ci";
import { CiSettings } from "react-icons/ci";
import { AiOutlineMessage } from "react-icons/ai";
import { PiChartPieSlice } from "react-icons/pi";
import { PieChart } from "@mui/x-charts/PieChart";
import Image from "next/image";
import img1 from "../../../public/aliza.png";

const data2 = [
  { label: "Group A", value: 2400 },
  { label: "Group B", value: 4567 },
];
export default function MyComponent(props) {
  return (
    <div className="flex gap-5 justify-between py-6 pr-6 pl-12 bg-slate-900 rounded-[40px] max-md:flex-wrap max-md:px-5">
      <section className="">
        <div className="flex flex-col items-center h-full ">
          <div className=" basis-2/12">
            <Image src="/Frame.png" height={70} width={70} />
          </div>

          <div className=" basis-8/12">
            <div className="rounded-md hover:bg-slate-500">
              <IoHomeOutline className="w-8 h-8 p-1" />
            </div>
            <div className="rounded-md hover:bg-slate-500">
              <FaWpforms className="w-8 h-8 p-1 mt-10" />
            </div>
            <div className="rounded-md hover:bg-slate-500">
              <PiChartPieSlice className="w-8 h-8 p-1 mt-10" />
            </div>
            <div className="rounded-md hover:bg-slate-500">
              <AiOutlineMessage className="w-8 h-8 p-1 mt-10" />
            </div>
            <div className="rounded-md hover:bg-slate-500">
              <CiSettings className="w-8 h-8 p-1 mt-10" />
            </div>
          </div>
          <div className="flex flex-col justify-end gap-0 basis-2/12">
            <div className="bg-[#BDD8F0] rounded-full">
              <Image
                src="/profile.png "
                width={50}
                height={50}
                className="z-10 rounded-full "
              />
            </div>
            <IoMdLogOut className="w-8 h-8 p-1 mt-10" />
          </div>
        </div>
      </section>

      <div className="px-12 pt-12 pb-6 bg-slate-800 rounded-[40px] max-md:px-5 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:">
          <div className="flex flex-col w-[64%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow max-md:mt-10 max-md:max-w-full">
              <div className="flex gap-2.5 justify-between capitalize max-md:flex-wrap max-md:max-w-full ">
                <div className="text-3xl font-extrabold text-white">
                  <span className="">hello,</span>
                  <br />
                  Dr. Colter! <MdWavingHand />
                </div>

                <div className="flex self-start px-6 py-5 font-medium gap- rounded-3xl bg-slate-700 text-stone-300 max-md:px-5 gap-[270px]">
                <CiSearch />
                  <input
                    type="text"
                    placeholder="Search"
                    className="flex-auto my-auto text-lg bg-transparent border-none focus:outline-none"
                  />
                </div>
                <div className="h-[65px] w-[65px] bg-slate-600 rounded-2xl flex items-center justify-center">
                  <IoIosNotifications className="w-6 h-6" />
                </div>
              </div>

              <div className="mt-9 max-md:max-w-full">
                <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:">
                  <div className="flex flex-col w-[43%] max-md:ml-0 max-md:w-full">
                    <div className="flex flex-col grow max-md:mt-7">
                      <div className="flex gap-5 justify-between pl-6 font-bold text-white capitalize bg-blue-950 rounded-[30px] max-md:pl-5">
                        <div className="flex flex-col flex-1 my-auto">
                          <div className="text-3xl">42</div>
                          <div className="mt-6 text-base whitespace-nowrap">
                            patients visited
                          </div>
                          <div className="mt-2.5 text-xs font-medium text-zinc-300">
                            this month
                          </div>
                        </div>
                        <div className="flex flex-col flex-1 px-8 text-sm rounded-none py-9 whitespace-nowrap bg-slate-700 max-md:px-5">
                          <div className="shrink-0 bg-blue-500 bg-opacity-50 h-[25px] rounded-[30px_30px_0px_0px]" />
                          <div className="flex flex-col px-2.5 pt-2 pb-5 bg-blue-500 rounded-none">
                            <div className="mt-2">70%</div>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col px-6 py-4 mt-6 w-full bg-blue-950 rounded-[30px] max-md:px-5">
                        <div className="flex justify-between gap-3 text-base font-bold text-stone-300">
                          <Image src="/Group 16.png" height={30} width={30} />
                          <div className="flex-auto">Upcoming Events</div>
                        </div>
                        <div className="flex justify-between gap-5 mt-4">
                          <div className="flex overflow-hidden relative flex-col justify-center items-center rounded-full aspect-square bg-zinc-300 h-[79px] w-[79px]">
                            <Image
                              src={img1}
                              width={100}
                              height={100}
                              alt="jhhjjkhkjh"
                            />
                          </div>
                          <div className="flex flex-col self-start flex-1 text-xs capitalize whitespace-nowrap text-zinc-300">
                            <div className="text-xl font-bold text-white">
                              aliza shah
                            </div>
                            <div className="flex justify-between gap-2 mt-2 font-medium">
                              <IoIosTimer />
                              <div className="grow">08:00-09:00 am</div>
                            </div>
                            <div className="justify-center px-3 py-2 mt-4 font-semibold lowercase rounded-xl bg-slate-700">
                              <span className="font-medium text-zinc-300">
                                Visited 7{" "}
                              </span>
                              <span className="font-medium lowercase text-zinc-300">
                                days ago
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col ml-5 w-[57%] max-md:ml-0 max-md:w-full">
                    <div className="flex flex-col grow px-8 pt-8 pb-12 mx-auto w-full bg-blue-950 rounded-[40px] max-md:px-5 max-md:mt-7">
                      <div className="flex justify-between w-full gap-5 whitespace-nowrap">
                        <div className="self-start flex-auto text-2xl font-bold text-white">
                          Statistics
                        </div>
                        <div className="flex gap-2 justify-between px-3.5 py-3 text-xs font-semibold capitalize rounded-2xl border border-blue-500 border-solid text-zinc-300">
                          <div>Weekly</div>
                        </div>
                      </div>
                      <div className="text-xs font-medium capitalize text-zinc-300">
                        November 2023
                      </div>
                      <Image src="/Vector.png" height={1000} width={1000} />
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex justify-between gap-5 text-2xl font-bold text-white mt-9 max-md:flex-wrap max-md:max-w-full">
                <div className="flex-auto">Active Patients</div>
                <div className="flex-auto">Upcoming Events</div>
              </div>
              <div className="mt-7 max-md:max-w-full">
                <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:">
                  <div className="flex flex-col w-[57%] max-md:ml-0 max-md:w-full">
                    <div className="flex flex-col grow px-8 pt-4 pb-9 mx-auto w-full bg-blue-950 rounded-[40px] max-md:px-5 max-md:mt-6">
                      <div className="flex justify-between gap-5">
                        <div className="my-auto text-xs font-semibold capitalize text-stone-300">
                          08:00 am
                        </div>
                        <div className="flex justify-between gap-5 py-2 pl-3 pr-12 bg-red-100 rounded-3xl max-md:pr-5">
                          <div className="flex justify-center items-center w-9 h-9 bg-fuchsia-300 rounded-full aspect-square stroke-[1px]">
                            <Image src="/5.png" height={100} width={100} />
                          </div>
                          <div className="flex flex-col flex-1 my-auto text-black capitalize whitespace-nowrap">
                            <div className="text-base font-bold">
                              mark jaxon
                            </div>
                            <div className="flex gap-1.5 justify-between mt-2 text-xs font-medium">
                              <div className="grow">08:00-09:00 am</div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="flex justify-between w-full gap-5 px-px mt-7">
                        <div className="my-auto text-xs font-semibold capitalize text-stone-300">
                          09:00 am
                        </div>
                        <div className="flex justify-between gap-4 py-2 pl-3 pr-10 bg-green-100 rounded-3xl max-md:pr-5">
                          <div className="flex justify-center items-center w-9 h-9 bg-teal-100 rounded-full aspect-square stroke-[1px]">
                            <Image src="/6.png" height={100} width={100} />
                          </div>
                          <div className="flex flex-col flex-1 my-auto text-black capitalize whitespace-nowrap">
                            <div className="text-base font-bold">
                              maira khan
                            </div>
                            <div className="flex gap-1.5 justify-between mt-2 text-xs font-medium">
                              <div className="grow">09:00-10:00 am</div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="flex justify-between gap-5 capitalize mt-7">
                        <div className="my-auto text-xs font-semibold grow whitespace-nowrap text-stone-300">
                          10:00 am
                        </div>
                        <div className="flex gap-4 justify-between py-2 pr-16 pl-3.5 text-black bg-teal-100 rounded-3xl max-md:pr-5">
                          <div className="flex justify-center items-center w-9 h-9 bg-teal-100 rounded-full aspect-square stroke-[1px]">
                            <Image src="/7.png" height={100} width={100} />
                          </div>
                          <div className="flex flex-col flex-1 my-auto">
                            <div className="text-base font-bold">brick zon</div>
                            <div className="flex gap-1 justify-between mt-1.5 text-xs">
                              <div>10:00-11:00 am</div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="flex justify-between gap-5 pr-20 mt-6 text-xs font-semibold capitalize text-stone-300 max-md:pr-5">
                        <div className="self-start mt-3.5">11:00 am</div>
                        <div className="justify-center px-5 py-2.5 whitespace-nowrap bg-slate-900 rounded-[30px] max-md:px-5">
                          Break Time
                        </div>
                      </div>
                      <div className="flex justify-between w-full gap-5 pr-4 mt-6 capitalize">
                        <div className="my-auto text-xs font-semibold text-stone-300">
                          12:00 am
                        </div>
                        <div className="flex gap-4 justify-between py-2 pr-11 pl-2.5 text-black whitespace-nowrap bg-sky-200 rounded-3xl max-md:pr-5">
                          <div className="flex justify-center items-center w-9 h-9 bg-teal-100 rounded-full aspect-square stroke-[1px]">
                            <Image src="/8.png" height={100} width={100} />
                          </div>
                          <div className="flex flex-col flex-1 my-auto">
                            <div className="text-base font-bold">Alexa Max</div>
                            <div className="flex justify-between gap-2 mt-2 text-xs font-medium">
                              <div className="grow">12:00-13:00 am</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col ml-5 w-[43%] max-md:ml-0 max-md:w-full">
                    <div className="flex flex-col grow max-md:mt-6">
                      <div className="flex gap-5 justify-between px-7 py-7 bg-blue-950 rounded-[40px] max-md:px-5">
                        <div className="flex flex-col flex-1 self-start mt-1.5 capitalize whitespace-nowrap">
                          <div className="text-xl font-bold text-white">
                            Team Meeting
                          </div>
                          <div className="flex justify-between gap-2 mt-2 text-xs font-medium text-zinc-300">
                            <FaBell className="w-8 h-8 p-1" />
                            <div className="flex-auto my-auto">05:00-06:00</div>
                          </div>
                          <div className="flex mt-10 ">
                            <div>
                              <Image src="/1.png" width={35} height={35} />
                            </div>
                            <div>
                              <Image src="/2.png" width={35} height={35} />
                            </div>
                            <div>
                              <Image src="/3.png" width={35} height={35} />
                            </div>
                            <div>
                              <Image src="/4.png" width={35} height={35} />
                            </div>
                          </div>
                        </div>
                        <div className="flex flex-col items-center basis-0">
                          <FaBell className="w-8 h-8 p-1" />
                          <Image
                            src="/Group 16.png"
                            width={45}
                            height={45}
                            className="mt-10"
                          />
                        </div>
                      </div>

                      <div className="flex gap-5 justify-between px-8 py-8 mt-6 bg-blue-950 rounded-[40px] max-md:px-5">
                        <div className="flex flex-col flex-1 font-bold text-white capitalize whitespace-nowrap">
                          <div className="text-sm font-medium text-stone-300">
                            Consultation
                          </div>
                          <div className="mt-5 text-2xl">82/100</div>
                          <div className="flex justify-between gap-4 px-4 py-3 text-base mt-9 rounded-xl bg-slate-700">
                            <div>82%</div>
                          </div>
                        </div>
                        <div className="flex items-center self-end justify-center w-20 h-20 rounded-full mt-9">
                          <PieChart
                            series={[
                              {
                                data: data2,
                                cx: 35,
                                innerRadius: 40,
                                outerRadius: 25,
                                colors: ["white", "blue"],
                              },
                            ]}
                            height={300}
                            slotProps={{
                              legend: { hidden: true },
                            }}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col ml-5 w-[36%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow items-center px-7 pt-12 pb-8 mx-auto w-full bg-slate-900 rounded-[40px] max-md:px-5 max-md:mt-10">
              <div className="flex justify-center items-center mt-1 rounded-full bg-slate-800 h-[150px] w-[150px]">
                <div className="flex justify-center items-center  rounded-full bg-slate-100 h-[125px] w-[125px]">
                  <Image
                    src="/profile.png"
                    width={100}
                    height={100}
                    className="rounded-full z-100"
                  />
                </div>
              </div>
              <div className="mt-5 text-2xl text-white lowercase whitespace-nowrap">
                <span className="font-bold text-white uppercase">A</span>
                <span className="font-bold text-white">LIAM </span>
                <span className="font-bold text-white uppercase">C</span>
                <span className="font-bold text-white">OLTER</span>
              </div>
              <div className="mt-4 text-base font-medium capitalize text-stone-300">
                Physician
              </div>
              <div className="flex gap-5 justify-between self-stretch px-7 py-6 mt-7 text-lg font-semibold text-white bg-blue-950 rounded-[30px] max-md:px-5">
                <div className="flex-auto my-auto">Active Patients</div>
                <div className="flex ">
                  <div>
                    <Image src="/1.png" width={35} height={35} />
                  </div>
                  <div>
                    <Image src="/2.png" width={35} height={35} />
                  </div>
                  <div>
                    <Image src="/3.png" width={35} height={35} />
                  </div>
                  <div>
                    <Image src="/4.png" width={35} height={35} />
                  </div>
                </div>
              </div>
              <div className="flex flex-col self-stretch pt-5 pb-2.5 mt-6 w-full bg-blue-950 rounded-[40px]">
                <div className="flex flex-col px-6 max-md:px-5">
                  <div className="flex justify-between w-full gap-5 px-px">
                    <div className="flex justify-between gap-4">
                      <div className="flex justify-center items-center bg-lime-100 rounded-full aspect-square h-[46px] w-[46px]">
                        <Image src="/aliza.png" width={30} height={30} />
                      </div>
                      <div className="flex flex-col self-start flex-1 mt-2 capitalize whitespace-nowrap">
                        <div className="text-base font-bold text-white">
                          Alexa Max
                        </div>
                        <div className="mt-3 text-xs font-medium text-stone-300">
                          Active 5 min ago
                        </div>
                      </div>
                    </div>
                    <IoCallOutline w-8 h-8 p-1 />
                  </div>
                  <div className="shrink-0 mt-3.5 h-px bg-white bg-opacity-20" />
                  <div className="justify-center self-center py-3 pr-12 pl-3.5 mt-3.5 text-xs font-semibold text-black capitalize whitespace-nowrap rounded-2xl bg-zinc-100 max-md:pr-5">
                    Hi, Doctor.
                  </div>
                  <div className="flex gap-4 justify-between mt-3.5">
                    <div className="flex justify-center items-center my-auto bg-lime-100 rounded-full aspect-square h-[46px] w-[46px]">
                      <Image src="/2.png" width={60} height={60} />
                    </div>
                    <div className="justify-center px-5 py-4 text-xs font-semibold leading-5 text-black capitalize grow rounded-2xl bg-zinc-100 max-md:px-5">
                      <span className="">I </span>
                      <span className="">got knee jerk. What</span>
                      <br />
                      <span className="">should i do right now?</span>
                    </div>
                  </div>
                  <div className="self-start mt-3 ml-16 text-xs font-semibold capitalize whitespace-nowrap text-stone-300 max-md:ml-2.5">
                    tue 02:32pm
                  </div>
                  <div className="flex gap-4 self-end px-px mt-2.5">
                    <div className="justify-center py-3 pl-4 my-auto text-xs font-semibold text-black capitalize bg-blue-200 grow pr-9 whitespace-nowrap rounded-2xl max-md:pr-5">
                      Hi, Alexa.
                    </div>
                    <div className="flex justify-center items-center bg-blue-200 rounded-full aspect-square h-[46px] w-[46px]">
                      <Image src="/3.png" width={50} height={50} />
                    </div>
                  </div>
                  <div className="justify-center self-center px-5 py-4 mt-2 max-w-full text-xs font-semibold leading-5 text-black uppercase bg-blue-200 rounded-2xl w-[191px]">
                    <span className="font-medium">T</span>
                    <span className="font-medium lowercase">
                      his help maintain balance and posture.
                    </span>
                    <span className="font-medium uppercase"> d</span>
                    <span className="font-medium lowercase">ont worry.</span>
                  </div>
                  <div className="self-end mt-3 mr-16 text-xs font-semibold capitalize whitespace-nowrap text-stone-300 max-md:mr-2.5">
                    tue 02:32pm
                  </div>
                </div>
                <div className="flex gap-5 justify-between py-1.5 pr-2 pl-7 mx-2.5 mt-4 max-w-full text-xs font-semibold text-white lowercase bg-slate-700 rounded-[29px] w-[331px] max-md:pl-5">
                  <div className="flex justify-between gap-5 my-auto">
                    <div className="flex-auto">
                      T<span className="lowercase">ype your text......</span>
                    </div>
                  </div>
                  <IoMdSend />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
