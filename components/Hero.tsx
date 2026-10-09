import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="hero" id="hero" aria-label="Mysore Silk">
      <div className="hero__stage">
        <div className="hero__layer">
          <div className="media-fill">
            <Image
              src="/between-hero.jpg"
              alt="Power loom weaving Mysore silk in the factory"
              fill
              priority
              sizes="100vw"
              className="hero__image"
            />
          </div>
        </div>
        <div className="hero__veil" />
      </div>

      <div className="hero__copy">
        <p className="hero__eyebrow">A Royal Heritage · Since 1912</p>
        <h1 className="hero__title">Mysore Silk</h1>
        <ul className="hero__lines">
          <li>Pure silk.</li>
          <li>Woven in Mysore.</li>
          <li>For generations.</li>
        </ul>
        <div className="hero__ctas">
          <Link className="btn btn--burgundy" href="/sarees">
            Explore Collection <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>

      <aside className="hero__emblem" aria-label="Ganda Berunda">
        <p className="hero__emblem-title">Ganda Berunda</p>
        <p className="hero__emblem-sub">A Symbol of Royalty</p>
      </aside>
    </section>
  );
}
