import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { routeLoader$ } from "@builder.io/qwik-city";
import siteConfig from "~/config/site.config";

export const useFetchApi = routeLoader$(async () => {
  const response = await fetch("", {
    headers: { Accept: "application/json" },
  });
  return (await response.json()) as {
    userId: number;
    id: number;
    title: string;
    completed: boolean;
  };
});

export default component$(() => {
  const todoSignal = useFetchApi()
  return (
    <>
      <p>{todoSignal.value.title}</p>
    </>
  );
});

export const head: DocumentHead = {
  title: siteConfig.title,
  meta: [
    {
      name: "description",
      content: siteConfig.title,
    },
  ],
};
