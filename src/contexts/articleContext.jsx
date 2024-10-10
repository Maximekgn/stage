import { createContext } from 'react';
import useArticle from '../hooks/useArticle';

export const ArticleContext = createContext();

export const ArticleProvider = ({ children }) => {
  const { articles, getArticleById, searchArticles } = useArticle();

  return (
    <ArticleContext.Provider value={{ articles, getArticleById, searchArticles }}>
      {children}
    </ArticleContext.Provider>
  );
};