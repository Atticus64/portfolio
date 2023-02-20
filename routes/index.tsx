import { Head } from "$fresh/runtime.ts";
import Counter from "../islands/Counter.tsx";
import JavascriptIcon from "../components/icons/javascript.jsx";
import PythonLogo from "../components/icons/python.tsx";

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
        <ul class="flex justify-start align-middle items-center">
          <JavascriptIcon width="4em" height="4em" />
          <PythonLogo />
        </ul>
        <p class="my-6">
          Welcome to `fresh`. This is awesome.
        </p>
        <Counter start={3} />
      </div>
    </>
  );
}
