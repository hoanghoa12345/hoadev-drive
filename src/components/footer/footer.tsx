import { component$ } from "@builder.io/qwik";
import siteConfig from "~/config/site.config";

const Footer = component$(() => {
  return (
    <div
      class="w-full border-t border-gray-900/10 p-4 text-center text-xs font-medium text-gray-400 dark:border-gray-500/30"
      dangerouslySetInnerHTML={siteConfig.footer}
    ></div>
  )
})

export default Footer