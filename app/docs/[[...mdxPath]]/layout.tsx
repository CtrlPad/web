import { Layout } from 'nextra-theme-docs'
import { getPageMap } from "nextra/page-map";
import "nextra-theme-docs/style.css";

export default async function NextraLayout({ children }) {
  return (
    <Layout
      pageMap={await getPageMap()}
      docsRepositoryBase="https://github.com/ctrlpad/web/tree/main/docs"
    >
      {children}
    </Layout>
  );
}
