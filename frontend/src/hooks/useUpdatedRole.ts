import userActions from '../redux/user/actions';
import { useDispatch } from 'react-redux';
import { userApi } from '../controller/api';
import { Role } from '../types';
import getToken from '../scripts/localStorage/getToken';

export default async () => {
  const dispatch = useDispatch();
  let role: Role = 'unlogged';

  if (getToken()) {
    const roleFromServer = await verify();
    
    if (roleFromServer !== undefined) {
      role = roleFromServer ? 'admin' : 'user';
    }
  }

  dispatch(userActions.setRole(role));
}

async function verify() {
  const result = await userApi.verify({
    token: getToken()
  });

  return result?.data?.candidate?.role;
}
