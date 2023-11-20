// React Router pozwala wykonać nawigację nie tylko po kliknięciu w Link, ale również po określonym działaniu użytkownika, 
// zdarzeniu lub efekcie, na przykład po kliknięciu na przycisk, po wysłaniu formularza, po wyniku zapytania HTTP i tym podobne.
// Dla przykładu wykorzystujemy proces logowania użytkownika w aplikacji. 
// Po wysłaniu formularza na stronie logowania wykonujemy nawigację na stronie profilu użytkownika, 
// ale tylko jeśli zapytanie HTTP zakończyło się sukcesem.

// import { useNavigate } from "react-router-dom";


// export const Login = () => {
//   const navigate = useNavigate();

//   const handleSubmit = async values => {
//     const response = await FakeAPI.login(values);
//     if (response.success) {
//       navigate("/profile", { replace: true });//Właściwość replace, domyślnie false, kontroluje, w jaki sposób zostanie dodany nowy zapis do stosu historii.
//     }
//   };

//   return (
//     <div>
//       <h1>Login page</h1>
//       <LoginForm onSubmit={handleSubmit} />
//     </div>
//   );
// };





//Drugim sposobem jest komponent Navigate

// import { Navigate, useState } from "react-router-dom";

// export const Login = () => {
//   const [isLoginSuccess, setIsLoginSuccess] = useState(false);

//   const handleSubmit = async values => {
//     const response = await FakeAPI.login(values);
//     setIsLoginSuccess(response.success);
//   };

//   if (isLoginSuccess) {
//     return <Navigate to="/profile" replace />;
//   }

//   return (
//     <div>
//       <h1>Login page</h1>
//       <LoginForm onSubmit={handleSubmit} />
//     </div>
//   );
// };







//Trzecim sposobem jest wykorzystanie funkcji redirect.

//import { redirect } from "react-router-dom";

// const loader = async () => {
//   const user = await getUser();
//   if (!user) {
//     return redirect("/login");
//   }
//   return null;
// };