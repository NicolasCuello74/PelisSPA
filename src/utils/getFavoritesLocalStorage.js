const getFavoritesLocalStorage = () => {
  const favorites = localStorage.getItem('favorites')
  return favorites ? JSON.parse(favorites) : []
}

export default getFavoritesLocalStorage
