import { Col, Flex, Layout, Row } from "antd";

import c from "../../App.module.scss";

const { Header } = Layout;
const AppHeader = (): JSX.Element => {
  return (
    <Header className={c.header}>
      <Row style={{ width: "100%" }}>
        <Col span={6}>
          <Flex align="center" className={c.imgWrap}>
            <img src="src/assets/ISS_emblem.png" alt="" />
          </Flex>
        </Col>
        <Col span={12}>
          <Flex justify="center">
            <h2>International Space Station</h2>
          </Flex>
        </Col>
      </Row>
    </Header>
  );
};

export default AppHeader;
