import {FC} from "react";
import {Col, Divider, Row} from "antd";
import ModifyPassword from "@/pages/userInfo/modifyPassword";
import Safety from "@/pages/userInfo/safety";
import FA2 from "@/pages/userInfo/2FA";

const UserInfo:FC = () => {
    return <section style={{ padding: 15}}>
        <h3 style={{fontWeight:650}}>
            User Profile
        </h3>
        <br/>
        <Row gutter={[15, 15]}>
            <Col span={6}>
                Username
            </Col>
            <Col span={6}>
                Email
            </Col>
        </Row>
        <Divider />
        <Row gutter={[10, 10]}>
            <Col span={8}>
                <ModifyPassword />
            </Col>
            <Col span={8}>
                <Safety />
            </Col>
            <Col span={8}>
                <FA2 />
            </Col>
        </Row>
    </section>
}

export default UserInfo
