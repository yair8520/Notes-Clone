import React, { useState } from 'react';
import { NInputProps } from './NInputProps';
import styles from './NInputStyles';
import { HelperText, TextInput } from 'react-native-paper';
import { pasteOption } from '../FloatingButton/helpers';
export const NInput = ({
  onChange,
  value,
  style,
  errorText,
  error,
  icon,
  secure = false,
  ...rest
}: NInputProps) => {
  const [secureInput, setSecureInput] = useState<boolean>(secure);
  return (
    <>
      <TextInput
        {...rest}
        error={error}
        style={[styles.input, style]}
        mode="outlined"
        outlineColor="#2fa7f8"
        cursorColor="#2fa7f8"
        activeOutlineColor="#2fa7f8"
        placeholderTextColor="#2fa7f8"
        outlineStyle={styles.outline}
        onChangeText={onChange}
        value={value}
        secureTextEntry={secureInput}
        right={
          icon ? (
            <TextInput.Icon
              iconColor={'#2fa7f8'}
              icon={icon}
              onPress={async () => onChange(await pasteOption())}
            />
          ) : (
            secure && (
              <TextInput.Icon
                iconColor={'#2fa7f8'}
                icon={'eye'}
                onPress={async () => setSecureInput(!secureInput)}
              />
            )
          )
        }
      />
      <HelperText type="error" style={styles.errText} visible={error}>
        {errorText}
      </HelperText>
    </>
  );
};
