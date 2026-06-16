import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fcfcfc',
  },
  navBar: {
    flexDirection: 'column',
    gap: 50,
    backgroundColor: '#7308bb',
    height: 200,
  },
  photoPerfil: {
    borderRadius: 30,
    width: 50,
    height: 50,
    marginLeft: 15
  },
  welcomeText: {
    width: 200,
    height: 200,
    color: '#ffffff',
    marginLeft: 25,
    fontSize: 20,
  },
  images: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 15,
    marginTop: 50,
  },
  navIcon: {
    gap: 8,
    flexDirection: 'row',
  },
  searchContainer: {
    paddingHorizontal: 20,
    marginTop: 20,
    marginBottom: 5,
  },
  searchInput: {
    width:150,
    backgroundColor: '#fffafa',
    borderRadius: 25,
    height: 45,
    paddingHorizontal: 20,
    fontSize: 16,
    color: '#000000',
  },
  eyeIcon: {
    borderRadius: 30,
    width: 35,
    height: 35,
    tintColor: '#ffffff',
  },
  infoConta: {
    flexDirection: 'column',
    textAlign: 'left',
    marginLeft: 25,
    marginTop: 30,
  },
  txtAccount: {
    color: '#000000',
    fontSize: 18,
    fontWeight: "bold",
  },
  accountValue: {
    fontSize: 20,
    fontWeight: "bold",
  },
  txtIconContainer: {
    justifyContent: 'space-between',
    flexDirection: 'row'
  },
  setaIcon: {
    width: 15,
    height: 15,
    marginRight: 20,
    marginTop: 10,
    tintColor: '#000000',
  },
  buttonsDiv: {
    marginTop: 20,
  },
  buttons: {
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
  },
  buttonsIcons: {
    alignItems: 'center',
    width: 80,
    gap: 15
  },
  buttonNav: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50,
    width: 70,
    height: 70,
    backgroundColor: '#928d8d49',
  },
  pagarButton: {
    marginBottom: 13,
    gap: 20
  },
  imgIcon: {
    width: 47,
    height: 47,
    tintColor: '#000000',

  }, pagarIcon: {
    width: 20,
    height: 17,
    tintColor: '#000000',
  },
  buttonTxt: {
    flexWrap: 'wrap',
    flexDirection: 'row',
    textAlign: 'center',
    fontWeight: 'bold'
  },
  cardDiv: {
    backgroundColor: '#928d8d49',
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 15,
    height: 55,
    width: 350,
    marginLeft: 20,
    marginTop: 20,
  },
  cardTxt: {
    fontSize: 16,
    fontWeight: '500'
  }, imgCard: {
    height: 55,
    width: 50,
    tintColor: '#000000',
  },
  line: {
    backgroundColor: '#928d8d49',
    height: 2,
    opacity: 0.6,
    marginTop: 20
  },
  infoCard: {
    flexDirection: 'column',
    textAlign: 'left',
    marginBottom: 50,
    gap: 10
  },
  txtIconContainer2: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginTop: 10
  },
  txtCard: {
    color: '#000000',
    fontSize: 22,
    fontWeight: "bold",
    marginLeft: 25,
    marginTop: 5,
  },
  cardInfo: {
    fontSize: 14,
    marginLeft: 25,
    color : '#6b6868f1',
  },
  cardValue: {
    fontSize: 30,
    fontWeight: "bold",
    marginLeft: 25,
  },
});