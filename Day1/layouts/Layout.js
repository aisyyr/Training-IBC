import React from 'react';
import Header from './Header';
import Footer from './Footer';

export default function Layout(props) {
     return (
          <div>
               <Header/>
                    <main className="container mt-4 mb-4">{props.children}</main>
               <Footer/>
          </div>
     );
}