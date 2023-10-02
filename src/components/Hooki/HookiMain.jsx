import { Book } from "./UseState"
import { Price } from "./UseEfect";
import { SeveralEffects } from "./SeveralEffects";
import { UserMenu } from "./UserMenu";






export const HookiMain = () => {


    return (
        <>
            <Book/>
            <SeveralEffects/>
            <Price/>
                <UserProvider>
                    <UserMenu />
                </UserProvider>
        </>
    )
}

