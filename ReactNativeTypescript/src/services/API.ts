import axios from 'axios';

export async function fetchAlbums() {
  try {
    const {data} = await axios.get(
      'https://jsonplaceholder.typicode.com/todos',
    );

    return data;
  } catch (error) {
    console.error(error);
  }
}

export async function createAlbum() {
  try {
    const {data} = await axios.post(
      'https://jsonplaceholder.typicode.com/todos',
    );

    return data;
  } catch (error) {
    console.error(error);
  }
}
