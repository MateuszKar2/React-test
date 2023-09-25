import Events from "./Events";
import Toggle from "./Toggle";
import Message from "./Message";
import Form from "./Form";
import LittleFrom from "./LittleForm";
// import HardForm from "./HardForm";

export const Eventsmain = () => {
    return (
        <>
        <div
        style={{
            margin: 20,
            padding: 20,
        }}
        >
            <Events/>
            <Toggle/>
            <Message/>
            <Form/>
            <LittleFrom/>
            {/* <HardForm/> */}
        </div>
        </>
    )
}

export default Eventsmain;