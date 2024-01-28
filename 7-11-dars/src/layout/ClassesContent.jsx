import React from "react";
const data = [
  {
    sinf: "1a-sinf",
    id: "1",
  },
  {
    sinf: "1b-sinf",
    id: "2",
  },
  {
    sinf: "1d-sinf",
    id: "3",
  },
  {
    sinf: "2a-sinf",
    id: "4",
  },
  {
    sinf: "2b-sinf",
    id: "5",
  },
  {
    sinf: "2d-sinf",
    id: "6",
  },
  {
    sinf: "3a-sinf",
    id: "7",
  },
  {
    sinf: "3b-sinf",
    id: "8",
  },
  {
    sinf: "3d-sinf",
    id: "9",
  },
  {
    sinf: "4a-sinf",
    id: "10",
  },
  {
    sinf: "4b-sinf",
    id: "11",
  },
  {
    sinf: "4d-sinf",
    id: "12",
  },
  {
    sinf: "5a-sinf",
    id: "13",
  },
  {
    sinf: "5b-sinf",
    id: "14",
  },
  {
    sinf: "5d-sinf",
    id: "15",
  },
  {
    sinf: "6a-sinf",
    id: "16",
  },
  {
    sinf: "6b-sinf",
    id: "17",
  },
  {
    sinf: "6d-sinf",
    id: "18",
  },
  {
    sinf: "7a-sinf",
    id: "19",
  },
  {
    sinf: "7b-sinf",
    id: "20",
  },
  {
    sinf: "7d-sinf",
    id: "21",
  },
  {
    sinf: "8a-sinf",
    id: "22",
  },
  {
    sinf: "8b-sinf",
    id: "23",
  },
  {
    sinf: "9a-sinf",
    id: "24",
  },
  {
    sinf: "9b-sinf",
    id: "25",
  },
  {
    sinf: "10a-sinf",
    id: "26",
  },
  {
    sinf: "10b-sinf",
    id: "27",
  },
  {
    sinf: "11a-sinf",
    id: "28",
  },
  {
    sinf: "11b-sinf",
    id: "29",
  },
];
const ClassesContent = () => {
    console.log(data);
  return (
    <>
      {data.map((classs) => {
        <table border={1}>
          <tr>
            <th>Classes</th>
            <th>N:~</th>
          </tr>
          <tr>
            <th key={classs.id}>{classs.id}</th>
            <th>{classs.sinf}</th>
          </tr>
        </table>
      })}
      <div></div>
    </>
  );
};

export default ClassesContent;
