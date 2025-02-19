import React, { useState } from "react";
import {
  View,
  Text,
  Button,
  StyleSheet,
  Modal,
  Animated,
  TouchableOpacity,
  Image,
  Alert,
} from "react-native";
import Card from "../utils/Card";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  useNavigationState,
} from "@react-navigation/native";
import DetailsScreen from "./menu/Menu";
import Icon from "react-native-vector-icons/Ionicons"; // Using Ionicons from react-native-vector-icons
import Wallet from "./menu/Wallet";
import Portfolio from "./menu/Portfolio";
import { SafeAreaView } from "react-native-safe-area-context";
import Home from "./menu/Home";
import Menu from "./menu/Menu";

const DrawerOverlay: React.FC = ({navigation}) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const translateX = useState(new Animated.Value(-400))[0]; // Start off-screen on the left
  const Tab = createBottomTabNavigator();
  const [isMenu, setMenu] = useState(false);
  const tabState = useNavigationState((state) => state);

  // Extract the focused tab route name
  const focusedTabIndex = tabState.index;
  const focusedTabRoute = tabState.routes[focusedTabIndex].name;

  // Define the function in the parent
  const navigateToProfile = () => {
    toggleModal();
    navigation.navigate('userprofile');  
  };
  const navigateToSubscription =()=>{
    toggleModal();
    navigation.navigate('subscription');
  }

  const navigateToNotification =()=>{
    toggleModal();
    navigation.navigate('notification');
  }

  const navigateToActivityLog =()=>{
    toggleModal();
    navigation.navigate('activitylog');
  }

  const navigateToSecurity =()=>{
    toggleModal();
    
  }

  const navigateToExchange =()=>{
    toggleModal();
   
  }


  const toggleModal = () => {
    if (isModalVisible) {
      // Close the modal with an animation
      Animated.timing(translateX, {
        toValue: -400, // Move back off-screen to the left
        duration: 300,
        useNativeDriver: true,
      }).start(() => setIsModalVisible(false)); // Close the modal after animation
    } else {
      setIsModalVisible(true);
      // Open the modal with an animation
      Animated.timing(translateX, {
        toValue: 0, // Move the modal into view
        duration: 300,
        useNativeDriver: true,
      }).start();
    }
  };

  return (
    <View style={styles.container}>
      {isMenu && (
        <View style={{ backgroundColor: "#2AACF5", width: "100%" }}>
          <View
            style={{
              backgroundColor: "white",
              flexDirection: "row",
              padding: 10,
              borderBottomEndRadius: 10,
              borderBottomLeftRadius: 10,
              alignItems: "center",
              width: "100%",
              justifyContent: "space-between",
            }}
          >
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <TouchableOpacity onPress={toggleModal}>
                <Image
                  source={require("../assets/images/user_profile.png")}
                  style={{ marginEnd: 10 }}
                />
              </TouchableOpacity>
              <Text>Jagadesh</Text>
            </View>

            <Image
              source={require("../assets/images/bell_.png")}
              style={{ marginEnd: 10, justifyContent: "flex-end" }}
            />
          </View>
        </View>
      )}

      <Modal
        transparent={true}
        visible={isModalVisible}
        animationType="none" // Disable built-in animation, we'll use our custom animation
        onRequestClose={toggleModal}
      >
        <View style={styles.overlay}>
          <Animated.View
            style={[styles.modal, { transform: [{ translateX }] }]}
          >
            <TouchableOpacity
              onPress={toggleModal}
              style={{
                height: 35,
                alignItems: "center",
                flexDirection: "row",
                marginTop: 20,
              }}
            >
              <Image
                source={require("../assets/images/back.png")}
                style={{ marginEnd: 10 }}
              />
              <Image
                source={require("../assets/images/user_profile.png")}
                style={{ marginEnd: 10 }}
              />
              <Text>{"User Name"}</Text>
            </TouchableOpacity>

            <View style={{ marginTop: 25 }}>
              ../../assets
              <Card
                title="Profile"
                image1={require("../assets/images/profile_circle.png")}
                image2={require("../assets/images/navigation_arrow.png")}
                backgroundColor="white"
                isHeader={false}
                navigate={
                  navigateToProfile
                  }/>
              <Card
                title="Subscription"
                image1={require("../assets/images/subscription.png")}
                image2={require("../assets/images/navigation_arrow.png")}
                backgroundColor="white"
                isHeader={false}
                navigate={navigateToSubscription}
              />
              <Card
                title="Exchange"
                image1={require("../assets/images/exchange.png")}
                image2={require("../assets/images/navigation_arrow.png")}
                backgroundColor="white"
                isHeader={false}
                navigate={navigateToExchange}
              />
              <Card
                title="Security"
                image1={require("../assets/images/security.png")}
                image2={require("../assets/images/navigation_arrow.png")}
                backgroundColor="white"
                isHeader={false}
                navigate={navigateToSecurity}
              />
              <Card
                title="Activity Logs"
                image1={require("../assets/images/activity_log.png")}
                image2={require("../assets/images/navigation_arrow.png")}
                backgroundColor="white"
                isHeader={false}
                navigate={navigateToActivityLog}
              />
              <Card
                title="Notification"
                image1={require("../assets/images/notification.png")}
                image2={require("../assets/images/navigation_arrow.png")}
                backgroundColor="white"
                isHeader={false}
                navigate={navigateToNotification}
              />
            </View>

            <TouchableOpacity style={styles.signupButton} onPress={toggleModal}>
              <Image
                source={require("../assets/images/sign_out.png")}
                style={{ height: 20, width: 20 }}
              />
              <Text style={{ marginLeft: 10, color: "white", fontSize: 14 }}>
                Sign Out
              </Text>
            </TouchableOpacity>
          </Animated.View>
        </View>
      </Modal>
      <SafeAreaView style={{ flex: 1, flexDirection: "row" }}>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarLabel: ({ focused }) => (
              <Text style={{ fontSize: 12, color: focused ? "blue" : "gray" }}>
                {route.name}
              </Text>
            ),
            tabBarActiveTintColor: "blue",
            headerShown: false,
            tabBarInactiveTintColor: "gray",
            tabBarStyle: { height: 50 },
            tabBarActiveBackgroundColor: "#6C5DD333",
            animationEnabled: true,
          })}
        >
          <Tab.Screen
            name="Menu"
            component={Menu}
            options={{
              tabBarIcon: ({ focused }) => {
                let iconName = focused
                  ? require("../assets/images/menu_focus.png")
                  : require("../assets/images/menu_tab.png");
                if (focused) {
                  const tabState = useNavigationState((state) => state);
                  if (tabState.index == 0) {
                    setMenu(false);
                  } else {
                    setMenu(true);
                  }
                }
                return (
                  <Image source={iconName} style={{ width: 25, height: 25 }} />
                );
              },
            }}
          />
          <Tab.Screen
            name="Home"
            component={Home}
            options={{
              tabBarIcon: ({ focused }) => {
                let iconName = focused
                  ? require("../assets/images/home_tab.png")
                  : require("../assets/images/home.png");

                return (
                  <Image source={iconName} style={{ width: 25, height: 25 }} />
                );
              },
            }}
          />
          <Tab.Screen
            name="Wallet"
            component={Wallet}
            options={{
              tabBarIcon: ({ focused }) => {
                let iconName = focused
                  ? require("../assets/images/wallet_focus.png")
                  : require("../assets/images/wallet_tab.png");

                return (
                  <Image source={iconName} style={{ width: 25, height: 25 }} />
                );
              },
            }}
          />
          <Tab.Screen
            name="Portfolio"
            component={Portfolio}
            options={{
              tabBarIcon: ({ focused }) => {
                let iconName = focused
                  ? require("../assets/images/portfolio_focus.png")
                  : require("../assets/images/chart_tab.png");

                return (
                  <Image source={iconName} style={{ width: 25, height: 25 }} />
                );
              },
            }}
          />
        </Tab.Navigator>
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "flex-start",
  },
  card: {
    backgroundColor: "white",
    borderRadius: 5,
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 10,
    margin: 5,
    marginStart: -10,
    marginEnd: -10,
    elevation: 3,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)", // Semi-transparent dark overlay
    justifyContent: "flex-start",
    alignItems: "flex-start", // Align modal to the left side
  },
  modal: {
    height: "100%",
    width: "100%",
    backgroundColor: "white",
    padding: 20,
    justifyContent: "flex-start",
    elevation: 5, // Shadow for Android
  },
  modalContent: {
    fontSize: 18,
    marginBottom: 20,
  },
  signupButton: {
    backgroundColor: "red", // Background color of the button
    paddingVertical: 12, // Vertical padding for the button
    paddingHorizontal: 20, // Horizontal padding for the button
    borderRadius: 8, // Rounded corners
    alignItems: "center", // Centers the text horizontally
    justifyContent: "center", // Centers the text vertically
    height: 50,
    width: "100%",
    flexDirection: "row",
    marginTop: 100,
  },
});

export default DrawerOverlay;
