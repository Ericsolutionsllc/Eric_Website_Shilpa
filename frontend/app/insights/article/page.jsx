import ArticleClient from './ArticleClient';

export const metadata = {
  title:
    'Clinical Research Articles | eRIC SOLUTIONS',

  description:
    'Explore in-depth articles covering clinical trials, regulatory updates, healthcare technology, and industry best practices.',

  alternates: {
    canonical: 'https://www.ericsolutions.com/insights/article',
  },
};

export default function ArticlePage() {
  return <ArticleClient />;
}