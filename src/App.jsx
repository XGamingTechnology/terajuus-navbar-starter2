import Header from './components/Header'

function App() {
  return (
    <>
      <Header />
      <main className="mt-24 p-6">
        <section id="hero" className="py-10 bg-gray-100">Hero Section</section>
        <section id="about" className="py-10">About Us Section</section>
        <section id="business" className="py-10 bg-gray-100">The Business Section</section>
        <section id="news" className="py-10">News Section</section>
        <section id="contact" className="py-10 bg-gray-100">Contact Section</section>
      </main>
    </>
  )
}

export default App