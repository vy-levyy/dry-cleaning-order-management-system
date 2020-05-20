import userActions from '../redux/user/actions';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { userApi } from '../controller/api';
import { Role } from '../components/Menu/types';

export default () => {
  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      let role: Role = 'unlogged';
  
      if (getToken()) {
        const roleFromServer = await verify();
  
        if (roleFromServer) {
          role = roleFromServer ? 'admin' : 'user';
        }
      }
  
      dispatch(userActions.setRole(role));
    })()
  }, [dispatch]);
}

async function verify() {
  const result = await userApi.verify({
    token: getToken()
  });

  return result?.data?.candidate?.role;
}

function getToken(): string | null {
  return localStorage.getItem('token');
}

