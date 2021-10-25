import { Component } from "react";

export default class Sidebar extends Component {
  render() {
    return (
      <aside
        className={` w-full flex  flex-col  ${this.props.css} justify-between items-center border-2 border-black`}
      >
        <h1 className="p-4 w-full capitalize font-semibold text-lg  border-b-2 border-black bg-blue-400">
          countries
        </h1>
        <ul className="mt-8 md:mt-0 w-full">
          <li className="border-t-2 p-4 border-b-2 border-black">America</li>
          <li className=" border-b-2 p-4 border-black">Africa</li>
          <li className="border-b-2 p-4 border-black">Europe</li>
          <li className="p-4">Asia</li>
        </ul>
      </aside>
    );
  }
}
