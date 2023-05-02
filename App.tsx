import React, { useEffect, useState } from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
// import { NavigationContainer } from "@react-navigation/native";
// import { createNativeStackNavigator } from "@react-navigation/native-stack";
import TestScreen from "./src/screens/TestScreen";
import { API_BASE_URL } from "./config/constants";
import { colors } from "./config/colors";
// import TestHistoryScreen from "./src/screens/TestHistoryScreen";

// const Stack = createNativeStackNavigator();

const App = () => {
  const [token, setToken] = useState<string | null>(null);

  useEffect(() => {
    async function getTokenFromStorage() {
      try {
        const tokenFromStorage = await AsyncStorage.getItem("token");
        setToken(tokenFromStorage);
      } catch (error) {
        console.error(error);
      }
    }

    getTokenFromStorage();
  }, []);

  useEffect(() => {
    async function fetchGuestToken() {
      try {
        const response = await fetch(`${API_BASE_URL}/guests`, {
          method: "POST",
        });
        const data = await response.json();
        setToken(data.token);
        console.log(`token: ${token}`);
        AsyncStorage.setItem("token", data.token);
      } catch (error) {
        console.error(error);
      }
    }

    if (!token) {
      fetchGuestToken();
    }
  }, [token]);

  return (
    <SafeAreaView style={styles.container}>
      {token ? <TestScreen token={token} /> : <Text>Loading...</Text>}
    </SafeAreaView>
  );

  // return (
  //   <NavigationContainer>
  //     <SafeAreaView style={styles.container}>
  //       <View style={styles.titleContainer}>
  //         <Text style={styles.titleText}>Teste Arme si Munitii</Text>
  //       </View>
  //       <Stack.Navigator initialRouteName="Main">
  //         <Stack.Screen name="Home" options={{headerShown: false}}>
  //           {props => <MainScreen {...props} token={token} />}
  //         </Stack.Screen>
  //         <Stack.Screen name="Test" component={TestScreen} />
  //         {/* <Stack.Screen name="TestHistory" component={TestHistoryScreen} /> */}
  //       </Stack.Navigator>
  //     </SafeAreaView>
  //   </NavigationContainer>
  // );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  titleContainer: {
    backgroundColor: "#f2f2f2",
    alignItems: "center",
    justifyContent: "center",
    height: 64,
  },
  titleText: {
    fontSize: 24,
    fontWeight: "bold",
  },
});

export default App;
