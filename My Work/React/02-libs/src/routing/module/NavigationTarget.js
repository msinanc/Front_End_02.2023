import { useNavigate, useParams } from "react-router-dom"

export default function NavigationTarget() {
    
    const { id } = useParams();
    const navigate = useNavigate();

    const getParametric = () => {
        if (id){
            return (
                <div>
                    Değiştirgen : {id}
                </div>
            )
        }
    }

    const goToSource = () => {
        navigate("/source");
    }

    return (
        <div>
            Erek<br/>
            {getParametric()}<br/>
            <button onClick={() => goToSource()}>Kaynağa Git</button>
        </div>
    )
}