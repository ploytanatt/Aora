import { View, Text } from 'react-native';
import React from 'react';
import { signOut } from '../../lib/appwrite';
import CustomButton from '../../components/CustomButton';
import { useNavigation } from '@react-navigation/native'; // Assuming you're using React Navigation
import { signOut } from '../../lib/appwrite'
const Create = () => {
 

  const handleSignOut = async () => {
    try {
      await signOut();
      // Navigate to the desired screen after successful sign-out
      router.replace("/sign-in"); // Replace 'Login' with your actual screen name
    } catch (error) {
      console.error('Sign out error:', error);
      // Handle the error, e.g., display an error message to the user
    }
  };

  return (
    <View>
      <Text>Create</Text>
      <CustomButton
        title="Sign Out"
        onPress={handleSignOut}
      />
    </View>
  );
};

export default Create;