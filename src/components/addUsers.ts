import { IProfile, dbSendUsers } from '../shared/sDatabase';
import { delay } from '../shared/delay';

export async function addUsers(): Promise<Array<IProfile> | undefined> {
  const db = await dbSendUsers();
  const tx = await db?.transaction('users', 'readwrite');
  const usersStore = await tx?.objectStore('users');
  const users = await usersStore?.getAll();
  await delay(800);
  const usersArray = await users?.result;
  return usersArray?.sort((n1, n2) => {
    if (n1.score > n2.score) {
      return -1;
    }

    if (n1.score < n2.score) {
      return 1;
    }
    return 0;
  });
}
