import { Stylizacja } from "./Stylizacja"
import { Alert } from "./Alert"





export const Style = () => {
    return(
        <>
            <Stylizacja></Stylizacja>

            <Alert variant="info">Aleksandra</Alert>
            <Alert variant="error">Amelia</Alert>
            <Alert variant="success">Anna</Alert>
            <Alert variant="warning">Alicja</Alert>
        </>
    )
}