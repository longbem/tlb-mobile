import { StyleSheet, Dimensions } from 'react-native';
import { Colors } from '@config';

const { width } = Dimensions.get('screen');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.darkTurquoise,
  },
  ltbOnline: {
    padding: 20,
    fontSize: 20,
    fontWeight: 'bold',
    color: Colors.background,
    lineHeight: 24,
  },
  containerUser: {
    backgroundColor: Colors.darkTurquoise,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 50,
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,
  },
  boxImage: {
    borderWidth: 2,
    borderColor: Colors.background,
    width: 70,
    height: 70,
    borderRadius: 40,
    marginRight: '5%',
  },
  name: {
    fontWeight: 'bold',
    fontSize: 20,
    lineHeight: 22,
    color: Colors.background,
    marginBottom: 7,
  },
  code: {
    fontWeight: 'bold',
    fontSize: 17,
    lineHeight: 20,
    color: Colors.background,
  },
  box: {
    width: width * 0.75,
    height: 50,
    backgroundColor: Colors.antiqueWhite,
    top: -25,
    marginHorizontal: 20,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: Colors.sandyBrown,
    borderWidth: 1,
  },
  date: {
    fontSize: 17,
    fontWeight: 'bold',
    lineHeight: 20,
  },
  scrollView: { backgroundColor: '#FFFF' },
});

export default styles;
