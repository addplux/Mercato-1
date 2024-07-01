import React from 'react';
import { NavigationContainer } from "@react-navigation/native";


import LoginScreen from './auth/LoginScreen';
import  AsyncStorage from '@react-native-async-storage/async-storage';

const AppStack = createStackNavgator();

const App = () => {
  const [isFirstLaunch, SetIsFisrtLaunch] = React.useState(null);
  
  useEffect(() => {
    AsyncStorage.getItem('alreadyLaunched').then(value => {
      if(value == null){
        AsyncStorage.setItem('alreadyLaunched','true');
        setIsFirstLaunched(true);
      } else{
        setIsFirstLaunch(false);
      }
    });
  }), [];

  if( isFirstLaunch == null ) {
    return null;
  }else if ( isFirstLaunch == true ) {
    return (
      <NavigationContainer>
        <AppStack.Navigator
        headerMode="none"
        >
          <AppStack.Screen name="onboarding" component={onboardingscreen}/>
        <AppStack.Screeb name="Login" component={LoginScreen}/>
       </AppStack.Navigator>
       </NavigationContainer>
    ); 
  } else {
    return <LoginScreen/>
  }
}

export default App;