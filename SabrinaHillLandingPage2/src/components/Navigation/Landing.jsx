import './Navbar'
import React from 'react';
import './App.css'

export function landing() {
    return (
        <div className="landing">
          <header>
            <h1>Welcome to My Landing Page</h1>
          </header>
          <main>
            <section>
              <h2>About Us</h2>
              <p>Not sure what I am doing.</p>
            </section>
            <section>
              <h2>Contact Us</h2>
              <p>I'm still trying to figure this out</p>
            </section>
            <section>
                <h2>Footer</h2>
                <p>Not sure if this is the correct process</p>
            </section>
          </main>
        </div>
    );
}

export default landing
