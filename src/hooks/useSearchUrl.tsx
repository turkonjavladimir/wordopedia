import { useTransition } from "react";
import { usePathname, useRouter } from "next/navigation";

const useSearchURL = () => {
  const { push } = useRouter();
  const pathname = usePathname();
  const [isPending, startTransition] = useTransition();

  const updateSearchURL = (searchQuery: string) => {
    const params = new URLSearchParams(window.location.search);
    if (searchQuery) {
      params.set("search", searchQuery);
    } else {
      params.delete("search");
    }

    startTransition(() => {
      push(`${pathname}?${params.toString()}`);
    });
  };

  return { updateSearchURL, isPending };
};

export default useSearchURL;
