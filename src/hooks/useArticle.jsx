
import { useState, useEffect } from 'react';

const useArticle = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    // Simulation de récupération d'articles depuis une API
    const fetchedArticles = [
      {
        id: 1,
        title: 'The Future of AI',
        summary: 'Exploring the potential impacts of artificial intelligence on society.',
        imageUrl: 'https://via.placeholder.com/150',
        category: 'Technology',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
      },
      {
        id: 2,
        title: 'Climate Change: A Global Crisis',
        summary: 'Examining the current state of climate change and its effects on our planet.',
        imageUrl: 'https://via.placeholder.com/150',
        category: 'Science',
        content: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
      },
      {
        id: 3,
        title: 'The Rise of Quantum Computing',
        summary: 'Understanding the principles and potential applications of quantum computing.',
        imageUrl: 'https://via.placeholder.com/150',
        category: 'Technology',
        content: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
      },
      {
        id: 4,
        title: 'Exploring Mars: The Red Planet',
        summary: 'Recent discoveries and future plans for Mars exploration.',
        imageUrl: 'https://via.placeholder.com/150',
        category: 'Science',
        content: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
      } ,
      {
        id: 5,
        title: 'The Future of AI',
        summary: 'Exploring the potential impacts of artificial intelligence on society.',
        imageUrl: 'https://via.placeholder.com/150',
        category: 'Technology',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
      },
      {
        id: 6,
        title: 'The Future of AI',
        summary: 'Exploring the potential impacts of artificial intelligence on society.',
        imageUrl: 'https://via.placeholder.com/150',
        category: 'Technology',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
      }
    ];

    // Mise à jour de l'état avec les articles récupérés
    setArticles(fetchedArticles);
  }, []); 

  // Fonction pour obtenir un article par son ID
  const getArticleById = (id) => {
    return articles.find(article => article.id === parseInt(id));
  };

  // Fonction pour filtrer les articles par catégorie
  const getArticlesByCategory = (category) => {
    return articles.filter(article => article.category === category);
  };

  // Fonction pour rechercher des articles par terme de recherche
  const getArticlesBySearch = (searchTerm) => {
    return articles.filter(article => article.title.toLowerCase().includes(searchTerm.toLowerCase()));
  };


  // Retourne les articles et les fonctions utilitaires
  return { articles, getArticleById, getArticlesByCategory, getArticlesBySearch };
};

export default useArticle;
