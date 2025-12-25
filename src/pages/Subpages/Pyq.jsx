import React from "react";
import "./Pyq.css";

const pyqs = [
  { title: "AP EAPCET 2025 Official Papers & Keys (ALL PAPERS)", link: "https://www.manabadi.co.in/institute/DownLoadBQP-Yearwise.aspx?title=AP%20EAPCET-EAPCET-Previous-Question-Papers-2025&SYSID=14&clsid=26&QPT=p&bqpYear=2025" },
  { title: "AP EAPCET 2024 Official Papers & Keys (ALL PAPERS)", link: "https://cets.apsche.ap.gov.in/EAPCET24/Eapcet/EAPCET_ExamPapers.aspx#" },
  { title: "AP EAPCET 2023 Official Papers & Keys (ALL PAPERS)", link: "https://www.manabadi.co.in/institute/DownLoadBQP-Yearwise.aspx?title=AP%20EAPCET-EAPCET-Previous-Question-Papers-2023&SYSID=14&clsid=26&QPT=p&bqpYear=2023" },
  { title: "AP EAPCET 2022 Official Papers & Keys (ALL PAPERS)", link: "https://www.manabadi.co.in/institute/DownLoadBQP-Yearwise.aspx?title=AP%20EAPCET-EAPCET-Previous-Question-Papers-2023&SYSID=14&clsid=26&QPT=p&bqpYear=2022" },
  { title: "AP EAPCET 2021 Official Papers & Keys (ALL PAPERS)", link: "https://www.manabadi.co.in/institute/DownLoadBQP-Yearwise.aspx?title=AP%20EAPCET-EAPCET-Previous-Question-Papers-2023&SYSID=14&clsid=26&QPT=p&bqpYear=2021" },
  { title: "AP EAPCET 2020 Official Papers & Keys (ALL PAPERS)", link: "https://www.manabadi.co.in/institute/DownLoadBQP-Yearwise.aspx?title=AP%20EAPCET-EAPCET-Previous-Question-Papers-2023&SYSID=14&clsid=26&QPT=p&bqpYear=2020" },
  { title: "AP EAPCET 2019 Official Papers & Keys (ALL PAPERS)", link: "https://www.manabadi.co.in/institute/DownLoadBQP-Yearwise.aspx?title=AP%20EAPCET-EAPCET-Previous-Question-Papers-2023&SYSID=14&clsid=26&QPT=p&bqpYear=2019" },
  { title: "AP EAPCET 2018 Official Papers & Keys (ALL PAPERS)", link: "https://www.manabadi.co.in/institute/DownLoadBQP-Yearwise.aspx?title=AP%20EAPCET-EAPCET-Previous-Question-Papers-2023&SYSID=14&clsid=26&QPT=p&bqpYear=2018" },
  { title: "AP EAPCET 2017 Official Papers & Keys (ALL PAPERS)", link: "https://www.manabadi.co.in/institute/DownLoadBQP-Yearwise.aspx?title=AP%20EAPCET-EAPCET-Previous-Question-Papers-2023&SYSID=14&clsid=26&QPT=p&bqpYear=2017" },
   { title: "AP EAPCET 2016 Official Papers & Keys (ALL PAPERS)", link: "https://www.manabadi.co.in/institute/DownLoadBQP-Yearwise.aspx?title=AP%20EAPCET-EAPCET-Previous-Question-Papers-2023&SYSID=14&clsid=26&QPT=p&bqpYear=2016" },
  { title: "AP EAPCET 2015 Official Papers & Keys (ALL PAPERS)", link: "https://www.manabadi.co.in/institute/DownLoadBQP-Yearwise.aspx?title=AP%20EAPCET-EAPCET-Previous-Question-Papers-2023&SYSID=14&clsid=26&QPT=p&bqpYear=2015" },
     { title: "AP EAPCET 2014 Official Papers & Keys (ALL PAPERS)", link: "https://www.manabadi.co.in/institute/DownLoadBQP-Yearwise.aspx?title=AP%20EAPCET-EAPCET-Previous-Question-Papers-2023&SYSID=14&clsid=26&QPT=p&bqpYear=2014" },
      { title: "AP EAPCET 2013 Official Papers & Keys (ALL PAPERS)", link: "https://www.manabadi.co.in/institute/DownLoadBQP-Yearwise.aspx?title=AP%20EAPCET-EAPCET-Previous-Question-Papers-2023&SYSID=14&clsid=26&QPT=p&bqpYear=2013" },
       { title: "AP EAPCET 2012 Official Papers & Keys (ALL PAPERS)", link: "https://www.manabadi.co.in/institute/DownLoadBQP-Yearwise.aspx?title=AP%20EAPCET-EAPCET-Previous-Question-Papers-2023&SYSID=14&clsid=26&QPT=p&bqpYear=2012" },
        { title: "AP EAPCET 2011 Official Papers & Keys (ALL PAPERS)", link: "https://www.manabadi.co.in/institute/DownLoadBQP-Yearwise.aspx?title=AP%20EAPCET-EAPCET-Previous-Question-Papers-2023&SYSID=14&clsid=26&QPT=p&bqpYear=2011" },
         { title: "AP EAPCET 2010 Official Papers & Keys (ALL PAPERS)", link: "https://www.manabadi.co.in/institute/DownLoadBQP-Yearwise.aspx?title=AP%20EAPCET-EAPCET-Previous-Question-Papers-2023&SYSID=14&clsid=26&QPT=p&bqpYear=2010" },

];

function Pyq() {
  return (
    <div className="pyq-container">
      <h2>Previous Year Question Papers</h2>
      <ul>
        {pyqs.map((item, index) => {
          const yearMatch = item.title.match(/\b(20\d{2})\b/); // extract year
          const year = yearMatch ? yearMatch[0] : "Unknown";
          return (
            <li key={index}>
              <a href={item.link} target="_blank" rel="noopener noreferrer">
                Question Paper - {year}
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Pyq;
