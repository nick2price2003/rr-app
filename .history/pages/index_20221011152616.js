import Head from "next/head";
import { gsap } from "gsap";
import ContextMenu from "../components/ContextMenu";

export default function Home() {
  return (
    <div>
      <Head>
        <title>RR Example</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <div className='wrapper'>
        <ContextMenu />
        <nav id='sidebar' className='sidebar js-sidebar'>
          <div className='sidebar-content js-simplebar'>
            <a className='sidebar-brand' href='index.html'>
              <span className='align-middle'>Example</span>
            </a>

            <ul className='sidebar-nav'>
              <li className='sidebar-header'>Pages</li>

              <li className='sidebar-item active'>
                <a className='sidebar-link' href='index.html'>
                  <i className='align-middle' data-feather='sliders'></i>{" "}
                  <span className='align-middle'>Dashboard</span>
                </a>
              </li>
            </ul>
          </div>
        </nav>

        <div className='main floor-plan'>
          <nav className='navbar navbar-expand navbar-light navbar-bg'>
            <a className='sidebar-toggle js-sidebar-toggle'>
              <i className='hamburger align-self-center'></i>
            </a>
          </nav>
          <main className='content'>
            <div className='container-fluid p-0'>
              <div class='row'>
                <div class='col-xl-6 col-xxl-5 d-flex'>
                  <div class='w-100'>
                    <h1 className='h3 mb-3'>
                      <strong>Factory</strong> Floor
                    </h1>
                  </div>
                </div>
              </div>
              <div className='row'>
                <div className='col-12'>
                  <h1 className='h3 mb-3'>
                    <strong>Factory</strong> Floor
                  </h1>
                </div>
              </div>
              <div className='row'>
                <div className='col-12'>
                  <div id='node-container' />
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
