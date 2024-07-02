"use client";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";

export default function Home() {
  const val = useSearchParams().get("val");
  console.log(val);
  return (
    <Suspense>
      <main>Hello World</main>
    </Suspense>
  );
}
