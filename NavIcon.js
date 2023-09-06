import React from 'react';
import {
    View,
    TouchableOpacity,
    StyleSheet,
    Animated,
} from 'react-native';
import { p } from "./p";
import { Feather as Icon } from '@expo/vector-icons';

const duration = 300;

const NavIcon = ({active, refs, leftAnim, i, icon, setActive, setRefs }) => {

    const [color, setColor] = React.useState("#000");

    let isActive = () => i == active;

    let topAnim = React.useRef(new Animated.Value(0)).current;

    let onClick = () => {
      refs[i].measure((fx, fy, width, height, px, py) => {
        Animated.timing(
          leftAnim,
          {
            toValue: px + p,
            duration,
            useNativeDriver: true,
          }
        ).start();
      });
      setActive(i);
    }

    React.useEffect(() => {
      if(isActive()){
        setTimeout(() => {
          setColor("#fff");
        }, duration)
      }else setColor("#000")
    }, [active])

    React.useEffect(() => {
      let toValue = 0;
      if(isActive()){
       toValue = -20;
      }
      Animated.timing(
        topAnim,
        {
          toValue,
          duration,
          useNativeDriver: true,
        }
      ).start();
    }, [active]);

    return(
      <TouchableOpacity 
        key={i} 
        onPress={onClick} 
        ref={view => { refs.push(view); }}
      >
        <Animated.View
          style={[
            styles.icon, 
            { 
              ...styles.active,
              transform:  [{translateY: topAnim}]
            }
          ]}
        >
          <View
          >
            <Icon name={icon.icon} size={25} color={color} />
          </View>
        </Animated.View>
      </TouchableOpacity>
    )
  }

  const styles = StyleSheet.create({
    icon: {
      alignItems: "center",
      width: 50,
      height: 50,
      justifyContent: "center",
    },
    active: {
      borderRadius: 50,
    }
  });

  export default NavIcon;