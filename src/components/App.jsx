

import { Product } from './Product';
<Product 
price= '20'
name= "Jordan"
buttonText='Okej'
/>

const favoriteBooks = [
  { id: "id-1", name: "JS for beginners" },
  { id: "id-2", name: "React basics" },
  { id: "id-3", name: "React Router overview" },
  { id: "id-4", name: "Redux in depth" },
];

const BookList = ({ books }) => {
  return (
    <ul>
      {
        books.map(({id, name}, index) => (
          <li key={id}>
            {index + 1}{" "}{name}
          </li>
        ))
      }
    </ul>
  )
}

const Profile = ({ name, email, children}) => (
  <div>
    <p>Name: {name}</p>
    <p>Email: {email}</p>
    <ul>
    <li>{children}</li>
    </ul>
  </div>
)

const Panel = ({ title, children }) => (
  <section>
    <h2>{title}</h2>
    {children}
  </section>
)

const Mailbox = ({ username, unreadMessages }) => (
    <div>
      <h1>Hello {username}!</h1>
      <p>
      {
        unreadMessages.length > 0 ? 
          `You have ${unreadMessages.length} unread messages.`
           : "No unread messages"
      }
      </p>
    </div>
  )


function App() {
  return (
    <div>
      <BookList books={favoriteBooks}/>
    </div>
  );
}

export default App;