import React, {useState} from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, FlatList} from 'react-native';


export default function Lista(props) {

  const {data} = props
  const [feed, setFeed] = useState(data)
 
function onPressHeart(){
    if(feed.likeada === true){
        setFeed({
            ...feed,
            likeada: false,
            likers: feed.likers - 1
        })
        
    } else{
        setFeed({
            ...feed,
            likeada: true,
            likers: feed.likers + 1
        })
    }
}

function likesVisible(){
    let feedz = feed

    if(feedz.likers <= 0){
        return
    }

    return(
        <Text style={{fontSize: 18, marginLeft: 10, marginBottom: 5}}>
          {feed.likers} {feed.likers > 1 ? 'curtidas' : 'curtida'}
          </Text>
    )
}

function onHeart(likeada){
    return likeada ? require('../assets/img/likeada.png') : require('../assets/img/like.png')
}

 return (
   <View>
        <View style={styles.containerPerfil}>
           <Image 
           source={{uri: feed.imgperfil}}
           style={styles.imgPerfil}
           />

           <Text style={{fontSize:20, textAlign: 'left', marginLeft: 15}}>{feed.nome}</Text>
       </View>

       <View>
           <Image
           source={{uri: feed.imgPublicacao}}
           style={styles.publi}
           resizeMode='cover'
           />
       </View>

       <View style={styles.likeando}>    

       <TouchableOpacity onPress={onPressHeart}>
           <Image
           source={onHeart(feed.likeada)}
           style={{width: 30, height: 30, marginRight: 10}}
           />
        </TouchableOpacity>
           <Image
           source={require('../assets/img/send.png')}
           style={{width: 30, height: 30}}
           
           />
       </View>

   <View>
      {likesVisible()}
   </View>
      
       <View style={{flexDirection: 'row', alignItems: 'center', marginLeft: 10, marginBottom: 20}}>
          <Text style={{fontSize: 18, fontWeight: 'bold', marginRight: 10}}>{feed.nome}</Text>
          <Text style={{fontSize: 18}}>{feed.descricao}</Text>
      </View>
   </View>
 );
}

const styles = StyleSheet.create({
    
    containerPerfil:{
       flexDirection: 'row',
       alignItems: 'center',
       margin: 10,
      
    },

    imgPerfil:{
        width: 50,
        height: 50,
        borderRadius: 25,
    },
 
    publi:{
        height: 400,
        flex: 1
    },
    likeando:{
        flexDirection: 'row',
        margin: 7
    }
})