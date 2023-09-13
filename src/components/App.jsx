import { Alert } from "./Alert/Alert";
import { Alertsecond } from "./Alert/Alertsecond";
import { BookList } from "./BookList/BookList";
import { Product } from "./Product/Product";
import cheese from "./pictures/cheese.png"

const favoriteBooks = [
 { id: "id-1", name: "JS for beginners" },
 { id: "id-2", name: "React basics" },
 { id: "id-3", name: "React Router overview" },
 { id: "id-4", name: "Redux in depth" },
];

const Profile = ({ name, email }) => (
 <div>
   <p>name: {name}</p>
   <p>email: {email}</p>
 </div>
)

const Panel = ({ title, children}) => (
 <section>
    <h2>{title}</h2>
    {children}
 </section>
)

const Mailbox = ({ unreadMessage, username }) => {
 return (
   <div>
     <h1>Hello {username}!</h1>
     {
       unreadMessage.length > 0 ? 
           `You have ${unreadMessage.length} unread message.`
           : "No unread message"
     }
   </div>
 )
}



export const App = () => {
 return (
   <>
   <div
     style={{
       textDecoration: 'none',
       color: 'blue',
       fontSize: 40,
     }}
     >
       <BookList books={favoriteBooks}/>
     </div>
     <div>
       <Product
       myCheese={cheese}
       price={10.23}
       name="Cheese"
       buttonText="Add to cart"
       />
     </div>
     <div>
       <Panel
         title="User Profile">
         <Profile
         name="Jan"
         email="emailtest@pl"
         />
       </Panel>
       <Mailbox username="Mango" unreadMessage={[2,3,4,5]}/>
       <Mailbox username="Kiwi" unreadMessage={[]}/>
     </div>
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
            <Alertsecond variant="five">
                funf
            </Alertsecond>
     </div>
   </>
 );
};

export default App;