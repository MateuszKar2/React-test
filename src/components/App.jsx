import { BookList } from "./BookList/BookList";
import { Product } from "./Product/Product";
import cheese from "./assets/cheese.png"

const favoriteBooks = [
 { id: "id-1", name: "JS for beginners" },
 { id: "id-2", name: "React basics" },
 { id: "id-3", name: "React Router overview" },
 { id: "id-4", name: "Redux in depth" },
];

const cheeseMy = <img src={cheese}/>

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
       myCheese={cheeseMy}
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
   </>
 );
};

export default App;