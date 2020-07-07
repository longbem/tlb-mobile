import { StyleSheet } from 'react-native';
import { Colors } from '@config';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  ltbOnline: {
    padding: 20,
    fontSize: 20,
    fontWeight: 'bold',
    color: Colors.background,
    lineHeight: 24,
  },
});

export default styles;
