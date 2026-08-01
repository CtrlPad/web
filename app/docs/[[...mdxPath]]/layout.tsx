import { Layout } from "nextra-theme-docs";
import { getPageMap } from "nextra/page-map";
import "nextra-theme-docs/style.css";

export default async function NextraLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Layout
      pageMap={await getPageMap("/docs")}
      docsRepositoryBase="https://github.com/ctrlpad/web/tree/main/docs"
      darkMode={false}
      nextThemes={{ defaultTheme: "light", forcedTheme: "light" }}
    >
      {children}
    </Layout>
  );
}
