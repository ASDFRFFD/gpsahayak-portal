import { Metadata } from "next";
import FarmerIdGenerator from "@/components/tools/FarmerIdGenerator";

export const metadata: Metadata = {
  title: "फार्मर आईडी कार्ड जनरेटर 2026 | Farmer ID Card Maker Online UP",
  description: "कृषि विभाग उत्तर प्रदेश की किसान रजिस्ट्री (Farmer ID Card) ऑनलाइन बनाएं व प्रिंट करें। PVC / A4 साइज आईडी कार्ड जनरेटर।",
  keywords: ["farmer id card generator", "kisan registry card maker", "up kisan id card print", "panchayat sahayak tools"],
};

export default function FarmerIdPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
      <FarmerIdGenerator />
    </div>
  );
}
