// import Image from "next/image";

// import Image from "next/image";

export default function Home() {
  return (
    <body className='h-screen bg-gray-100'>
      <header className='flex justify-center bg-blue-600 p-4'>
        <h1 className='px-12 text-white text-2xl font-bold'>My Awesome Website</h1>
      </header>

      <nav className='bg-blue-300 p-2'>
        <ul className='flex text-white gap-x-4 ml-8'>
          <li>
            <a href='#' className='hover:text-blue-600'>
              Home
            </a>
          </li>
          <li>
            <a href='#' className='hover:text-blue-600'>
              About
            </a>
          </li>
          <li>
            <a href='#' className='hover:text-blue-600'>
              Contact
            </a>
          </li>
        </ul>
      </nav>

      <main className='container mx-auto mt-8 p-4'>
        <section className='shadow-2xl rounded-xl p-6 mb-4'>
          <h2 className='text-xl pb-6 font-semibold'>
            Welcome to Our Site
          </h2>
          <p className=''>
            This is a simple page to demonstrate Tailwind CSS classNamees. You&apos;ll be recreating this design using utility classNamees!
          </p>
        </section>

        <section className='shadow-2xl rounded-xl p-6 mb-4'>
          <h2 className='text-xl pb-6 font-semibold'>
            Features
          </h2>
          <ul className='list-disc list-inside '>
            <li>Responsive design</li>
            <li>Beautiful typography</li>
            <li>Easy to customize</li>
          </ul>
        </section>
      </main>

      <footer className='fixed bottom-0 bg-black w-screen py-4'>
        <p className="text-white text-center">
          &copy; 2024 My Awesome Website. All rights reserved.
        </p>
      </footer>
    </body>
  );
}
