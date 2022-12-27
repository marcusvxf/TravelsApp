import EStyleSheet from 'react-native-extended-stylesheet';

EStyleSheet.build();
export const HomeCardStyle = EStyleSheet.create({
  wrapper: {
    paddingLeft: '5%',
    paddingTop: '5%',
    paddingRight: '5%',
    width: '90%',
    borderRadius: '2rem',
    elevation: 15,
    height: '8.9rem',
    marginTop: '1.3rem',
    shadowColor: '#00000040',
  },
  title: {
    color: '#FF9F2E',
    marginBottom: '3%',
  },
});
