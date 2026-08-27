import { Metadata } from "next";
import SalaryCalculator from "@/components/tools/SalaryCalculator";

export const metadata: Metadata = {
  title: "पंचायत सहायक मानदेय व एरियर कैलकुलेटर 2026 | Salary Calculator",
  description: "उत्तर प्रदेश पंचायत सहायक मासिक मानदेय, बकाया एरियर और PFMS भुगतान का त्वरित हिसाब लगाएं।",
};

export default function SalaryCalcPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
      <SalaryCalculator />
    </div>
  );
}
