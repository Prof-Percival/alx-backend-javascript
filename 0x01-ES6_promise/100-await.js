import { uploadPhoto, createUser } from './utils';

export default async function asyncUploadUser() {
  let response_obj = {};

  try {
    const photo = await uploadPhoto();
    const user = await createUser();
    response_obj = { photo, user };
  } catch (err) {
    response_obj = { photo: null, user: null };
  }
  return response_obj;
}
