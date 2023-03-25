/* eslint-disable react-native/no-inline-styles */
import { View } from 'react-native';
import React, { useState } from 'react';
import { ILoginState, LoginProps, loginState } from './LoginProps';
import styles from './LoginStyles';
import { Layout } from '../../Components/Layout';
import { NInput, NText } from '../../Components';
import { Button } from 'react-native-paper';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { createAccount, signInToFirebase } from '../../Helpers/FireBase';
import { validateFields } from './helpers';
import Lottie from 'lottie-react-native';
import { ShakeView, SlideView } from '../../Components/Animations';

export const Login = ({}: LoginProps) => {
  const [signIn, setSignIn] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [info, setInfo] = useState<ILoginState>(loginState);
  const onChange = (felid: string, e: string) => {
    setInfo((p) => {
      return { ...p, errorEmail: '', errorPass: '', [felid]: e };
    });
  };
  const signHandler = () => {
    if (validateFields(info, onChange)) {
      setLoading(true);
      returnFunction()(info)
        .then((e) => console.log('success', e))
        .catch(({ field, value }) => {
          field && onChange(field, value);
        })
        .finally(() => {
          setLoading(false);
        });
    }
  };
  const returnFunction = () => {
    return signIn ? createAccount : signInToFirebase;
  };
  return (
    <Layout>
      <ScrollView keyboardShouldPersistTaps={'handled'}>
        <View style={styles.container}>
          <View style={styles.header}>
            <Lottie
              source={require('../../Assets/Images/LoginAnim.json')}
              autoSize
              autoPlay
              loop={true}
              style={{ height: 250, width: 250 }}
            />
          </View>
          <View style={styles.inputCon}>
            <ShakeView error={!!info.errorEmail}>
              <NInput
                autoComplete={'email'}
                textContentType="username"
                error={!!info.errorEmail}
                label="Email "
                errorText={info.errorEmail}
                onChange={(e) => onChange('email', e)}
                value={info.email}
              />
            </ShakeView>
            <ShakeView error={!!info.errorPass}>
              <NInput
                textContentType={'password'}
                autoComplete={'password'}
                secure={true}
                error={!!info.errorPass}
                label="Password"
                errorText={info.errorPass}
                onChange={(e) => onChange('pass', e)}
                value={info.pass}
              />
            </ShakeView>

            <View style={styles.buttonCon}>
              <SlideView dependency={signIn} side={signIn ? 'left' : 'right'}>
                <Button
                  loading={loading}
                  disabled={loading}
                  onPress={signHandler}
                  buttonColor={'#367cff'}
                  mode="contained"
                  style={styles.button}
                >
                  <NText variant="H3" style={styles.text}>
                    {signIn ? 'Create account' : 'Sign In'}
                  </NText>
                </Button>

                <View style={styles.subText}>
                  <TouchableOpacity
                    style={styles.SignIn}
                    onPress={() => setSignIn(!signIn)}
                  >
                    <NText bold style={{ color: '#367cff' }}>
                      {!signIn ? 'Create account' : 'Sign In'}
                    </NText>
                  </TouchableOpacity>
                </View>
              </SlideView>
            </View>
          </View>
        </View>
      </ScrollView>
    </Layout>
  );
};
