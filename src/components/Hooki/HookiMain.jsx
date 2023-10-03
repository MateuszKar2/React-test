import { Book } from "./UseState"
import { Price } from "./UseEfect";
import { SeveralEffects } from "./SeveralEffects";
import { MyUseRef } from "./MyUseRef";
import { Player } from "./Player";
import { Planets } from "./UseMemo";
import { UseMemo } from "./UseMemo";
// import { UserMenu } from "./UserMenu";






export const HookiMain = () => {


    return (
        <>
            <Book/>
            <SeveralEffects/>
            <Price/>
                {/* <UserProvider>
                    <UserMenu />
                </UserProvider> */}
            <MyUseRef/>
            <Player source="http://media.w3.org/2010/05/sintel/trailer.mp4" />
            <Planets/>
            <UseMemo></UseMemo>
        </>
    )
}

