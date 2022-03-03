import { films } from '../../../mocks/films';

export const genres: string[] = Array.from(new Set(films.map((film) => film.genre)));
