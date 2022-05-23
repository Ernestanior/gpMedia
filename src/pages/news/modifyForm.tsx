import {FC, useCallback} from "react";
import createObserverForm, {IObserverForm} from "@/hoc/createObserverForm";
import requestNews from "@/store/request/requestNews"
import {AxiosRequestConfig} from "axios";
import {from} from "rxjs";
import moment from "moment";
import NewsForm from "./form"
import historyService from "@/store/history";

const Form:FC<IObserverForm> = ({form}) => {
    // 新增动态
    const submitNews = useCallback(() => {
        const data = form.getFieldsValue();
        const config: AxiosRequestConfig = {
            url: "/api/information/update",
            method: "post",
            data: {
                publishDate: moment.isMoment(data.publishDate)
                    ? data.publishDate.format("YYYY-MM-DD HH:mm:ss")
                    : moment().format("YYYY-MM-DD HH:mm:ss"),
                simplifiedForm: data.simplifiedForm,
                traditionalForm: data.traditionalForm,
                englishForm: data.englishForm
            }
        }
        from(requestNews(config)).subscribe((res) => {
            historyService.goBack();
        })
    }, [form])

    return <NewsForm submitNews={submitNews} />
}

const ModifyNewsForm = createObserverForm(Form, {
    layout: "vertical"
})

export default ModifyNewsForm;