import { useAppSelector } from '../hooks/useAppSelector';
function FavoritesPage() {
  const { favorites } = useAppSelector(state => state.github);

  if (favorites.length === 0) return <p className="text-center">No repos.</p>;
  return (
    <div className=" flex justify-center pt-10 mx-auto h-screen w-screen">
      <ul className="list-none">
        {favorites.map(repoUrl => (
          <li key={repoUrl}>
            <a href={repoUrl} target="_blank" rel="noreferrer">
              {repoUrl}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default FavoritesPage;
