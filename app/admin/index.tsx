import { useAuth } from '@/hooks/useAuth';
import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const AdminHome = () => {
  const { logout } = useAuth();

  return (
    <TouchableOpacity onPress={() => logout()}>
      <Text>LOGOUT</Text>
    </TouchableOpacity>
  );
};

export default AdminHome;
