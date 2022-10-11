import React from 'react';
import './Blog.css'

const Blog = () => {
    return (
        <div>
            <div>
                <h1>
                1. What is the purpose of react router?
                    
                </h1>
                <p className='first-question'>
                Ans: React Router is a standard library for routing in React. It enables the navigation among views of various components in a React Application, allows changing the browser URL, and keeps the UI in sync with the URL.
                </p>
            </div>
            <div>
                <h1>

                2. How context API works?
                </h1>
                <p>
                Ans: The React Context API is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on. Context is also touted as an easier, lighter approach to state management using Redux.
                React.createContext() is all you need. It returns a consumer and a provider. Provider is a component that as it's names suggests provides the state to its children. It will hold the "store" and be the parent of all the components that might need that store. Consumer as it so happens is a component that consumes and uses the state. More information can be found on React's documentation page
                </p>
            </div>
            <div></div>
        </div>
    );
};

export default Blog;