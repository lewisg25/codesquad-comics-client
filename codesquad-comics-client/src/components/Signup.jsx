// import React from "react"
// const Signup = () => {
//     return (
//         <>
//           <main className="container">
//         <h1>Login</h1>
//         <p>Please enter your credentials below:</p>
//         <form action="#" method="POST" class="login">
//             <div>
//                 <label for="username">First Name:</label>
//                 <input type="text" id="username" name="username" placeholder="First Name" required/>
//             </div>
//             <div>
//                 <label for="password">Last Name:</label>
//                 <input type="password" id="password" name="password" placeholder=" Last Name" required/>
//             </div>
//             <button type="submit">Submit</button>
//         </form>
//     </main>
//         </>
      
//     )
// }
// export default Signup



import React from "react"

const Signup = ({ user, setUser }) => {
    const handleSignupSubmit = (e) => {
        e.preventDefault();
        console.log("Signup method ran");
        console.log("First Name:", e.target.firstName.value);
        console.log("Last Name:", e.target.lastName.value);
        console.log("Username:", e.target.username.value);
        console.log("Password:", e.target.password.value);
    };

    return (
        <main className="container">
            <h1>Signup</h1>
            <p>Please enter your information below:</p>
            <form onSubmit={handleSignupSubmit} className="login">
                <div>
                    <label htmlFor="firstName">First Name:</label>
                    <input type="text" name="firstName" required/>
                </div>
                <div>
                    <label htmlFor="lastName">Last Name:</label>
                    <input type="text" name="lastName" required/>
                </div>
                <div>
                    <label htmlFor="username">Username:</label>
                    <input type="text" name="username" required/>
                </div>
                <div>
                    <label htmlFor="password">Password:</label>
                    <input type="password" name="password" required/>
                </div>
                <button type="submit">Submit</button>
            </form>
        </main>
    )
}
export default Signup;