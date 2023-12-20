import { FC, useEffect, createContext, useState } from "react";
import { Layout, Space } from "antd";

import AppHeader from "./components/header/header.tsx";
import SiderContent from "./components/sider-content/sider-content.tsx";
import ISSLocationLayout from "./components/ISSLocationLayout/ISSLocationLayout.tsx";
import { ILocationISS, MyContextType } from "types.ts";
import { getLocation } from "./app/ISS/location.ts";

import c from "../src/App.module.scss";

const { Sider, Content, Footer } = Layout;

export const MyContext = createContext<MyContextType | undefined>(undefined);

const App: FC = () => {
  const [currentISS, setCurrentISS] = useState<ILocationISS>();
  const [savedLocations, setSavedLocations] = useState<ILocationISS[]>([]);
  const [activeISSId, setActiveISSId] = useState<number>();

  const fetchLocation = async () => {
    const response = await getLocation();
    if (response.code === "error") {
      console.log(response.error.message);
    } else {
      setCurrentISS(response.data);
    }
  };

  useEffect(() => {
    fetchLocation();
    const intervalId = setInterval(fetchLocation, 2000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <MyContext.Provider
      value={{
        setActiveISSId: setActiveISSId,
        setSavedLocations: setSavedLocations,
        activeISSId: activeISSId,
        savedLocations: savedLocations,
      }}
    >
      <Space direction="vertical" className={c.appWrap}>
        <Layout>
          <AppHeader />
          <Layout hasSider>
            <Sider className={c.sider} width={400}>
              <SiderContent savedLocations={savedLocations} />
            </Sider>
            <Content className={c.content}>
              <ISSLocationLayout
                currentISS={currentISS}
                savedLocations={savedLocations}
                setSavedLocations={setSavedLocations}
                activeISSId={activeISSId}
                setActiveISSId={setActiveISSId}
              />
            </Content>
          </Layout>
          <Footer className={c.footer}>Footer</Footer>
        </Layout>
      </Space>
    </MyContext.Provider>
  );
};

export default App;
