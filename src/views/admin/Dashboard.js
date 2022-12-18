import React from "react";

// components

import CardLineChart from "../../components/Cards/CardLineChart.js";
import CardBarChart from "../../components/Cards/CardBarChart.js";
import CardStats from "../../components/Cards/CardStats.js";

import AdminNavbar from "../../components/Navbars/AdminNavbar";
import Sidebar from "../../components/Sidebar/Sidebarstud";
import HeaderGreat from "../../components/Headers/HeaderGreat";
import FooterAdmin from "../../components/Footers/FooterAdmin";

// import Admin from "C:/Users/user/Desktop/workspace/Websites/mentoring/src/layouts/Admin.js";

export default function Dashboard() {
  return (
      <>
      <Sidebar />
      <div className="relative md:ml-64 bg-blueGray-100">
        <AdminNavbar />
        {/* Header */}
        <HeaderGreat />
          <div className="flex flex-wrap">
          <div className="w-full xl:w-8/12 mb-12 xl:mb-0 px-4">
            <CardLineChart />
          </div>
          <div className="w-full xl:w-4/12 px-4">
            <CardBarChart />
          </div>
        </div>
        <div >
            {/* Card stats */}
            <div className="flex flex-wrap justify-center">
              <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
                <CardStats
                  statSubtitle="Mentor A"
                  statTitle="4,897"
                  statArrow="up"
                  statPercent="3.48"
                  statPercentColor="text-lightBlue-500"
                  statDescripiron="Since last week"
                  statIconName="far fa-chart-bar"
                  statIconColor="bg-red-500"
                />
              </div>
              <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
                <CardStats
                  statSubtitle="Mentor B"
                  statTitle="2,356"
                  statArrow="up"
                  statPercent="3.48"
                  statPercentColor="text-red-500"
                  statDescripiron="Since last week"
                  statIconName="far fa-chart-bar"
                  statIconColor="bg-orange-500"
                />
              </div>
              <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
                <CardStats
                  statSubtitle="Mentor C"
                  statTitle="3.45"
                  statArrow="up"
                  statPercent="1.10"
                  statPercentColor="text-orange-500"
                  statDescripiron="Since last week"
                  statIconName="far fa-chart-bar"
                  statIconColor="bg-teal-500"
                />
              </div>
            </div>
          </div>
        <div className="px-4 mt-4 md:px-10 mx-auto w-full -m-24">
        <FooterAdmin/>
        </div>
      </div>
      
    </> 
  );
}
