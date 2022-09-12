/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";

// routes/html.tsx

import { PageProps } from "$fresh/server.ts";

export default function Page(props: PageProps) {
  return <div>You are on the page '{props.url.href}'.</div>;
}


//**original code */

/*import Counter from "../islands/Counter.tsx";

export default function Home() {
  return (
    <div class={tw`p-4 mx-auto max-w-screen-md`}>
      <img
        src="/logo.svg"
        height="100px"
        alt="the fresh logo: a sliced lemon dripping with juice"
      />
      <p class={tw`my-6`}>
        Welcome to `fresh`. Try updating this message in the ./routes/index.tsx
        file, and refresh.
      </p>
      <Counter start={3} />
    </div>
  );
}*/
