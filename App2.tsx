import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
import firestore from '@react-native-firebase/firestore';

const getUsers = () => {
  const users = firestore().collection('Users').get();
  return users
}

const App = () => {
  const fetchUsers = async () => {
    try {
      const usersRef = firestore().collection('Users');
      const snapshot = await usersRef.get();

      console.log('Snapshot:', snapshot);

      const users: any = [];
      snapshot.forEach(doc => {
        users.push({ id: doc.id, ...doc.data() });
      });

      console.log('Kullanıcılar:', users);
      return users;
    } catch (error) {
      console.error('Kullanıcıları alma hatası:', error);
      return [];
    }
  };

  const addUser = async (userData: any) => {
    try {
      // "users" koleksiyonuna referans oluşturma
      const usersRef = firestore().collection('Users');

      // Yeni kullanıcı belgesi oluşturma ve Firestore'a ekleme
      await usersRef.add(userData);

      console.log('Kullanıcı başarıyla eklendi');
    } catch (error) {
      console.error('Kullanıcı ekleme hatası:', error);
    }
  };

  const deleteUser = async (userId: any) => {
    try {
      // Silinecek kullanıcının referansını oluşturma
      const userRef = firestore().collection('Users').doc(userId);

      // Kullanıcıyı Firestore'dan silme
      await userRef.delete();

      console.log('Kullanıcı başarıyla silindi');
    } catch (error) {
      console.error('Kullanıcı silme hatası:', error);
    }
  };

  const updateUser = async (userId: any, newData: any) => {
    try {
      // Güncellenecek kullanıcının referansını oluşturma
      const userRef = firestore().collection('Users').doc(userId);

      // Kullanıcı verilerini güncelleme
      await userRef.update(newData);

      console.log('Kullanıcı başarıyla güncellendi');
    } catch (error) {
      console.error('Kullanıcı güncelleme hatası:', error);
    }
  };

  useEffect(() => {
    fetchUsers()

    const newUser = {
      name: 'John Doe',
      email: 'john@example.com',
    };

    // Kullanıcı ekleme fonksiyonunu çağırma
    addUser(newUser);

    // Kullanıcı ID'si
    const userIdToDelete = 'cMFbGDiOSyj4Ktq5nvjm';

    // Kullanıcı silme fonksiyonunu çağırma
    deleteUser(userIdToDelete);

    // Güncellenecek kullanıcının ID'si
    const userIdToUpdate = 'MlFAJN9HHsPDcT16ye9a';

    // Güncellenecek yeni veriler
    const newData = {
      name: 'ats',
      email: 'ats@ats.com'
    };

    // Kullanıcı güncelleme fonksiyonunu çağırma
    updateUser(userIdToUpdate, newData);
  }, [])

  return (
    <View>
      <Text>App</Text>
    </View>
  )
}

export default App