import { Metadata } from "next";
import Main from "@/components/Main";

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Jackson Myers",
};

const Page = async () => {
  return <Main />;
};

export default Page;
