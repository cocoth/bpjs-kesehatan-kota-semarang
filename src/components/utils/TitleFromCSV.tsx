'use client'
import { useEffect, useState } from "react";

const TitleFromCSV = ({
  data
}: {
  data: string
}) => {
  const [title, setTitle] = useState("");
  useEffect(()=>{
    const fetchData = async ()=>{
      try {
        const res = await fetch(data);
        const csv = await res.text();
        const rows = csv.split("\n");
        if (rows.length > 0) {
          const firstRow = rows[0].trim();
          if (firstRow) {
            setTitle(firstRow);
          }
        }
      } catch (error) {
        throw error;
      }
    }
    fetchData()
  },[data])
  return (
    <h1>
      {title}
    </h1>
  )
};


export default TitleFromCSV