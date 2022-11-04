import { useRouter } from "next/router";

const useDir = () => {
  const { locale } = useRouter();

  return locale == "fa" ? "rtl" : "ltr";
};

export default useDir;
