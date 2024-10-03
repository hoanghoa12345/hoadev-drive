import { component$, Slot } from "@builder.io/qwik";
import type { DocumentHead, RequestHandler } from "@builder.io/qwik-city";
import Footer from "~/components/footer/footer";
import { Navbar } from "~/components/navbar/navbar";
import siteConfig from "~/config/site.config";

export const onGet: RequestHandler = async ({ cacheControl }) => {
  // Control caching for this request for best performance and to reduce hosting costs:
  // https://qwik.dev/docs/caching/
  cacheControl({
    // Always serve a cached response by default, up to a week stale
    staleWhileRevalidate: 60 * 60 * 24 * 7,
    // Max once every 5 seconds, revalidate on the server to get a fresh version of this page
    maxAge: 5,
  });
};

export default component$(() => {
  return (
    <div class="flex min-h-screen flex-col items-center justify-center bg-white dark:bg-gray-900">
      <main class="flex w-full flex-1 flex-col bg-gray-50 dark:bg-gray-800">
        <Navbar />
        <div class="mx-auto w-full max-w-5xl py-4 sm:p-4">
          <Slot />
        </div>
      </main>
      <Footer />
    </div>
  );
});

export const head: DocumentHead = {
  links: siteConfig.googleFontLinks.map((href) => ({
    rel: "stylesheet",
    href,
  })),
};
