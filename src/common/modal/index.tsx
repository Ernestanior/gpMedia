import React, {FC, useEffect, useState} from "react"
import {Modal} from "antd";
import useMessage from "@/store/message";

const ModalX:FC = () => {
    const msg = useMessage()
    const [value,setValue] = useState<any>()
    useEffect(()=>{
        if(msg && msg.type==="modal"){
            setValue(msg.value)
            setVisible(true)
        }
    },[msg])
    const [visible,setVisible]=useState<boolean>(false)

    const defaultCancel = () => setVisible(false)

    const onOk = ()=>{
        value.onOk && value.onOk()
        defaultCancel()
    }

    return value? <Modal
            title={value.title}
            visible={visible}
            onCancel={value.onCancel || defaultCancel}
            onOk={onOk}
            okText={value.okText || 'Save'}
            cancelText={value.cancelText || 'Cancel'}
            zIndex={7000}
            width={value.width || 600}
        >
            <div style={{display:"flex",alignItems:"center",paddingLeft:10}}>
                {value.content}
            </div>
        </Modal>:<></>
}

export default ModalX;
