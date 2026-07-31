export default function JsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    "name": "Vels Plus Coaching Institute",
    "alternateName": "Vels Plus Academy",
    "url": "https://velsplus.com",
    "logo": "https://velsplus.com/assets/vels-plus-logo.svg",
    "image": "https://velsplus.com/assets/hero-banner.jpg",
    "description": "Vels Plus offers expert academic coaching for NEET UG, IIT-JEE (Main & Advanced), CBSE & State Board Tuitions, and Foundation courses across Chennai.",
    "telephone": "+91-8925905619",
    "email": "velsplusacademy@gmail.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "No. 42, Anna Nagar",
      "addressLocality": "Chennai",
      "addressRegion": "Tamil Nadu",
      "postalCode": "600040",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 13.0878,
      "longitude": 80.217
    },
    "areaServed": [
      "Anna Nagar",
      "Perambur",
      "Velachery",
      "Tambaram",
      "Chennai",
      "Tamil Nadu"
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Academic Coaching Programs",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Course",
            "name": "NEET / Medical Entrance Coaching",
            "description": "Comprehensive NEET preparation with expert faculty, rigorous mock tests, and personalized care in Chennai."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Course",
            "name": "IIT-JEE Main & Advanced Coaching",
            "description": "Top-tier coaching for IIT-JEE engineering entrance with strong conceptual foundations and problem-solving focus."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Course",
            "name": "School Tuitions (CBSE & State Board)",
            "description": "Focused tuitions for Classes 6th to 12th in Mathematics, Physics, Chemistry, and Biology."
          }
        }
      ]
    },
    "sameAs": [
      "https://www.facebook.com/velsplus",
      "https://www.instagram.com/velsplus",
      "https://www.youtube.com/@velsplus"
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
