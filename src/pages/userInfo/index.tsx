import {FC} from "react";
import {Col, Divider, Row} from "antd";
import useAccountInfo from "@/store/account";

const UserInfo:FC = () => {
    const userInfo = useAccountInfo();
    return <section style={{ width: 450, padding: 15 }}>
        <h3 style={{fontWeight:650}}>
            User Profile
        </h3>
        <br/>
        <Row gutter={[15, 15]}>
            <Col span={6}>
                Login Email
            </Col>
            <Col span={18}>
                {userInfo && userInfo.email}
            </Col>
        </Row>
        <Divider />
        {/*<Row gutter={[15, 15]}>*/}
        {/*    <Col span={8}>*/}
        {/*        <ModifyPassword />*/}
        {/*    </Col>*/}
        {/*    <Col span={8}>*/}
        {/*        <Safety />*/}
        {/*    </Col>*/}
        {/*    <Col span={8}>*/}
        {/*        <FA2 />*/}
        {/*    </Col>*/}
        {/*</Row>*/}
    </section>
}

export default UserInfo
