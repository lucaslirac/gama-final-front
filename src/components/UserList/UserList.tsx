import React, {useState, useEffect} from 'react';

import { getuserList } from '../../service/api';
import ListUser from '.';


const UserList: React.FC = () => {

    const [UserList, setUserList] = useState<any[]>([])
  
  useEffect(() => {
    const fetchUserList = async () => {
      const allUser = await getuserList()
      setUserList(allUser.users)
    }
    fetchUserList()
  }, [])
  
  
  
  
    return (
      <div> 
        {UserList.map(users => (
          <>
            <ListUser {...users} />
          </>
        ))}
      </div>
    );
  };
  
  export default UserList;