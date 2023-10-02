// import { remove } from "lodash";
// import { useEffect } from "react"


export const SeveralEffects = () => {

    // handleKeyDown = e => {
    //     console.log("keydown event: ", e);
    //   };
    
    //   componentDidMount() {
    //     initThirdPartyLibrary();
    //     document.addEventListener("keydown", this.handleKeyDown);
    //   }
    
    //   componentDidUpdate(prevProps, prevState) {
    //     if (prevProps.value !== this.props.value) {
    //     }
    
    //     if (prevState.isLoggedIn !== this.state.isLoggedIn) {
    //     }
    
    //     if (prevProps.username !== this.props.username) {
    //       fetchUser(this.props.username);
    //     }
    //   }
    
    //   componentWillUnmount() {
    //     document.removeEventListener("keydown", this.handleKeyDown);
    //   }
//////////////////////////////////////////////////////////////////////////////

    //Uruchom efekt tylko na montowaniu, aby zainicjować jakąś bibliotekę
    // useEffect(() => {
    //     initThirdPartyLibrary();
    // }, []);

    // //Uruchom efekt tylko wtedy, gdy zmieni się nazwa użytkownika
    // useEffect(() => {
    //     fetchUser(username);
    // }, [username]);

    // //Uruchom efekt zmiany właściwości wartości
    // useEffect(() => {

    // }, [value]);

    // //Uruchom efekt przy zmianie stanu isLoggedIn
    // useEffect(() => {

    // }, [isLoggedIn]);

    // //Uruchom efekt przy montowaniu i wyczyść po odmontowaniu
    // useEffect(() => {
    //     const  handleKeyDown = e => console.log("keydown event: ", e);
    //     document.addEventListener("keydown", handleKeyDown);
    //     return () => {
    //     document.removeEventListener("keydown", handleKeyDown);
    //     }
    // }, [])
     };