// components/Footer.tsx
export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h3 className="text-2xl font-semibold">PT. Teraju Usaha Sukses</h3>
        <p className="mt-2 text-gray-400">Marine Sand Mining for Sustainable Infrastructure</p>
        <p className="mt-6 text-sm text-gray-500">&copy; {new Date().getFullYear()} PT. Teraju Usaha Sukses. All rights reserved.</p>
      </div>
    </footer>
  );
}
