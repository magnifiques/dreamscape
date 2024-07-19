import Link from "next/link";
import React from "react";

const Cta = () => {
  return (
    <section className="cta">
      <p className="cta-text">
        Have a project in mind? <br className="sm:block hidden" />
        Let&apos;s build something together!
      </p>
      <Link href="/contact" className="btn">
        Contact
      </Link>
    </section>
  );
};

export default Cta;
