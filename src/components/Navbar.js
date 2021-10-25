import React, { Component } from "react";

export default class Navbar extends Component {
  constructor() {
    super();

    this.state = {
      isOpen: false
    };
    this.handleMenu = this.handleMenu.bind(this);
  }
  handleMenu() {
    this.setState(() => {
      return { isOpen: !this.state.isOpen };
    });
  }
  render() {
    const { isOpen } = this.state;
    return (
      <nav className="py-4 px-8">
        {/* mobile navbar */}
        <div className="md:hidden flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold">React Work</h1>
          </div>
          {/* mobile button */}
          <button
            type="button"
            onClick={this.handleMenu}
            className="bg-blue-400 inline-flex items-center justify-center p-2 rounded-md text-gray-400  hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-blue-800 focus:ring-white"
            aria-controls="mobile-menu"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            {!isOpen ? (
              <svg
                className="block h-6 w-6 text-black"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            ) : (
              <svg
                className="block h-6 w-6 text-black"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            )}
          </button>
        </div>
        {/*  mobile menu */}
        <div className={`mt-4 ${!isOpen ? "hidden" : ""}`}>
          <div className=" ">
            <ul className="">
              <li className="py-2 bg-blue-400 cursor-pointer rounded text-center hover:bg-blue-400 font-semibold  text-md">
                Home
              </li>
              <li className="py-2 text-center cursor-pointer rounded font-semibold hover:bg-blue-400  text-md">
                About Us
              </li>
              <li className="py-2 text-center cursor-pointer rounded font-semibold hover:bg-blue-400 text-md">
                Contact Us
              </li>
            </ul>
          </div>
          <div className="mt-4">
            <img
              className="mx-auto"
              src="https://via.placeholder.com/50x50"
              alt="profile"
            />
          </div>
        </div>
        {/* md screens menu */}
        <div className="hidden md:flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold">React Work</h1>
          </div>
          <div className="w-1/2 flex justify-between items-center">
            <div className=" w-4/5 border border-black shadow-lg">
              <ul className="flex text-center justify-evenly items-center">
                <li className="py-2 w-1/3 bg-blue-400 hover:bg-blue-400 cursor-pointer text-center font-semibold border-r border-black text-md">
                  Home
                </li>
                <li className="py-2 w-1/3 text-center hover:bg-blue-400 cursor-pointer font-semibold border-r border-black text-md">
                  About Us
                </li>
                <li className="py-2 w-1/3 text-center hover:bg-blue-400 cursor-pointer font-semibold text-md">
                  Contact Us
                </li>
              </ul>
            </div>
            <div>
              <img src="https://via.placeholder.com/50x50" alt="profile" />
            </div>
          </div>
        </div>
      </nav>
    );
  }
}
