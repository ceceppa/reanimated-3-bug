import React from 'react';
import {
  Modal,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  useColorScheme,
} from 'react-native';
import Animated, { withTiming } from 'react-native-reanimated';

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  const [isModalVisible, setIsModalVisible] = React.useState(false)
  const [isContentVisible, setIsContentVisible] = React.useState(false)

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };


  const entering1 = (targetValues) => {
    'worklet';
    const animations = {
      opacity: withTiming(1, { duration: 300 }),
    };
    const initialValues = {
      opacity: 0,
    };

    return {
      initialValues,
      animations,
    };
  };

  const entering2 = (targetValues) => {
    'worklet';
    const animations = {
      transform: [{ translateY: withTiming(0, { duration: 300 }) }],
    };
    const initialValues = {
      transform: [{ translateY: 300 }],
    };

    return {
      initialValues,
      animations,
    };
  };


  const exiting1 = (targetValues) => {
    'worklet';
    const animations = {
      opacity: withTiming(0, { duration: 300 }),
    };
    const initialValues = {
      opacity: 1,
    };

    return {
      initialValues,
      animations,
    };
  };

  const exiting2 = (targetValues) => {
    'worklet';
    const animations = {
      transform: [{ translateY: withTiming(300, { duration: 300 }) }],
    };
    const initialValues = {
      transform: [{ translateY: 0 }],
    };

    return {
      initialValues,
      animations,
    };
  };


  const showModal = () => {
    setIsContentVisible(true);
    setIsModalVisible(true);
  }

  const hideModal = () => {
    setIsContentVisible(false);

    setTimeout(() => {
      setIsModalVisible(false);
    }, 301)
  }

  return (
    <SafeAreaView style={backgroundStyle}>
      <Pressable onPress={showModal} style={styles.button}><Text>Open Modal</Text></Pressable>
      <Modal
        visible={isModalVisible}
      >
        {isContentVisible ? (
          <Animated.View
            style={styles.modal}
            entering={entering1}
            exiting={exiting1}
          >
            <Animated.View
              entering={entering2}
              exiting={exiting2}
            >
              <Text style={{ height: 200 }}>Example content</Text>
              <Pressable onPress={hideModal} style={styles.button}><Text>Close Modal</Text></Pressable>
            </Animated.View>
          </Animated.View>
        ) : null}
      </Modal>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  button: {
    padding: 24,
    borderColor: '#000',
    backgroundColor: '#fff',
    borderWidth: 1
  },
  modal: {
    backgroundColor: '#c9c9c9',
    width: 500,
    height: 300,
  }
});

export default App;
