import styles from "./footer-section.module.scss";

import Image from "next/image";
import Link from "next/link";
import FooterNewsLetter from "./footer-newsletter";
import FooterCopyright from "./footer-copyright";

function FooterSection() {
  const companyLinks = [
    { label: "About Us", link: "#" },
    { label: "Careers", link: "#" },
    { label: "Blog", link: "#" },
    { label: "Press", link: "#" },
    { label: "Gift Cards", link: "#" },
    { label: "Magazine", link: "#" }
  ];

  const supportLinks = [
    { label: "Contact", link: "#" },
    { label: "Legal Notice", link: "#" },
    { label: "Privacy Policy", link: "#" },
    { label: "Terms And Conditions", link: "#" },
    { label: "Sitemap", link: "#" }
  ];

  const otherServices = [
    { label: "Car Hire", link: "#" },
    { label: "Activity Finder", link: "#" },
    { label: "Tour List", link: "#" },
    { label: "Flight Finder", link: "#" },
    { label: "Cruise Ticket", link: "#" },
    { label: "Holiday Rental", link: "#" },
    { label: "Travel Agents", link: "#" }
  ];

  return (
    <footer className="footer-section" id="#footer">
      <FooterNewsLetter />
      <div className="container py-6">
        <div className={styles["footer__content"]}>
          <div className={styles["s-contact"]}>
            <h3 className={styles["s-contact__t"]}>Contact Us</h3>
            <div className={styles["s-contact__phone"]}>
              <p className={styles["s-contact__no-t"]}>
                Toll Free Customer Care:
              </p>
              <Link href="#" className={styles["s-contact__no"]}>
                +(1) 123 456 7890
              </Link>
            </div>
            <div className={styles["s-contact__email"]}>
              <p className={styles["s-contact__e-t"]}>Need live support? </p>
              <Link href="#" className={styles["s-contact__e"]}>
                info@gooutfilter.com
              </Link>
            </div>
          </div>
          <div className={styles["s-company"]}>
            <h3 className={styles["s-company__t"]}>Company</h3>
            <ul className={styles["s-company__list"]}>
              {companyLinks.map((company) => (
                <li key={company.label} className={styles["s-company__item"]}>
                  <Link
                    href={company.link}
                    className={styles["s-company__link"]}
                  >
                    {company.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className={styles["s-support"]}>
            <h3 className={styles["s-support__t"]}>Support</h3>
            <ul className={styles["s-support__list"]}>
              {supportLinks.map((support) => (
                <li key={support.label} className={styles["s-support__item"]}>
                  <Link
                    href={support.link}
                    className={styles["s-support__link"]}
                  >
                    {support.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className={styles["s-others"]}>
            <h3 className={styles["s-others__t"]}>Other Services</h3>
            <ul className={styles["s-others__list"]}>
              {otherServices.map((otherSer) => (
                <li key={otherSer.label} className={styles["s-others__item"]}>
                  <Link
                    href={otherSer.link}
                    className={styles["s-others__link"]}
                  >
                    {otherSer.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className={styles["s-mobile"]}>
            <h3 className={styles["s-mobile__t"]}>Mobile</h3>
            <Link
              href="https://www.apple.com/app-store/"
              target="_blank"
              className={styles["s-mobile__app-store"]}
            >
              <Image
                src="/icon/apple-store-icon.svg"
                alt="Apple Store"
                className={styles["s-mobile__app-icon"]}
                width={24}
                height={30}
                priority
              />
              <div className={styles["s-mobile__app-content"]}>
                <p>Download on the</p>
                <h3>Apple Store</h3>
              </div>
            </Link>

            <Link
              href="https://play.google.com/store/apps"
              target="_blank"
              className={styles["s-mobile__app-store"]}
            >
              <Image
                src="/icon/google-play-icon.svg"
                alt="Apple Store"
                className={styles["s-mobile__app-icon"]}
                width={24}
                height={30}
                priority
              />
              <div className={styles["s-mobile__app-content"]}>
                <p>Download on the</p>
                <h3>Apple Store</h3>
              </div>
            </Link>
          </div>
        </div>
      </div>
      <FooterCopyright />
    </footer>
  );
}

export default FooterSection;
