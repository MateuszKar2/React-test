
// import { BookList } from "./BookList/BookList";
// import { Product } from "./Product/Product";
// import cheese from "./pictures/cheese.png"
// import Alertmain from "./Alert/Alertmain";
// import Eventsmain from "./Events/Eventsmain";
// import ModuleThree from "./ModuleThree/ModuleThree";
// import { HookiMain } from "./Hooki/HookiMain";


// const favoriteBooks = [
//  { id: "id-1", name: "JS for beginners" },
//  { id: "id-2", name: "React basics" },
//  { id: "id-3", name: "React Router overview" },
//  { id: "id-4", name: "Redux in depth" },
// ];

// const Profile = ({ name, email }) => (
//  <div>
//    <p>name: {name}</p>
//    <p>email: {email}</p>
//  </div>
// )

// const Panel = ({ title, children}) => (
//  <section>
//     <h2>{title}</h2>
//     {children}
//  </section>
// )

// const Mailbox = ({ unreadMessage, username }) => {
//  return (
//    <div>
//      <h1>Hello {username}!</h1>
//      {
//        unreadMessage.length > 0 ? 
//            `You have ${unreadMessage.length} unread message.`
//            : "No unread message"
//      }
//    </div>
//  )
// }

import { ReactContent } from "./01-aplikacjeWebowe/pages/ReactContent";
import { ReactContentTwo } from "./01-aplikacjeWebowe/pages/ReactContentTwo";
import { Product } from "./01-aplikacjeWebowe/pages/Product";
import { ProductTwo } from "./01-aplikacjeWebowe/pages/ProductTwo";

  export const App = () => {
  return (
    <>
      <ReactContent></ReactContent>
      <ReactContentTwo></ReactContentTwo>
      <Product></Product>
      <ProductTwo 
      imgUrl="https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?dpr=2&h=480&w=640"
      price={18.99}
      name="Burger"
      />


   {/* <div
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
     <Alertmain/> 
     <Eventsmain/>
     <ModuleThree/>
     <HookiMain/> */}
   </>
 );
};

