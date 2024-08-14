// // import './App.css';
// // // import Inline from './Styles/Inline';
// // // import StyleSheet from './Styles/StyleSheet';
// // // import Styles from './Styles/applyStyles.css';
// // // import  './Styles/applyStyles.module.css';
// // //import ListWithReadMore from './example/ListWithReadMore';
// // import Form from './components/formcomponents/Form';
// // // import Greet from './components/Greet';
// // // import Message from './components/Message';
// // // import Counter from './components/Counter';
// // // import FunctionClick from './components/FunctionClick';
// // // import ClassClick from './components/ClassClick';
// // // import UserGreeting from './components/UserGreeting';
// // // import PackingList from './components/PackingList';
// // // import PeopleList from './components/PeopleList';
// // function App() {
  
// //   // return (
// //   //   <div className="App">
// //   //      <h1 className="error">ERROR</h1>
// //   //      <h1 className="success">Success</h1>
// //   //    <StyleSheet  primary = {true}/>
// //   //    <Inline/>
// //   //   </div>
// //   // );
// //       /* <PackingList/>
// //       <PeopleList/> */
// //       /* <UserGreeting/>
// //       <FunctionClick/>
// //       <Counter/>
// //       <Greet name="Vignika" alias="Nathi">
// //       </Greet>
// //       <ClassClick/>
// //       <Message name= "Vignika" alias="Chatu"/> */
      
// //       return (
// //        < div>
// //           <Form/>
// //         </div>
// //         // <div className="App">
// //         //   <h1>List with Read More/Read Less</h1>
// //         //   <ListWithReadMore />
// //         // </div>
        
// //       );
// // }

// // export default App;


// // //it responses to the state changes

// import React from 'react';
// import WeatherComponent from './components/Weather';

// const App = () => {
//   return (
//     <div className="App">
//       <WeatherComponent />
//     </div>
//   );
// };

// export default App;


// import React from 'react';
// import PostForm from './components/http/PostForm';
// import './App.css'; // Optional: for global styling

// const App = () => {
//   return (
//     <div className="App">
//       <PostForm />
//     </div>
//   );
// };

// export default App;

import React from 'react';
// import HookCounter from "./hooks/HookCounter";
// import UseStatePrevCount from "./hooks/UseStatePrevCount";
import UseStateObject from './hooks/UseStateObject';

//install axios
function App() {
  return (
    <div>
      {/* <UseStatePrevCount /> */}
      <UseStateObject/>
      {/* <HookCounter /> */}
    </div>
  );
}
export default App;

