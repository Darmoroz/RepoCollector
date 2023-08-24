import React, { useState } from 'react';
import { IRepo } from '../models/models';
import { useActions } from '../hooks/useActions';
import { useAppSelector } from '../hooks/useAppSelector';

function RepoCard({ repo }: { repo: IRepo }) {
  const { addFavorite, removeFavorite } = useActions();
  const { favorites } = useAppSelector(state => state.github);

  const [isFavorite, setIsFavorite] = useState(favorites.includes(repo.html_url));

  const addToFavorite = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    addFavorite(repo.html_url);
    setIsFavorite(true);
  };

  const removeFromFavorite = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    removeFavorite(repo.html_url);
    setIsFavorite(false);
  };

  return (
    <div className="border py-3 px-5 rounded mb-2 hover:shadow-md hover:bg-gray-100 transition-all">
      <a href={repo.html_url} target="_blank">
        <h2 className="text-lg font-bold">{repo.full_name}</h2>
        <p className="text">
          Size: <span className="font-bols mr-2">{repo.size}kb</span>
          Watchers: <span className="font-bold">{repo.watchers}</span>
        </p>
        <p className="text-sm font-thin">{repo?.description}</p>
        {isFavorite ? (
          <button
            className="px-4, py-2 bg-red-400 w-[80px] rounded hover:shadow-md transition-all"
            onClick={removeFromFavorite}
          >
            remove
          </button>
        ) : (
          <button
            className="px-4, py-2 mr-2 w-[80px] bg-yellow-400 rounded hover:shadow-md transition-all"
            onClick={addToFavorite}
          >
            add
          </button>
        )}
      </a>
    </div>
  );
}
export default RepoCard;
