import { Head } from "$fresh/runtime.ts";
import Counter from "../islands/Counter.tsx";
import JavascriptIcon from "../components/icons/javascript.jsx";
import Express from "../components/icons/express.jsx";
import Jest from "../components/icons/jest.jsx";
import Mongo from "../components/icons/mongo.jsx";
import React from "../components/icons/react.jsx";
import Node from "../components/icons/node.jsx";
import Deno from "../components/icons/deno.jsx";
import Postgresql from "../components/icons/postgresql.jsx";
import Tailwind from "../components/icons/tailwind.jsx";
import Fresh from "../components/icons/fresh.jsx";
import Vue from "../components/icons/vue.jsx";
import PythonLogo from "../components/icons/python.tsx";
import HtmlIcon from "../components/icons/html.jsx";
import TypescriptIcon from "../components/icons/typescript.jsx";
import CssIcon from "../components/icons/css.jsx";
import Git from "../components/icons/git.jsx";

export default function Home() {
  return (
    <>
      <Head>
        <title>Jonathan</title>
      </Head>
      <div class="p-4 mx-auto max-w-screen-md">
        <img
          src="/logo.svg"
          class="w-32 h-32"
          alt="the fresh logo: a sliced lemon dripping with juice"
        />
        <ul class="flex max-w-md flex-wrap align-middle justify-center items-center gap-3">
          <JavascriptIcon width="3.5em" height="3.5em" />
          <HtmlIcon />
          <CssIcon />
          <TypescriptIcon />
          <Git />
          <PythonLogo />
          <Fresh />
          <Mongo />
          <Deno />
          <Node />
          <Jest />
          <Postgresql />
          <Vue />
          <React />
        </ul>
        <p class="my-6">
          Welcome to `fresh`. This is awesome.
        </p>
        <Counter start={3} />
      </div>
    </>
  );
}
