// /* DESTRUCTURING
// const contacts = [
//     {
//         name: 'Cody',
//         phone: '123-456-7890',
//         email: 'cody@sample.com'
//     },
//     {
//         name: 'John',
//         phone: '123-456-7890',
//         email: 'john@sample.com',
//     },
//     {
//         name: 'Jane',
//         phone: '123-456-7890',
//         email: 'jane@sample.com',
//     },
//     {
//         name: 'Jill',
//         phone: '123-456-7890',
//         email: 'jill@sample.com',
//     }
// ]

// /*
// const contact1 = contacts [0];
// console.log(contact1);
// */

// const [cody, john, jane] = contacts;
// console.log(john); // { name: 'John', phone: '123-456-7890', email: '


// const grades = {
//     math: 'B-',
//     science: 'A+',
//     english: 'C',
//     history: 'A',
// }

// const { math, science, english, history } = grades;
// console.log(`My english grade was ${english} and my history grade was ${history}.`); // My math grade was B- and my science grade was A+.

// const list = [
//         {
//             title: 'Post 1',
//             content: 'This is post 1'
//         },
//         {
//             title: 'Post 2',
//             content: 'This is post 2'
//         }
//     ];

//     const [comment1] = list;

//     const  { content }  = comment1;
//     console.log(content); // This is post 1

// EVENT HANDLING
// function App() {
//     const handleClick = () => {
//         console.log('Button clicked');
//     }

//     return (
//             // Notice that we are passing the function as a reference, not calling it.
//             <button onClick={handleClick}>Click me</button>
//     )
// }

// State management
// By default, function components do not have state and will not re-render when local variables change. To add state to a function component, we use the useState hook.

// function App () {
//     const [message, setMessage] = React.useState('');// Initialize a default state

//     function activateLasers() {
//         setMessage('Lasers activated');
//     }

//     return (
//         <React.Fragment>
//             {message}
//             <button onClick={activateLasers}>
//                 Activate Lasers
//             </button>
//         </React.Fragment>
//     )

// }

/*Form handling
-> onSubmit attribute to handle form submission
-> preventDefault() method to prevent the default behavior of the page from refreshing
-> Standard way to retrieve data from a form with Controlled Components - requires using React State
*/


const root = ReactDOM.createRoot(document.getElementById('root'));

//Functional component
const App = () => {

    //Declare variables & javascript expressions
    // const [greeting, setGreeting] = React.useState('Hello from React!'); // Default state
    const [formData, setFormData] = React.useState({
        firstName: '',
        lastName: ''
    }); // Default state

    // //Event handler
    // const handleChangeGreeting = () => {
    //     setGreeting('Goodbye from React!'); // Change state
    // }

    //handler function for onSubmit event
    const handleFormSubmit = (e) => {
        //prevent page from refreshing
        e.preventDefault();
        console.log(formData);
    }

    //handler function for onChange event
    const handleInputChange = (e) => {

        const {name, value} = e.target; // get name and value of current input field
        console.log(e.target);

        setFormData((prevState) => ({
            ...prevState, // keep all other form data - prevState ensures that the state update is based on the most recent state.
            [name]: value, // update the specific field with the new value. 

            // If prevState is not used, the state will be updated with only the current field.
        }))

    }

    //displayed in browser
    return (
        <>
        {/* Commented code       
            <h1>{greeting}</h1>
            <button onClick={handleChangeGreeting} >Change message</button>
        */}

        <form onSubmit={handleFormSubmit}>
            <input name="firstName" type="text" placeholder="Enter your first name" value={formData.firstName} onChange={handleInputChange}/>
            <input name="lastName" type="text" placeholder="Enter your last name" value={formData.lastName} onChange={handleInputChange}/>
            <button type="submit">Submit</button>
        </form>

        </>
    )
}

root.render(<App />);