import { StyleSheet, Text, View, Image, TouchableOpacity, FlatList} from 'react-native';
import {useState} from 'react'
import Lista from './components/Lista'

export default function App() {

const [feedInsta, setFeedInsta] = useState([
  {
    id: '1', 
    nome: 'Lucas Silva', 
    descricao: 'Mais um dia de muitos bugs :)', 
    imgperfil: 'https://sujeitoprogramador.com/instareact/fotoPerfil1.png', 
    imgPublicacao: 'https://sujeitoprogramador.com/instareact/foto1.png',  
    likeada: true, 
    likers: 1
   },
  {
    id: '2', 
    nome: 'Matheus', 
    descricao: 'Isso sim é ser raiz!!!!!', 
    imgperfil: 'https://sujeitoprogramador.com/instareact/fotoPerfil2.png', 
    imgPublicacao: 'https://sujeitoprogramador.com/instareact/foto2.png', 
    likeada: false, 
    likers: 0
  },
  {
    id: '3', 
    nome: 'Jose Augusto', 
    descricao: 'Bora trabalhar Haha', 
    imgperfil: 'https://sujeitoprogramador.com/instareact/fotoPerfil3.png', 
    imgPublicacao: 'https://sujeitoprogramador.com/instareact/foto3.png',  
    likeada: false, 
    likers: 3
  },
  {
    id: '4', 
    nome: 'Gustavo Henrique', 
    descricao: 'Isso sim que é TI!', 
    imgperfil: 'https://sujeitoprogramador.com/instareact/fotoPerfil1.png', 
    imgPublicacao: 'https://sujeitoprogramador.com/instareact/foto4.png', 
    likeada: false, 
    likers: 1
  },
  {
    id: '5', 
    nome: 'Guilherme', 
    descricao: 'Boa tarde galera do insta...', 
    imgperfil: 'https://sujeitoprogramador.com/instareact/fotoPerfil2.png', 
    imgPublicacao: 'https://sujeitoprogramador.com/instareact/foto5.png',
    likeada: false, 
    likers: 32
  }
])




  return (
    <View style={styles.container}>

      <View style={styles.header}>
        <TouchableOpacity>
         <Image
          source={require('./assets/img/logo.png')}
          
         />
         </TouchableOpacity>

       <TouchableOpacity>
         <Image 
         source={require('./assets/img/send.png')}
         style={{width: 30, height: 30}}
         /> 
       </TouchableOpacity>
      </View>

      <View style={{flex: 1}}>
        <FlatList
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.id}
        data={feedInsta}
        renderItem={({item}) => <Lista data={item}/>}
        />
      </View>
      
    </View>
       

  );
}

const styles = StyleSheet.create({
  
  container:{
       flex: 1,
       backgroundColor: '#fff'
  },

  header:{
      flexDirection: 'row',
      height: 65,
      justifyContent: 'space-between',
      alignItems: 'center',
      backgroundColor: '#fff',
      padding: 7,
      marginTop: 35,
      borderBottomWidth: 0.2,
      shadowColor: '#000',
      elevation: 1
      
   }
})