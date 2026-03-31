/**
 * Marketing copy aligned with https://suhasvedamit.github.io/vedamit/ and /portfolio/
 * Client logos vendored from /vedamit/images/clients/ on the same host.
 */

export const whyChooseUs = {
  title: "Engineered for impact",
  subtitle:
    "Experience the benefits of working with a team of AI experts dedicated to your success",
  items: [
    {
      title: "Innovation at Scale",
      description:
        "Leverage cutting-edge AI technologies to drive innovation and stay ahead of the competition.",
    },
    {
      title: "Efficiency Boost",
      description:
        "Automate repetitive tasks and optimize workflows to increase productivity and reduce costs.",
    },
    {
      title: "Data-Driven Insights",
      description:
        "Make informed decisions with powerful analytics and predictive modeling capabilities.",
    },
    {
      title: "Future-Ready Solutions",
      description:
        "Build scalable and adaptable systems that grow with your business needs.",
    },
  ] as const,
};

export const stats = [
  { value: "50+", label: "Projects Completed" },
  { value: "25+", label: "Enterprise Clients" },
  { value: "10+", label: "AI Experts" },
  { value: "10+", label: "Years Experience" },
] as const;

export const trustedBy = {
  title: "Built on strong collaborations",
  subtitle:
    "We're proud to partner with innovative companies across various industries",
  partners: [
    {
      name: "Hudson Group",
      category: "Manpower",
      logoSrc: "/images/clients/hudson.png",
    },
    {
      name: "Sumung",
      category: "Finance",
      logoSrc: "/images/clients/sumung.png",
    },
    {
      name: "HYBB",
      category: "Consulting",
      logoSrc: "/images/clients/hybb.png",
    },
    {
      name: "Route3Digital",
      category: "Digital Marketing",
      logoSrc: "/images/clients/route3.png",
    },
    {
      name: "Medicam",
      category: "Medical",
      logoSrc: "/images/clients/medicam.jpg",
    },
  ] as const,
};
