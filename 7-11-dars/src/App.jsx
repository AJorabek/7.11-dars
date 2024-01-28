import {  RouterProvider, createBrowserRouter } from "react-router-dom";

import Root from "./Root";
import { ConfigProvider } from "antd";
import Teachers from "./pages/Teachers";
import Clases from "./pages/Clases";


const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      children:[
        {
          path:"teachers",
          element:<Teachers/>
        },
        {
          path:"Clases",
          element:<Clases/>
        }
      ]
    },
  ]);
  return (
      <ConfigProvider theme={{
        token:{
          colorPrimary:"#bc8e5c",
          fontSize:16
        }
      }}>
        <RouterProvider router={router}></RouterProvider>
      </ConfigProvider>
  );
};
export default App;
