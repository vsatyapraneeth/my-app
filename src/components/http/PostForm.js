// import React, { Component } from "react";
// import axios from 'axios'



// export class PostForm extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       userId: "",
//       title: "",
//       body: "",
//     };

//     this.handleChange = this.handleChange.bind(this);
//     this.submitHandler = this.submitHandler.bind(this);

//   }

//   handleChange = (e) => {
//     this.setState({ [e.target.name]: e.target.value });
//   };

//   submitHandler = e => {
//     e.preventDefault()
//     console.log(this.state)
//     axios.post('https://jsonplaceholder.typicode.com/posts')
//     .then( response => {
//         console.log(response.data)
//     })
//     .catch(error => {
//         console.log(error)
//     })
//   }
//   render() {
//     const { userId, title, body } = this.state;
//     return (
//       <div>
//         <form onSubmit={this.submitHandler}>
//           <div>
//             {" "}
//             <input
//               type="text"
//               name="userId"
//               value={userId}
//               onChange={this.handleChange}
//             />
//           </div>
//           <div>
//             {" "}
//             <input
//               type="text"
//               name="title"
//               value={title}
//               onChange={this.handleChange}
//             />
//           </div>
//           <div>
//             {" "}
//             <input
//               type="text"
//               name="body"
//               value={body}
//               onChange={this.handleChange}
//             />
//           </div>
//           <div>
//             {" "}
//             <button type="submit">submit</button>
//           </div>
//         </form>
//       </div>
//     );
//   }
// }

// export default PostForm;


import React, { Component } from 'react';
import axios from 'axios';

export class PostForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userId: "",
      title: "",
      body: "",
    };

    this.handleChange = this.handleChange.bind(this);
    this.submitHandler = this.submitHandler.bind(this);
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  submitHandler(e) {
    e.preventDefault();
    console.log(this.state);

    axios.post('http://localhost:5000/api/posts', this.state)
      .then(response => {
        console.log(response.data);
        // Optionally clear the form or show a success message
        this.setState({ userId: "", title: "", body: "" });
      })
      .catch(error => {
        console.log(error);
        // Optionally show an error message
      });
  }

  render() {
    const { userId, title, body } = this.state;
    return (
      <div>
        <form onSubmit={this.submitHandler}>
          <div>
            <label htmlFor="userId">User ID:</label>
            <input
              type="text"
              name="userId"
              value={userId}
              onChange={this.handleChange}
            />
          </div>
          <div>
            <label htmlFor="title">Title:</label>
            <input
              type="text"
              name="title"
              value={title}
              onChange={this.handleChange}
            />
          </div>
          <div>
            <label htmlFor="body">Body:</label>
            <textarea
              name="body"
              value={body}
              onChange={this.handleChange}
            />
          </div>
          <div>
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    );
  }
}

export default PostForm;
