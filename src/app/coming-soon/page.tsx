import { ComingSoon } from "@/components/ComingSoon/ComingSoon";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Coming Soon | VEKA",
  description: "This feature is coming soon to VEKA",
};

export default function ComingSoonPage() {
  return <ComingSoon />;
} 