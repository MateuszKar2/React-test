//Stylizacja

import { Alert } from "./Alert";
import Alertsecond  from "./Alertsecond";
import Alertthird from "./Alertthird";

export const Alertmain = () => {
return (
    <>
<div>
          {/* <p style={alertStyle}>Style wbudowane</p>
          <p style={alertStyle}>Vanilia CSS</p>
          <p style={alertStyle}>CSS-moduły</p> */}
          <Alert variant="info">
            Style wbudowane
            </Alert>
          <Alert variant="error">
            Vanilia CSS 
            </Alert>
          <Alert variant="success">
            CSS-moduły
            </Alert>
            <Alertsecond variant="one">
                eins
            </Alertsecond>
            <Alertsecond variant="two" outlined>
                zwei
            </Alertsecond>
            <Alertsecond variant="three" elevated>
                drei
            </Alertsecond>
            <Alertsecond variant="four" outlined elevated>
                vier
            </Alertsecond>
     </div>
     <div>
            <Alertthird variant="info">
              one
            </Alertthird>
            <Alertthird variant="error" outlined>
              two
            </Alertthird>
            <Alertthird variant="success" elevated>
              three
            </Alertthird>
            <Alertthird variant="warning" outlined elevated>
              four
            </Alertthird>
     </div>
     </>
)
        }

        export default Alertmain;