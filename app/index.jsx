import { View, Text } from 'react-native';
import { Link } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
export default function App() {
  return (
    <View className="flex-1 items-center justify-center bg-slate-300">
      <Text className="text-3xl font-pblack">Aora!</Text>
      <StatusBar  style='auto' />
      <Link href={"/home"} style={{color:'blue'}}>Go to home</Link>
    </View>
  );
    
}

