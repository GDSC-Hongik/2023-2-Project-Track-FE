import { createFood, deleteFood, getFoods, updateFood } from '../api';
import FoodForm from './FoodForm';
import FoodList from './FoodList';
import { useEffect, useState } from 'react';

const LIMIT = 10;

function App() {
  const [order, setOrder] = useState('createdAt');
  const [cursor, setCursor] = useState();
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState();
  const [loadingError, setLoadingError] = useState();
  const [search, setSearch] = useState();
  const sortedItems = items.sort((a, b) => b[order] - a[order]);

  const handleNewestClick = () => setOrder('createdAt');

  const handleFatClick = () => setOrder('calorie');

  const handleDelete = async (id) => {
    const result = await deleteFood(id);
    if (!result) return;

    setItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  const handleLoad = async (options) => {
    let result;
    try {
      setIsLoading(true);
      setLoadingError(null);
      result = await getFoods(options);
    } catch (error) {
      setLoadingError(error);
      return;
    } finally {
      setIsLoading(false);
    }
    const {
      foods,
      paging: { nextCursor },
    } = result;
    if (options.cursor === '') {
      setItems(foods);
    } else {
      setItems((prevItems) => [...prevItems, ...foods]);
    }
    setCursor(nextCursor);
  };

  const handleLoadMore = () => {
    handleLoad({ order, cursor, limit: LIMIT, search });
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    setSearch(e.target['search'].value);
  };

  const handleCreateSuccess = (result) => {
    setItems((prevItems) => [result, ...prevItems]);
  };

  useEffect(() => {
    handleLoad({ order, cursor: '', limit: LIMIT, search });
  }, [order, search]);

  const handleUpdateSuccess = (newItem) => {
    setItems((prevItems) => {
      const spltIdx = prevItems.findIndex((item) => item.id === newItem.id);
      return [
        ...prevItems.slice(0, spltIdx),
        newItem,
        ...prevItems.slice(spltIdx + 1),
      ];
    });
  };

  return (
    <div>
      <FoodForm onSubmitSuccess={handleCreateSuccess} onSubmit={createFood} />
      <button onClick={handleNewestClick}>최신순</button>
      <button onClick={handleFatClick}>칼로리순</button>
      <form onSubmit={handleSearchSubmit}>
        <input name="search" />
        <button type="submit">검색</button>
      </form>
      <FoodList
        items={sortedItems}
        onDelete={handleDelete}
        onUpdate={updateFood}
        onUpdateSuccess={handleUpdateSuccess}
      />
      {cursor && (
        <button disabled={isLoading} onClick={handleLoadMore}>
          더 보기
        </button>
      )}
      {loadingError?.message && <span>{loadingError.message}</span>}
    </div>
  );
}

export default App;
