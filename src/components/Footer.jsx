function Footer() {
  return (
    <footer className="py-10 border-t text-center">

      <p>
        © 2026 Nischal. All rights reserved.
      </p>

      <button
        onClick={() => window.scrollTo(0, 0)}
        className="mt-4 border px-4 py-2 rounded-xl"
      >
        Back To Top
      </button>

    </footer>
  );
}

export default Footer;