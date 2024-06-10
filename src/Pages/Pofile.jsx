import React, { useEffect } from 'react';

const Profile = () => {
  useEffect(() => {
    const links = document.querySelectorAll('.link');
    links.forEach(link => {
      link.addEventListener('mouseover', () => {
        const tooltip = document.createElement('span');
        tooltip.className = 'tooltip';
        tooltip.textContent = link.getAttribute('data-tooltip');
        link.appendChild(tooltip);
      });
      link.addEventListener('mouseout', () => {
        const tooltip = link.querySelector('.tooltip');
        if (tooltip) {
          link.removeChild(tooltip);
        }
      });
    });
    return () => {
      links.forEach(link => {
        link.removeEventListener('mouseover', null);
        link.removeEventListener('mouseout', null);
      });
    };
  }, []);

  return (
    <div
      className="profile-container"
      style={{
        fontFamily: 'sans-serif',
        color: '#1a202c',
        backgroundImage: "url('https://source.unsplash.com/1L71sPT5XKc')",
        backgroundSize: 'cover',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <div
        className="profile-card"
        style={{
          backgroundColor: 'rgba(255, 255, 255, 0.9)',
          padding: '2rem',
          borderRadius: '1rem',
          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
          maxWidth: '600px',
          width: '100%',
          textAlign: 'center',
        }}
      >
        <div
          className="profile-image"
          style={{
            backgroundImage: "url('https://source.unsplash.com/MP0IUfwrn0A')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            width: '150px',
            height: '150px',
            borderRadius: '50%',
            margin: '0 auto',
            marginBottom: '1rem',
          }}
        ></div>
        <h1 style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>Your Name</h1>
        <p style={{ fontWeight: 'bold', marginBottom: '0.5rem', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <svg
            className="icon"
            style={{ width: '1rem', height: '1rem', fill: '#38a169', marginRight: '0.5rem' }}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path d="M9 12H1v6a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-6h-8v2H9v-2zm0-1H0V5c0-1.1.9-2 2-2h4V2a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v1h4a2 2 0 0 1 2 2v6h-9V9H9v2zm3-8V2H8v1h4z" />
          </svg>
          What you do
        </p>
        <p style={{ color: '#718096', fontSize: '0.875rem', marginBottom: '1rem', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <svg
            className="icon"
            style={{ width: '1rem', height: '1rem', fill: '#38a169', marginRight: '0.5rem' }}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path d="M10 20a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm7.75-8a8.01 8.01 0 0 0 0-4h-3.82a28.81 28.81 0 0 1 0 4h3.82zm-.82 2h-3.22a14.44 14.44 0 0 1-.95 3.51A8.03 8.03 0 0 0 16.93 14zm-8.85-2h3.84a24.61 24.61 0 0 0 0-4H8.08a24.61 24.61 0 0 0 0 4zm.25 2c.41 2.4 1.13 4 1.67 4s1.26-1.6 1.67-4H8.33zm-6.08-2h3.82a28.81 28.81 0 0 1 0-4H2.25a8.01 8.01 0 0 0 0 4zm.82 2a8.03 8.03 0 0 0 4.17 3.51c-.42-.96-.74-2.16-.95-3.51H3.07zm13.86-8a8.03 8.03 0 0 0-4.17-3.51c.42.96.74 2.16.95 3.51h3.22zm-8.6 0h3.34c-.41-2.4-1.13-4-1.67-4S8.74 3.6 8.33 6zM3.07 6h3.22c.2-1.35.53-2.55.95-3.51A8.03 8.03 0 0 0 3.07 6z" />
          </svg>
          Your Location - 25.0000° N, 71.0000° W
        </p>
        <p style={{ marginBottom: '1rem' }}>
          Totally optional short description about yourself, what you do and so on.
        </p>
        <button
          style={{
            backgroundColor: '#38a169',
            color: '#fff',
            fontWeight: 'bold',
            padding: '0.5rem 1rem',
            borderRadius: '9999px',
            cursor: 'pointer',
            border: 'none',
            marginBottom: '1rem',
          }}
        >
          Get In Touch
        </button>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem' }}>
          <a className="link" href="#" data-tooltip="@facebook_handle" style={{ position: 'relative', cursor: 'pointer' }}>
            <svg
              className="icon"
              style={{ width: '1.5rem', height: '1.5rem', fill: '#718096', transition: 'fill 0.2s' }}
              role="img"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Facebook</title>
              <path d="M22.676 0H1.324C.593 0 0 .593 0 1.324v21.352C0 23.408.593 24 1.324 24h11.494v-9.294H9.689v-3.621h3.129V8.41c0-3.099 1.894-4.785 4.659-4.785 1.325 0 2.464.097 2.796.141v3.24h-1.921c-1.5 0-1.792.721-1.792 1.771v2.311h3.584l-.465 3.63H16.56V24h6.115c.733 0 1.325-.592 1.325-1.324V1.324C24 .593 23.408 0 22.676 0" />
            </svg>
          </a>
          <a className="link" href="#" data-tooltip="@twitter_handle" style={{ position: 'relative', cursor: 'pointer' }}>
            <svg
              className="icon"
              style={{ width: '1.5rem', height: '1.5rem', fill: '#718096', transition: 'fill 0.2s' }}
              role="img"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Twitter</title>
              <path d="M23.954 4.569c-.885.389-1.83.654-2.825.775 1.014-.611 1.794-1.574 2.163-2.723-.951.555-2.005.959-3.127 1.184-.896-.959-2.173-1.559-3.591-1.559-2.717 0-4.92 2.203-4.92 4.917 0 .39.045.765.127 1.124C7.691 8.094 4.066 6.13 1.64 3.161c-.427.729-.666 1.571-.666 2.475 0 1.71.87 3.216 2.188 4.099-.807-.026-1.566-.248-2.228-.616v.061c0 2.385 1.693 4.374 3.946 4.828-.413.112-.849.171-1.296.171-.314 0-.615-.03-.916-.086.631 1.953 2.445 3.377 4.604 3.416-1.68 1.319-3.809 2.105-6.102 2.105-.39 0-.779-.023-1.17-.067 2.179 1.394 4.768 2.209 7.554 2.209 9.054 0 14-7.5 14-14 0-.213-.005-.425-.014-.637.962-.692 1.8-1.56 2.46-2.548l-.047-.02z" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Profile;

