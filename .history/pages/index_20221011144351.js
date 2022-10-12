import Head from "next/head";
import { gsap } from "gsap";
import ContextMenu from "../components/ContextMenu";

export default function Home() {
  const CustomMenu = () => (
    <ul className='menu'>
      <li>Login</li>
      <li>Register</li>
      <li>Open Profile</li>
    </ul>
  );

  return (
    <div>
      <Head>
        <title>RR Example</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <div className='wrapper'>
        <ContextMenu menu={} />
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

        <div className='main'>
          <nav className='navbar navbar-expand navbar-light navbar-bg'>
            <a className='sidebar-toggle js-sidebar-toggle'>
              <i className='hamburger align-self-center'></i>
            </a>
          </nav>
          <main className='content'>
            <div className='container-fluid p-0'>
              <h1 className='h3 mb-3'>
                <strong>Factory</strong> Floor
              </h1>
              <div className='row my-5'>
                <div className='col col-grid'>Column</div>
                <div className='col col-grid'>Column</div>
                <div className='col col-grid'>Column</div>
              </div>
              <div className='row'>
                <div className='col col-grid'>Column</div>
                <div className='col col-grid'>Column</div>
                <div className='col col-grid'>Column</div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
