import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    width: '100%',
  },
  content: {
    borderWidth: 1,
    borderRadius: 999,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    backgroundColor: '#FCFCFF',
    borderColor: '#DDDDEE',
    height: 56,
  },

  input: {
    flex: 1,
    height: '100%',
    color: '#14142C',
    paddingHorizontal: 24,
  },
  inputWithLeft: {
    paddingLeft: 12,
  },
  inputWithRight: {
    paddingRight: 12,
  },

  errorText: {
    marginTop: 3,
    color: '#EC796B',
  },
});
