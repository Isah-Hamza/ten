import React from "react";
import DashboardSidebar from "../../components/DashboardSidebar";
import Header from "../../components/Header";

import { sidebarList } from "../../data/AdminDashboard";
import filter from "../../assets/images/Filter 1.png";
import tableGirl from "../../assets/images/table-girl.png";
import previous from "../../assets/images/icon-previous.svg";
import next from "../../assets/images/icon-next.svg";

const AdminDashboard = () => {
  const analytics = [
    {
      name: "system users",
      count: 210,
    },
    {
      name: "partners",
      count: 40,
    },
    {
      name: "solved cases",
      count: 120,
    },
  ];
  const tableHeader = ["name", "case", "email", "date", "status", "date"];
  const tableData = [
    {
      imgUrl: tableGirl,
      name: "John Doe",
      case: "Having been sacked fr no reasons with out pay",
      email: "Bipasu@gmail.com",
      date: "12/12/2002",
      status: "pending",
    },
    {
      imgUrl: tableGirl,
      name: "Wonder Woman",
      case: "Having been fired for no reasons with out pay",
      email: "wonder@woman.com",
      date: "12/12/2002",
      status: "pending",
    },
    {
      imgUrl: tableGirl,
      name: "Bruce Wayne",
      case: "Having been fired for no reasons with out pay",
      email: "bruce@wayne.com",
      date: "12/12/2002",
      status: "completed",
    },
    {
      imgUrl: tableGirl,
      name: "John Doe",
      case: "Having been fired for no reasons with out pay",
      email: "john@doe.com",
      date: "12/12/2002",
      status: "completed",
    },
  ];
  return (
    <div className="flex flex-col h-[calc(100vh-5rem)] overflow-y-auto">
      <Header dashboard />
      <div className="flex-1 flex">
        <DashboardSidebar sidebarList={sidebarList} />
        <main className="w-full lg:w-4/5 bg-[#fff] h-full pt-8 px-10 ">
          <div className="bg-[#f1f1ff] px-10 py-4 text-2xl font-bold">
            Welcome back
          </div>
          <div className="mt-5 gap-5 flex">
            {analytics.map((item, idx) => (
              <div
                key={idx}
                className="min-w-[170px] shadow rounded px-6 py-3 bg-[#E3E4FF] flex flex-col items-center"
              >
                <p className="text-xl font-bold">{item.count}+</p>
                <p className="capitalize font-semibold">{item.name}</p>
              </div>
            ))}
          </div>
          <div>
            <div className="mt-8 flex items-center justify-between pb-5 border-b">
              <p className="text-xl font-semibold">Recent Support Requests</p>
              <div className="flex items-center gap-2">
                <select
                  className="border outline-none rounded px-5 py-1.5 text-sm"
                  name="filter"
                  id="filter"
                >
                  <option value="april 2022">April 2022</option>
                  <option value="may 2022">May 2022</option>
                  <option value="june 2022">June 2022</option>
                </select>
                <img src={filter} alt="fiter" />
              </div>
            </div>
            <div className="mt-2 pb-5 border-b">
              <table className="w-full">
                <thead>
                  <tr>
                    {tableHeader.map((item, idx) => (
                      <th className="capitalize text-left" key={idx}>
                        {item}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {tableData.map((item, idx) => (
                    <tr key={idx} className="text-sm">
                      <td className="pt-4">
                        <div className="flex items-center gap-2">
                          <img
                            className="rounded-full w-7"
                            src={item.imgUrl}
                            alt="user"
                          />
                          <p className="font-semibold">{item.name}</p>
                        </div>
                      </td>
                      <td className="pt-4">{item.case}</td>
                      <td className="pt-4">{item.email}</td>
                      <td className="pt-4">{item.date}</td>
                      <td className="pt-4 pr-3">
                        <button className="text-xs rounded px-4 py-2 text-white capitalize font-semibold w-fit bg-[coral]">
                          {item.status}
                        </button>
                      </td>
                      <td className="pt-4">
                        <button className="text-xs  rounded px-6 py-2 text-white capitalize font-semibold w-fit bg-blue-500">
                          View
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="flex justify-between pt-3">
              <p className="text-sm">
                Showing <span className="font-semibold">1</span> to{" "}
                <span className="font-semibold"> 10 </span> of{" "}
                <span className="font-semibold"> 50 </span>
                Entries
              </p>
              <div className="flex items-center gap-3 text-xs">
                <img
                  role={"button"}
                  className="w-2.5"
                  src={previous}
                  alt="previous"
                />
                <p className="text-white rounded px-2 py-1 bg-blue-500">
                  1
                </p>
                <p className="text-white rounded px-2 py-1 bg-blue-500">
                  2
                </p>
                <p className="text-white rounded px-2 py-1 bg-blue-500">
                  3
                </p>
                <img role={"button"} className="w-2.5" src={next} alt="next" />
              </div>
            </div>
          </div>
        </main>
      </div>
      {/* <Footer /> */}
    </div>
  );
};

export default AdminDashboard;
