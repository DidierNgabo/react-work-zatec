import { Component } from "react";
import Sidebar from "./Sidebar";
import Article from "./Article";

export default class Main extends Component {
  render() {
    return (
      <div className=" w-11/12 mt-16 h-4/5  h-auto mx-auto md:grid md:grid-cols-3 md:gap-20 md:grid-rows-3">
        <Sidebar css="row-span-3" />
        <Article css="col-span-2" />
        <Article css="col-span-2" />
        <Article css="col-span-2" />
      </div>
    );
  }
}
