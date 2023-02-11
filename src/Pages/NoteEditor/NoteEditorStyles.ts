import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  mainCon: { flex: 1 },
  container: {
    display: 'flex',
    height: '100%',
    alignItems: 'center',
  },
  title: {
    marginTop: 25,
    width: '90%',
  },
  loading: {
    flex: 1,
    alignItems: 'center',
  },
  bodyInput: { maxHeight: 250 },
  content: {
    width: '100%',
    backgroundColor: 'white',
    flexGrow: 1,
  },
  richTextEditorStyle: {
    width: '100%',
    height: '100%',
  },
  editorTouch: {
    width: '90%',
    alignItems: 'center',
  },
  imgContainer: {
    backgroundColor: 'white',
    borderWidth: 5,
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
    marginBottom: 25,
    paddingLeft: '5%',
    alignSelf: 'flex-start',
  },
});
