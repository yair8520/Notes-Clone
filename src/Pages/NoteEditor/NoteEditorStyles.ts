import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  mainCon: { flex: 1 },
  container: {
    display: 'flex',
    backgroundColor: 'white',
    height: '90%',
    alignItems: 'center',
    paddingBottom: 50,
  },
  title: {
    width: '90%',
  },
  toolbar: {},
  bodyInput: { maxHeight: 250 },
  content: {
    width: '100%',
    backgroundColor: 'white',
    flexGrow: 1,
  },
  richTextEditorStyle: {
    backgroundColor: '#c6c3b3',
    borderColor: '#c6c3b3',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderWidth: 1,
    borderRadius: 8,
    width: '100%',
  },
  editorTouch: {
    width: '100%',
  },
  imgContainer: {
    backgroundColor: 'white',

    borderWidth: 1,
    borderRadius: 8,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    textAlignVertical: 'top',
    width: '90%',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  drawImg: { height: 250, width: 250 },
  signimg: { height: 100, width: 100 },
  label: {
    marginTop: 25,
    paddingLeft: '5%',
    alignSelf: 'flex-start',
  },
});
