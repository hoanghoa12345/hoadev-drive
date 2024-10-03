import { useSignal, useTask$ } from "@builder.io/qwik";
import { isBrowser } from "@builder.io/qwik/build";

export default function useDeviceOS(): string {
  const os = useSignal<string>("");

  useTask$(() => {
    if (isBrowser) {
      const userAgent = window.navigator.userAgent;

      if (userAgent.indexOf("Windows") > -1) {
        os.value = "windows";
      } else if (userAgent.indexOf("Mac OS") > -1) {
        os.value = "mac";
      } else if (userAgent.indexOf("Linux") > -1) {
        os.value = "linux";
      } else {
        os.value = "other";
      }
    }
  });

  return os.value;
}
