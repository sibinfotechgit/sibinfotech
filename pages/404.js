import React from 'react';
import Link from 'next/link';

export default function NotFound() {
  return (
    <div>
      <section className="border-top pt-4">
        <div className="containerFull">
          <div className="row">
            <div className="col-lg-6 offset-lg-3">
              <div className="center404">
                  <div className="px-lg-4">
                    <img src="assets/images/404-blue.png" className="w-100" alt="Not Found"/>
                  </div>
                <h1 className="heading fontWeight700">Page not found</h1>
                <p className="mt-3">Uh oh, we're sorry. The page you requested cannot be found,</p>
                <p>Please go back to the homepage.</p>
                <Link href="/" className="btnThemeRed mt-3">
                  <a>Go Home</a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
