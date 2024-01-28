import { Layout  } from "antd";
import Sidebar from "./layout/Sidebar";
import MyHeader from "./layout/MyHeader";
import MyContent from "./layout/MyContent";

const Router = () => {
 
  
  return (
    <Layout>
   <Sidebar></Sidebar>
      <Layout  >
       <MyHeader/>
       <Layout style={{padding:24}}>
      <MyContent/>
       </Layout>
      </Layout  >
    </Layout >
  );
};
export default Router;
