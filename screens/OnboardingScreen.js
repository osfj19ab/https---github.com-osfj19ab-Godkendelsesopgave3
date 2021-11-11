import React from "react";
import {
  View,
  Text,
  Button,
  StyleSheet,
  Image,
  TouchableOpacity,
} from "react-native";
import Onboarding from "react-native-onboarding-swiper";

const Skip = () => <Button title="Skip" />;

//props gør at vores tilpasset next knap virker (Laver en handling/event)
const Next = ({ ...props }) => <Button title="Next" {...props} />;

const Done = ({ ...props }) => (
  <TouchableOpacity style={{ marginHorizontal: 8 }} {...props}>
    <Text style={{ fontSize: 16 }}>Done</Text>
  </TouchableOpacity>
);

const OnboardingScreen = ({ navigation }) => {
  return (
    <Onboarding
      SkipButtonComponent={Skip}
      NextButtonComponent={Next}
      DoneButtonComponent={Done}
      //onSkip og OnDone navigere hen til loginsiden, når brugeren enten trykker "skip" eller "Done" knappen i vores onBoarding pages
      //Mulig at skifte "navigate" til "replace" så brugeren ikke kan gå tilbage til onboarding efterfølgende
      onSkip={() => navigation.navigate("Login")}
      onDone={() => navigation.navigate("Login")}
      pages={[
        {
          backgroundColor: "#fbe9c3",
          image: <Image source={require("../assets/onboarding-img1.png")} />,
          title: "Velkommen til Storage Shift",
          subtitle: "",
        },
        {
          backgroundColor: "#c7a87c",
          image: <Image source={require("../assets/onboarding-img2.png")} />,
          title: "Udforsk ledige rum tæt på dig",
          subtitle: "",
        },
      ]}
    />
  );
};

export default OnboardingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
