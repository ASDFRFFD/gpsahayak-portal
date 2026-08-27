export interface BlogPost {
  slug: string;
  title: string;
  subtitle?: string;
  excerpt: string;
  category: string;
  readTime: string;
  date: string;
  author: string;
  image?: string;
  content: string;
  tags: string[];
}

export const BLOGS_DATA: BlogPost[] = [
  {
    slug: "what-is-panchayat-sahayak",
    title: "पंचायत सहायक क्या है? भूमिका, कार्य, वेतन, चुनौतियाँ और भविष्य 2026",
    subtitle: "Panchayat Sahayak cum Data Entry Operator (DEO) Complete Guide",
    excerpt: "पंचायत सहायक वह व्यक्ति होता है जो ग्राम पंचायत में रहकर सरकारी योजनाओं, डेटा और डिजिटल सेवाओं को संभालता है। जानिए उनकी भूमिका, काम और भविष्य।",
    category: "Job Guide",
    readTime: "6 min read",
    date: "2026-03-31",
    author: "Panchayat Sahayak Portal Team",
    tags: ["Panchayat Sahayak", "Salary 2026", "DEO", "Gram Panchayat", "UP Govt"],
    content: `
      <h2>1. पंचायत सहायक कौन है?</h2>
      <p>पंचायत सहायक वह व्यक्ति होता है जो ग्राम पंचायत स्तर पर पंचायत भवन / ग्राम सचिवालय में रहकर सरकारी योजनाओं, डेटा और डिजिटल सेवाओं को संभालता है। उसे आधिकारिक तौर पर <strong>Panchayat Sahayak cum Data Entry Operator (DEO)</strong> कहा जाता है।</p>
      
      <h2>2. मुख्य जिम्मेदारियाँ व कार्य</h2>
      <ul>
        <li><strong>ई-ग्राम स्वराज पोर्टल (e-Gram Swaraj):</strong> ग्राम पंचायत की कार्ययोजना (GPDP), वाउचर एंट्री और पेमेंट प्रोसेसिंग।</li>
        <li><strong>जन्म व मृत्यु प्रमाण पत्र:</strong> CRS पोर्टल पर ऑनलाइन पंजीकरण और जारी करना।</li>
        <li><strong>परिवार रजिस्टर (Kutumb Register):</strong> ग्राम पंचायत परिवार रजिस्टर की ऑनलाइन व ऑफलाइन प्रविष्टि।</li>
        <li><strong>ग्राम सचिवालय संचालन:</strong> ग्रामीणों को आय, जाति, निवास प्रमाण पत्र और सरकारी योजनाओं की जानकारी उपलब्ध कराना।</li>
        <li><strong>डिजिटल क्रॉप सर्वे / किसान रजिस्ट्री:</strong> किसानों की ई-केवाईसी और फार्मर आईडी बनाना।</li>
      </ul>

      <h2>3. मानदेय एवं वेतन संरचना</h2>
      <p>वर्तमान में उत्तर प्रदेश में पंचायत सहायकों को ₹6,000 प्रति माह मानदेय दिया जाता है, जो ग्राम पंचायत के केंद्रीय वित्त / राज्य वित्त आयोग के प्रशासनिक मद से PFMS के माध्यम से सीधे खाते में भेजा जाता है। विभिन्न संगठनों द्वारा इसे ₹18,000 करने की मांग जारी है।</p>

      <h2>4. भविष्य और करियर की संभावनाएँ</h2>
      <p>सरकार द्वारा ग्राम सचिवालयों को 'मिनी ब्लॉक' के रूप में विकसित किया जा रहा है। पंचायत सहायकों को CSC ऑपरेटर और बैंक सखी के साथ समन्वय कर अतिरिक्त आय अर्जन का अवसर भी प्रदान किया जा रहा है।</p>
    `,
  },
  {
    slug: "panchayat-sahayak-salary-2026",
    title: "पंचायत सहायक मानदेय 2026: सैलरी कब आएगी, PFMS स्टेटस और बढ़ोतरी की ताज़ा अपडेट",
    subtitle: "Panchayat Sahayak Salary Status, PFMS Payment, and Honorarium Hike",
    excerpt: "पंचायत सहायकों का मानदेय ₹6,000 से बढ़कर कब होगा? PFMS पर अपनी सैलरी का स्टेटस कैसे चेक करें? जानिए पूरी प्रक्रिया।",
    category: "Salary Update",
    readTime: "5 min read",
    date: "2026-04-10",
    author: "Portal Bureau",
    tags: ["Salary", "PFMS", "Manadey", "Honorarium 2026"],
    content: `
      <h2>मानदेय भुगतान की वर्तमान स्थिति</h2>
      <p>पंचायत सहायकों को हर महीने ₹6,000 का मानदेय ग्राम पंचायत निधि से दिया जाता है। भुगतान PFMS (Public Financial Management System) के माध्यम से DSC (Digital Signature Certificate) लगाकर ग्राम प्रधान व सचिव द्वारा अप्रूव किया जाता है।</p>
      
      <h2>सैलरी न आने के प्रमुख कारण</h2>
      <ul>
        <li>ग्राम पंचायत खाते में अनटाइड / टाइड फंड की कमी</li>
        <li>सचिव अथवा प्रधान के डीएससी का एक्सपायर होना</li>
        <li>PFMS पोर्टल पर वेंडर मैपिंग में बैंक खाते का मिसमैच</li>
        <li>उपस्थिति पोर्टल (Panchayat Sahayak Attendance App) पर उपस्थिति दर्ज न होना</li>
      </ul>

      <h2>वेतन वृद्धि की मांग</h2>
      <p>उत्तर प्रदेश पंचायत सहायक संघ द्वारा लगातार ज्ञापन सौंपकर मानदेय ₹18,000 करने एवं स्थायीकरण की मांग उठाई जा रही है।</p>
    `,
  },
  {
    slug: "panchayat-sahayak-attendance-app",
    title: "पंचायत सहायक अटेंडेंस ऐप 2026: फेस रिकॉग्निशन, लोकेशन एरर और समाधान",
    subtitle: "Panchayat Sahayak Attendance App Troubleshooting Guide",
    excerpt: "पंचायत सहायक मोबाइल ऐप से उपस्थिति दर्ज करते समय आने वाली जियो-फेंसिंग और कैमरा समस्याओं का संपूर्ण समाधान।",
    category: "Technical",
    readTime: "4 min read",
    date: "2026-04-05",
    author: "Tech Support",
    tags: ["App", "Attendance", "Geofencing", "Error Fix"],
    content: `
      <h2>ऐप से उपस्थिति दर्ज करने के नियम</h2>
      <p>पंचायत सहायकों को प्रतिदिन सुबह 10:00 बजे से शाम 5:00 बजे के बीच पंचायत भवन परिसर में रहकर ऐप के माध्यम से उपस्थिति दर्ज करनी होती है।</p>

      <h2>सामान्य समस्याएं और उनके समाधान</h2>
      <ol>
        <li><strong>Location Out of Range (स्थान दूरी एरर):</strong> GPS हाई एक्यूरेसी मोड ऑन करें और Google Maps खोलकर अपनी सही लोकेशन कैलिब्रेट करें।</li>
        <li><strong>Face Not Matched (चेहरा मेल नहीं खा रहा):</strong> अच्छी रोशनी में फोटो लें और कैमरा लेंस साफ रखें।</li>
        <li><strong>Network Timeout:</strong> एयरप्लेन मोड ऑन-ऑफ करके दोबारा कोशिश करें।</li>
      </ol>
    `,
  },
  {
    slug: "egram-swaraj-data-entry",
    title: "eGramSwaraj पोर्टल पर GPDP और वाउचर एंट्री कैसे करें? Step by Step Guide",
    subtitle: "Complete Guide for Data Entry Operators on eGramSwaraj",
    excerpt: "ई-ग्राम स्वराज पोर्टल पर पंचायत की वार्षिक योजना, एक्टिविटी क्रिएशन और पेमेंट वाउचर बनाने की पूरी विधि।",
    category: "Tutorial",
    readTime: "8 min read",
    date: "2026-03-20",
    author: "Master Trainer",
    tags: ["eGramSwaraj", "Voucher Entry", "GPDP", "DSC"],
    content: `
      <h2>eGramSwaraj पोर्टल परिचय</h2>
      <p>पंचायती राज मंत्रालय द्वारा विकसित ई-ग्राम स्वराज पोर्टल ग्राम पंचायतों के वित्तीय प्रबंधन और कार्ययोजना निर्माण का केंद्रीय प्लेटफॉर्म है।</p>
      <h2>वाउचर एंट्री के चरण</h2>
      <ul>
        <li>Maker ID से लॉगिन करें और 'Voucher Entry' मेनू चुनें।</li>
        <li>Payment Type (Receipt / Payment / Contra) का चयन करें।</li>
        <li>स्कीम चुनें (उदा. 15th Finance Commission Un-tied)।</li>
        <li>वेंडर चुनें, बिल की रकम भरें और वाउचर सेव करें।</li>
        <li>Checker ID (प्रधान / सचिव) से वाउचर फ्रीज और DSC साइन करें।</li>
      </ul>
    `,
  },
  {
    slug: "census-self-enumeration-2026",
    title: "जनगणना 2026: Self-Enumeration पोर्टल पर परिवार का विवरण कैसे दर्ज करें?",
    subtitle: "Digital Census 2026 Guide for Citizens and Panchayat Sahayaks",
    excerpt: "डिजिटल जनगणना 2026 में ऑनलाइन स्व-गणना पोर्टल के माध्यम से डेटा प्रविष्टि की पूरी गाइड।",
    category: "National Update",
    readTime: "5 min read",
    date: "2026-04-12",
    author: "Census Cell",
    tags: ["Census 2026", "Self Enumeration", "Family Data"],
    content: `
      <h2>डिजिटल जनगणना 2026 की शुरुआत</h2>
      <p>भारत सरकार पहली बार डिजिटल जनगणना आयोजित कर रही है। इसमें नागरिक स्वयं (Self-Enumeration) पोर्टल के ज़रिए अपने परिवार की जानकारी दर्ज कर सकते हैं।</p>
      <h2>पंचायत सहायकों की भूमिका</h2>
      <p>ग्रामीण क्षेत्रों में जिन परिवारों के पास स्मार्टफोन या इंटरनेट नहीं है, उनकी स्व-गणना पंचायत सहायक ग्राम सचिवालय में निःशुल्क करेंगे।</p>
    `,
  },
  {
    slug: "attendance-boycott-2026",
    title: "पंचायत सहायक हाजिरी बहिष्कार: क्या है पूरा मामला और क्या हैं प्रमुख माँगें?",
    subtitle: "Ground Report on Panchayat Sahayak Strike and Issues",
    excerpt: "कम मानदेय और कठिन उपस्थिति नियमों को लेकर पंचायत सहायकों का आंदोलन। जानिए प्रमुख मांगें।",
    category: "News",
    readTime: "4 min read",
    date: "2026-04-15",
    author: "News Desk",
    tags: ["Boycott", "Union", "Demands", "Protest"],
    content: `
      <h2>आंदोलन का मुख्य कारण</h2>
      <p>पंचायत सहायकों का कहना है कि ₹6,000 के अल्प मानदेय में पूरे दिन की उपस्थिति, तकनीकी काम, सर्वे और फील्ड वर्क का दबाव अनुचित है।</p>
      <h2>प्रमुख 5 मांगें</h2>
      <ol>
        <li>मानदेय ₹18,000 प्रति माह किया जाए।</li>
        <li>सेवा सुरक्षा एवं आकस्मिक बीमा प्रदान किया जाए।</li>
        <li>पंचायत सचिवालय में हाई-स्पीड इंटरनेट और प्रिंटर उपकरण उपलब्ध हों।</li>
        <li>अतिरिक्त कार्यों जैसे सर्वे के लिए अलग से प्रोत्साहन राशि मिले।</li>
        <li>मानदेय का नियमित मासिक भुगतान कोषागार से सीधे हो।</li>
      </ol>
    `,
  }
];
