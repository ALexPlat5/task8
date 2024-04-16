import React from "react";
import { selectData, selectIsLoading, fetchData } from "../features/activity/activitySlice";
import { useAppDispatch } from "../app/hooks";
import { useSelector } from "react-redux";
import { Page } from "../views/Counter/style";
import type { responseType } from "../features/activity/activitySlice";
import { Button } from "@mui/material";
import { Item } from "../views/Counter/style";
import { ButtonsContainer } from "../views/Counter/style";

function parse(data:responseType) {
    const pElements = []
    for (const [key, value] of Object.entries(data)) {
        pElements.push(<p><span style={{backgroundColor:'coral', padding:5, borderRadius:'10%'}}>{key.charAt(0).toUpperCase()+key.slice(1)}:</span> {value}</p>)
    }
    return pElements
}

export default function ActivityContainer() {
    const dispatch = useAppDispatch();
    const data = useSelector(selectData);
    const isLoading = useSelector(selectIsLoading)
    
    return (
        <Page>
            {
                isLoading?
                <p>Создаем новю активность...</p>:
                <div>
                    {
                        data?
                        <Item style={{
                            flexDirection: 'column',
                            justifyContent:'flex-start',
                            alignItems:'flex-start', 
                            margin:0}}>
                            <h1>Полученная активность:</h1>
                            {parse(JSON.parse(data))}
                        </Item>:
                        <p>Нет активности</p>
                    }
                </div>
            }
            <ButtonsContainer>
                <Button style={{borderColor: 'blue'}} onClick={()=>dispatch(fetchData())}>Создать активность</Button>
            </ButtonsContainer>
        </Page>

    )
}