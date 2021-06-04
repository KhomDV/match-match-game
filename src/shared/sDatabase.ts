export interface IProfile {
  idUser: number | undefined,
  firstName: string,
  lastName: string,
  email: string,
  photo: string,
  score?: number
}

let dbResult: IDBDatabase | null;
const idbRequest = indexedDB.open('KhomDV', 1);
let objUser: IProfile;

idbRequest.onupgradeneeded = function onupgradeneeded(): void {
  const db = idbRequest.result;
  if (!db.objectStoreNames.contains('users')) {
    db.createObjectStore('users', { keyPath: 'idUser', autoIncrement: true });
  }
  dbResult = db;
};

idbRequest.onerror = function onerror(): void {
  throw new Error('Error Database Request.');
};

idbRequest.onsuccess = function onsuccess(): void {
  dbResult = idbRequest.result;
};

function dbUserInformation(obj: IProfile): void {
  objUser = obj;
}

function dbRequest(score: number): void {
  const transaction = dbResult?.transaction('users', 'readwrite');
  objUser.idUser = undefined;
  delete (objUser.idUser);
  if (score > 0) {
    objUser.score = score;
  } else {
    objUser.score = 0;
  }
  transaction?.objectStore('users').put(objUser);
}

function dbSendUsers(): IDBDatabase | null {
  return dbResult;
}

export { dbUserInformation, dbRequest, dbSendUsers };
