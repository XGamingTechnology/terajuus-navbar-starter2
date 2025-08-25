// src/data/newsData.js

export const newsItems = [
  {
    id: 1,
    title: "PT Teraju Applies for Marine Space Utilization Permit for Sea Sediment Management",
    date: "May 6, 2025",
    excerpt: "With this step, PT Teraju strengthens its role in sustainable marine development while ensuring compliance with national regulations.",
    category: "Regulatory Affairs",
    image: "/news1.jpg",
  },
  {
    id: 2,
    title: "PT Teraju to Conduct Public Consultation Following July 2, 2025 Meeting in Accordance with Government Regulation No. 5/2021",
    date: "Juni 10, 2025",
    excerpt: "Following the July 2, 2025 meeting, PT Teraju is set to carry out a Public Consultation as mandated by Government Regulation No. 5/2021.",
    category: "Environment",
    image: "/news2.jpg",
  },
  {
    id: 3,
    title: "PT Teraju Joins Development Plan of CitraLand City Makassar to Support Sustainable Urban Growth",
    date: "Juli 5, 2025",
    excerpt:
      "PT Teraju officially joins the development of CitraLand City Makassar, supporting a large-scale urban project in collaboration with the provincial government and investors. The initiative emphasizes sustainable growth, modern infrastructure, and community engagement",
    category: "Business",
    image: "/news3.jpg",
  },
  {
    id: 4,
    title: "New Technology Implementation Increases Mining Efficiency by 30%",
    date: "November 28, 2025",
    excerpt: "Advanced dredging technology deployment shows significant operational improvements...",
    category: "Technology",
    image: "/news4.jpg",
  },
  {
    id: 5,
    title: "PT. Teraju Achieves ISO 14001 Certification for Environmental Management",
    date: "November 20, 2025",
    excerpt: "International recognition for our commitment to sustainable environmental practices...",
    category: "Certification",
    image: "/news5.jpg",
  },
  {
    id: 6,
    title: "Record Production Milestone: 1 Million Tons of Marine Sand Processed",
    date: "November 15, 2025",
    excerpt: "Historic achievement demonstrates our growing capacity and market leadership...",
    category: "Achievement",
    image: "/news6.jpg",
  },
  {
    id: 7,
    title: "Strategic Partnership with Leading Construction Company Announced",
    date: "November 8, 2025",
    excerpt: "Long-term supply agreement to support major infrastructure development projects...",
    category: "Partnership",
    image: "/news7.jpg",
  },
  {
    id: 8,
    title: "Innovation Lab Inaugurated for Research in Marine Material Processing",
    date: "October 30, 2025",
    excerpt: "State-of-the-art facility will drive R&D in sustainable material processing techniques...",
    category: "Innovation",
    image: "/news8.jpg",
  },
  {
    id: 9,
    title: "Leadership Team Expansion with Appointment of New VP Operations",
    date: "October 22, 2025",
    excerpt: "Industry veteran joins to oversee operational excellence and growth strategy...",
    category: "Leadership",
    image: "/news9.jpg",
  },
];

// Fungsi untuk mendapatkan 3 berita terbaru
export const getLatestNews = (count = 3) => {
  return newsItems.slice(0, count);
};