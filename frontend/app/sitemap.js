const BASE_URL = "https://www.ericsolutions.com";

const staticRoutes = [
  "",
  "/company/about",
  "/company/team",
  "/contact",
  "/cookie-policy",
  "/privacy-policy",
  "/terms-conditions",
  "/insights/blog",
  "/insights/article",
  "/insights/case-studies",
  "/solutions/biostatistics",
  "/solutions/clinical-data",
  "/solutions/clinical-operations",
  "/solutions/data-management",
  "/solutions/eTMF",
  "/solutions/medical-writing",
  "/solutions/pharmacovigilance",
  "/technologies/clinical-trial-management-software",
  "/technologies/electronic-data-capture",
  "/technologies/etmf-technology",
  "/technologies/interactive-response-technology",
];

async function getDynamicRoutes() {
  const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL;

  if (!backendUrl) {
    return [];
  }

  try {
    const [blogsRes, articlesRes] = await Promise.all([
      fetch(`${backendUrl}/api/blog/list`, { next: { revalidate: 3600 } }),
      fetch(`${backendUrl}/api/article/list`, { next: { revalidate: 3600 } }),
    ]);

    const blogRoutes = blogsRes.ok
      ? (await blogsRes.json()).blogs?.map((blog) => `/blog/${blog.slug}`) ?? []
      : [];

    const articleRoutes = articlesRes.ok
      ? (await articlesRes.json()).articles?.map(
          (article) => `/article/${article.slug}`
        ) ?? []
      : [];

    return [...blogRoutes, ...articleRoutes];
  } catch {
    return [];
  }
}

export default async function sitemap() {
  const dynamicRoutes = await getDynamicRoutes();
  const allRoutes = [...staticRoutes, ...dynamicRoutes];

  return allRoutes.map((route) => ({
    url: `${BASE_URL}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.8,
  }));
}
