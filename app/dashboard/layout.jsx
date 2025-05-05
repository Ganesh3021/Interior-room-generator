import React from "react";
import Header from "./_components/Header";

function DashboardLayout({ children }) {
  return (
    <div>
      <div className="bg-foreground" >
        {/* Header */}
       
      </div>
      {/* Content Section */}
      <div >
        {children}
      </div>


    </div>
  );
}

export default DashboardLayout;
