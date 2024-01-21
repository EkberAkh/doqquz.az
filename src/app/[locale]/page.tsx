"use client";

import { Banner } from "@/components/homePageComponents/Banner";
import { LatestJobPostings } from "@/components/homePageComponents/LatestJobPostings";
import { LatestJobSeekers } from "@/components/homePageComponents/LatestJobSeekers";
import React from "react";

export default function Home() {
  return (
    <>
      <Banner />
      <LatestJobSeekers />
      <LatestJobPostings />
    </>
  );
}
