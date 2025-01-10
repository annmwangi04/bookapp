import React from 'react';
import { FiShoppingCart } from "react-icons/fi";
import { getImgUrl } from '../../utils/getImgUrl';
import { useParams } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { addToCart } from '../../redux/features/cart/cartSlice';
import { useFetchBookByidQuery } from '../../redux/features/books/booksApi';

const SingleBook = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { data: book, isLoading, isError } = useFetchBookByidQuery(id);

  console.log(book); // Log the book data to check if it's being fetched correctly

  const handleAddToCart = (book) => {
    console.log("Adding to cart:", book);
    dispatch(addToCart(book));
  };

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error happened while loading book info...</div>;

  return (
    <div className='max-w-lg shadow-md p-5'>
      <h1 className='text-2xl font-bold mb-6'>{book.title}</h1>
      <div>
        <div className='mb-8'>
          <img
            src={`${getImgUrl(book.coverImage)}`} // Fixed template literal syntax
            alt={book.title}
            className='max-h-full max-w-full p-2 rounded-md'
          />
        </div>
        <div className='mb-5'>
          <p className='text-gray-700 mb-2'><strong>Author:</strong> {book.author || 'admin'}</p>
          <p className='text-gray-700 mb-4'>
            <strong>Published:</strong> {new Date(book?.createdAt).toLocaleDateString()}
          </p>
          <p className='text-gray-700 mb-4 capitalize'>
            <strong>Category:</strong> {book?.category}
          </p>
          <p className='text-gray-700 mb-4'><strong>Description:</strong> {book.description}</p>
        </div>
        <button 
          onClick={() => handleAddToCart(book)} 
          className="btn-primary px-6 space-x-1 flex items-center gap-1 transition-colors duration-200"
          style={{ backgroundColor: 'yellow', color: 'black' }}
          onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'darkyellow'}
          onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'yellow'}
        >
          <FiShoppingCart />
          <span>Add to Cart</span>
        </button>
      </div>
    </div>
  );
};

export default SingleBook;
