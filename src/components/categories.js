import { useSelector, useDispatch } from 'react-redux';
import { checkStatus } from '../redux/categories/categoriesSlice';

const Categories = () => {
  const status = useSelector((state) => state.category);
  const dispatch = useDispatch();

  return (
    <div className="categories-container">
      <button type="button" onClick={() => dispatch(checkStatus())}>Check Status</button>
      <span>{status}</span>
    </div>
  );
};

export default Categories;
