import { Metadata } from "next";
import HindiEditor from "@/components/tools/HindiEditor";

export const metadata: Metadata = {
  title: "हिंदी ऑफिस एडिटर | Hindi Office Typing & Letter Maker",
  description: "ग्राम सचिवालय के पत्र, प्रार्थना पत्र, नोटिस और प्रस्ताव हिंदी में टाइप करें और तुरंत प्रिंट/PDF डाउनलोड करें।",
};

export default function HindiEditorPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
      <HindiEditor />
    </div>
  );
}
