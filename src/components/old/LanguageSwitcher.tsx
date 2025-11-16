import Link from "next/link";

export default function LanguageSwitcher() {
  return (
    <div
      id="trp-floater-ls"
      data-no-translation=""
      className="trp-language-switcher-container trp-floater-ls-names trp-bottom-right trp-color-dark flags-full-names"
    >
      <div id="trp-floater-ls-current-language" className="trp-with-flags">
        <Link
          href="#"
          className="trp-floater-ls-disabled-language trp-ls-disabled-language"
        >
          <img
            className="trp-flag-image"
            src="assets/en_US.png"
            width={18}
            height={12}
            alt="en_US"
            title="English"
          />
          English{" "}
        </Link>
      </div>
      <div id="trp-floater-ls-language-list" className="trp-with-flags">
        <div className="trp-language-wrap" style={{ padding: 11 }}>
          {" "}
          <Link href="/pt/" title="Portuguese">
            <img
              className="trp-flag-image"
              src="assets/pt_PT.png"
              width={18}
              height={12}
              alt="pt_PT"
              title="Portuguese"
            />
            Portuguese{" "}
          </Link>
          <Link href="/fr/" title="French">
            <img
              className="trp-flag-image"
              src="assets/fr_FR.png"
              width={18}
              height={12}
              alt="fr_FR"
              title="French"
            />
            French{" "}
          </Link>
          <Link href="/es/" title="Spanish">
            <img
              className="trp-flag-image"
              src="assets/es_ES.png"
              width={18}
              height={12}
              alt="es_ES"
              title="Spanish"
            />
            Spanish{" "}
          </Link>
          <Link
            href="#"
            className="trp-floater-ls-disabled-language trp-ls-disabled-language"
          >
            <img
              className="trp-flag-image"
              src="assets/en_US.png"
              width={18}
              height={12}
              alt="en_US"
              title="English"
            />
            English
          </Link>
        </div>
      </div>
    </div>
  );
}

