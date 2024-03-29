import {FC, ReactNode} from "react";
import { IEventListModule, INormalEvent} from "@/common/interface";
import useRoleFilter from "@/hooks/utils/useRoleFilter";
import {Button, Radio} from "antd";

/**
 * 功能列表
 * @param event
 * @constructor
 */
const FuncList:FC<IEventListModule> = ({event}) => {
    const _funcList = useRoleFilter(event);
    if(_funcList.length < 1){
        return null;
    }

    // primary按钮
    const primaryList:ReactNode[] = [];
    const normalList:ReactNode[] = [];

    _funcList.forEach((btn:INormalEvent, idx) => {
        // primary
        if(btn.primary){
            primaryList.push(<Button style={{marginRight:15}} type="primary" key={idx} onClick={btn.event}>
                {btn.text}
            </Button>)
        }else{
            normalList.push(<Radio.Button style={{marginRight:15}} className="btn-normal" key={idx} onClick={btn.event}>
                {btn.text}
            </Radio.Button>)
        }
    })

    return <span style={{marginLeft:15}}>
        {primaryList}
        {normalList.length > 0 && normalList}
    </span>
}

export default FuncList
