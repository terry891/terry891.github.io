import { Link } from 'react-router-dom';

import Test from '../components/Test'               // Default import for the Test component
import { TestWithProps } from '../components/Test' // Named import for the component with props
import Card_T from '../components/Card_T'


function Example() {
  const cardNumber = 1;

  // Conditional rendering

  return (
    <>
      <nav style={{ padding: '1rem', marginBottom: '2rem' }}>
        <Link to="/" style={{ color: '#646cff', textDecoration: 'none' }}>
          ← Back to Home
        </Link>
      </nav>
      
      <h1>Example Page</h1>

      <Test />
      <Test> </Test>
      <TestWithProps message="parameter input" />
      <Card_T item={{title: "Card_Title", body: "Card body content", url: "https://via.placeholder.com/150", url_title: "Placeholder Image"}} />
    </>
  )
}

export default Example
