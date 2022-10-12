import React, { useRef, useEffect, useState } from "react";

import Head from "next/head";
import Draggable from "react-draggable";
import ContextMenu from "../components/ContextMenu";
import AddNodeForm from "../components/AddNodeForm";

export default function Home() {
  const [addItem, setAddItem] = useState(false);

  const handleSubmit = () => {
    setAddItem(!addItem);
  };

  const handleAddNode = () => {
    document.getElementById("node-container").innerHTML +=
      "<div class='node-box'>";
  };
  return (
    <div>
      <Head>
        <title>RR Example</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <div className='wrapper'>
        <ContextMenu handleAddNode={handleAddNode} />
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
            <button onClick={handleSubmit} data-bs-toggle="modal"
        data-bs-target="#exampleModal" className='addButton btn btn-primary'>
              Add Node
            </button>
          </nav>
          <main className='content'>
            <div className='container-fluid p-0'>
              <div className='row'>
                <div className='col-12 d-flex'>
                  <div className='w-100'>
                    <h1 className='h3 mb-3'>
                      <strong>Factory</strong> Floor
                    </h1>
                  </div>
                </div>
              </div>
              <div className='row'>
                <div className='col-12 d-flex'>
                  <div className='w-100'>
                    <div className='floor-plan'>
                      <img src='/images/floor2.png' alt='' />
                      {addItem && (
          <AddNodeForm
            addItem={addItem}
            setAddItem={setAddItem}
          />
        )}
                      <Draggable>
                        <div id='node-container' />
                      </Draggable>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
