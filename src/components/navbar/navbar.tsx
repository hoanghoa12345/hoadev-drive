import { component$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";
import siteConfig from "~/config/site.config";
import {
  FaEnvelopeRegular,
  FaMagnifyingGlassSolid,
} from "@qwikest/icons/font-awesome";
import Logo from "~/assets/images/logo.svg?jsx";
import useDeviceOS from "~/utils/useDeviceOS";

export const Navbar = component$(() => {
  const os = useDeviceOS();

  return (
    <div class="sticky top-0 z-[100] border-b border-gray-900/10 bg-white bg-opacity-80 backdrop-blur-md dark:border-gray-500/30 dark:bg-gray-900">
      <div class="mx-auto flex w-full items-center justify-between space-x-4 px-4 py-1">
        <Link
          href="/"
          class="flex items-center space-x-2 py-2 hover:opacity-80 md:p-2 dark:text-white"
        >
          <Logo class="h-6 w-6" />
          <span class="hidden font-bold sm:block">{siteConfig.title}</span>
        </Link>

        <div class="flex flex-1 items-center space-x-4 text-gray-700 md:flex-initial">
          <button class="flex flex-1 items-center justify-between rounded-lg bg-gray-100 px-2.5 py-1.5 hover:opacity-80 md:w-48 dark:bg-gray-800 dark:text-white">
            <div class="flex items-center space-x-2">
              <FaMagnifyingGlassSolid class="h-4 w-4" />
              <span class="truncate text-sm font-medium">Search ...</span>
            </div>

            <div class="hidden items-center space-x-1 md:flex">
              <div class="rounded-lg bg-gray-200 px-2 py-1 text-xs font-medium dark:bg-gray-700">
                {os === "mac" ? "⌘" : "Ctrl"}
              </div>
              <div class="rounded-lg bg-gray-200 px-2 py-1 text-xs font-medium dark:bg-gray-700">
                K
              </div>
            </div>
          </button>

          {siteConfig.links.length !== 0 &&
            siteConfig.links.map((l: { name: string; link: string }) => (
              <a
                key={l.name}
                href={l.link}
                target="_blank"
                rel="noopener noreferrer"
                class="flex items-center space-x-2 hover:opacity-80 dark:text-white"
              >
                <span class="hidden text-sm font-medium md:inline-block">
                  {l.name}
                </span>
              </a>
            ))}

          {siteConfig.email && (
            <a
              href={siteConfig.email}
              class="flex items-center space-x-2 hover:opacity-80 dark:text-white"
            >
              <FaEnvelopeRegular />
              <span class="hidden text-sm font-medium md:inline-block">
                Email
              </span>
            </a>
          )}
        </div>
      </div>
    </div>
  );
});
