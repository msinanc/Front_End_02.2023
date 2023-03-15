export default function ConditionComponent(){
    const value = 12;
    return (
        value < 5
        ?
        <div>
            <h1>Üçlü Yanlış</h1>
        </div>
        :
        <div>
            <h1>Üçlü Yanlış</h1>
            {value > 10 &&
            <h2>Çok büyük</h2>
            }
        </div>
    )








    /*
    if(value < 5){
        return (
            <div>
                <h1>İse Yanlış</h1>
            </div>
        )
        
    }else{
        return (
            <div>
                <h1>İse Yanlış</h1>
            </div>
        )

    }
    */
}