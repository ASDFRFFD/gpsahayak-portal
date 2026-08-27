import { Metadata } from "next";
import CscCalculator from "@/components/tools/CscCalculator";

export const metadata: Metadata = {
  title: "CSC ई-डिस्ट्रिक्ट आय व कमीशन कैलकुलेटर 2026",
  description: "ग्राम सचिवालय में दी जाने वाली डिजिटल सेवाओं (आय, जाति, खतौनी, CRS, पैन कार्ड) की मासिक आय का हिसाब लगाएं।",
};

export default function CscCalcPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
      <CscCalculator />
    </div>
  );
}
