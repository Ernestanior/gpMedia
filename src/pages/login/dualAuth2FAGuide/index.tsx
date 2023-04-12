import { Button, Form, Layout } from "antd";
import React, { FC } from "react";
import "./index.less";
import { CheckCircleTwoTone } from "@ant-design/icons";
import { useCallback } from "react";
import accountService from "@/store/account/service";
import FormItem from "@/common/Form/formItem";
import {authService} from "@/store/apis/account";
import {from} from "rxjs";
import request from "@/store/request";
import isMobile from "@/app/isMobile";
import VerifyCode from "@/pages/login/dualAuth2FAGuide/verifyCode";

const DualAuth2FAGuide: FC = () => {
    const verifySubmit = useCallback((data) => {
        const config = authService.validateTwoFactorPin({}, data);
        from(request(config)).subscribe(res => {
            if(res.isSuccess){
                accountService.reset2FAuth();
            }
        })
    }, []);

    return (
        <Layout className={isMobile?"succeed-guide-page-mobile":"succeed-guide-page"}>
            <section className="succeed-guide-main-con">
                <header>
                    welcome
                </header>
                <div style={{ textAlign: "center" }} className="mgTop25">
                    <CheckCircleTwoTone
                        style={{ fontSize: 86 }}
                        twoToneColor="#62CA32"
                    />
                    <p className="mgTop15">
                        Login success
                    </p>
                </div>
                <div className="dual-auth-2fa-con mgTop15">
                    <p style={{ fontWeight: 550, textAlign: "center" }}>
                        双重认证（2FA）
                    </p>
                    <Form onFinish={verifySubmit} className="mgTop25">
                        <FormItem name="pin">
                            {/*<Input />*/}
                            <VerifyCode maxLength={6}/>
                        </FormItem>
                        <div style={{ fontSize: 14, color: "#ccc", textAlign: "center", }}>
                            <div>
                                一条包含验证码的信息已经发送至您的Authenticator应用程序
                            </div>
                            <div>
                                请输入您的6位数验证码来验证身份
                            </div>
                        </div>


                        <div className={'faBtn'}>
                            <Button className="remove-hover" htmlType="submit">
                                继续
                            </Button>
                            <Button className={'btn-return remove-hover'} htmlType="submit" onClick={() => accountService.autoLogout()}>
                                返回
                            </Button>
                        </div>
                    </Form>
                </div>
            </section>
        </Layout>
    );
};
export default DualAuth2FAGuide;
