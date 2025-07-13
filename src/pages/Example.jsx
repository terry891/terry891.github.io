import { Link } from 'react-router-dom';

import Test from '../components/Test'               // Default import for the Test component
import { TestWithProps } from '../components/Test' // Named import for the component with props
import Card_T from '../components/Card_T'


function Example() {
  const cardNumber = 1; //Conditional rendering

  return (
    <>
      <nav style={{ padding: '1rem', marginBottom: '2rem' }}>
        <Link to="/" style={{ color: '#646cff', textDecoration: 'none', marginRight: '1rem' }}>
          ← Back to Home
        </Link>
        <Link to="/login" style={{ color: '#646cff', textDecoration: 'none', marginRight: '1rem' }}>
          Login
        </Link>
        <Link to="/signup" style={{ color: '#646cff', textDecoration: 'none' }}>
          Sign Up
        </Link>
      </nav>
      
      <h1>Example Page</h1>

      {/* <Test /> */}
      {/* <Test> </Test> */}
      {/* <TestWithProps message="parameter input" /> */}

      {/* Conditional rendering - 2 ways*/}
      {cardNumber === 1 ? (
        <Card_T item={{title: "Card_Title", body: "Body", url: "https://picsum.photos/200", url_title: "Placeholder Image"}} />
      ) : (
        <p>No card to display.</p>
      )}
      <br />
      {cardNumber === 2 && (<Card_T item={{title: "Card_Title_2", body: "Body", url: "https://picsum.photos/300", url_title: "Another Placeholder Image"}} />)}

    </>
  )
}

export default Example
