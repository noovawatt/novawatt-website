import HeroSub from "@/components/shared/HeroSub";
import ProjectsListing from "@/components/Projects/ProjectList";
import React from "react";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Project List | Homely",
};

const page = () => {
  return (
    <>
      <HeroSub
        title="Discover inspiring designed homes."
        description="Experience elegance and comfort with our exclusive luxury villas, designed for sophisticated living."
        badge="Projects"
      />
      <ProjectsListing />
    </>
  );
};

export default page;
