import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage = () => {
  return (
    <div style={{ textAlign: 'center', marginTop: '50px', padding: '20px' }}>
      <h1>Oops! Page Not Found (404)</h1>
      <p>We're sorry, but the page you were looking for doesn't exist or has been moved.</p>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        <li style={{ marginBottom: '10px' }}>
          <Link to="/">Go to the Homepage</Link>
        </li>
        <li>Check the URL for any typos.</li>
      </ul>
    </div>
  );
};

export default NotFoundPage;