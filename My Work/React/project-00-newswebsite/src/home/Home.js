import { Button } from "@mui/material";
import { fetchData } from "../api/apiService";
import MainHeadline from "../basic/home/MainHeadline";

export default function Home() {

    const bringData = () => {
        const data = fetchData();
        console.log(data);
        return data;
    }



    return (
        <>
            


            <MainHeadline/>

            <hr/>
            <Button onClick={bringData} >Fetch Data</Button>
        </>
    )
}