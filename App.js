import React from 'react';
import {
  View,
  StyleSheet,
  Animated,
  SafeAreaView,
  StatusBar,
} from 'react-native';
import NavIcon from './NavIcon';

const icons = [
  {
    icon: "home",
    title: "Home"
  },
  {
    icon: "search",
    title: "Cart"
  },
  {
    icon: "shopping-bag",
    title: "Cart"
  },
  {
    icon: "user",
    title: "Profile"
  },
  {
    icon: "settings",
    title: "Settings"
  },
];

export let p = 0;

const App = () => {

  const [active, setActive] = React.useState(0);

  const [refs, setRefs] = React.useState([]);

  let leftAnim = React.useRef(new Animated.Value(9.904762268066406 + p)).current;

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar 
        backgroundColor="#f0f0f0"
        barStyle="dark-content"
      />
      <View style={styles.nav}>
        <Animated.View
          style={[
            styles.activeIndicator, 
            {     
              transform:  [{translateX: leftAnim}],        
            }
          ]}
        >
        </Animated.View>
        {
          icons.map((icon, i) => <NavIcon key={i}
            active={active}
            refs={refs}
            leftAnim={leftAnim}
            i={i}
            icon={icon}
            setActive={setActive}
            setRefs={setRefs}
          />)
        }
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end",
    backgroundColor: "#f0f0f0",
  },
  nav: {
    flexDirection: "row",
    backgroundColor: "#fff",
    justifyContent: "space-between",
    paddingHorizontal: 10,
  },
  activeIndicator: { 
    backgroundColor: "#FF0000", 
    borderRadius: 50, 
    padding: 10, 
    position: "absolute", 
    width: 50,
    height: 50,
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowRadius: 15,
    shadowColor: "#bbb",
    shadowOpacity: 0.7,
    top: -20,
  },
});

export default App;
