
import React, {useState} from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import CustomSwitch from './CustomSwitch';




interface OptionsModel {
  title: string;
  notificationType:string
  image1: any;
  backgroundColor?: string;
  content:string[];
}

const OptionsList: React.FC<OptionsModel> = ({ title, notificationType, image1, backgroundColor = 'green', content}) => {

  const [isOn, setIsOn] = useState(false);

  const handleToggle = () => {
    setIsOn((prevState) => !prevState);
  };

// Function to toggle the switch
const handleSwitchChange = (newValue: any) => {
  console.log('Switch value:', newValue);
};
  return (
    <View style={[styles.listBG, { backgroundColor }]}>
        
      <View style={styles.container}>
        <View style={styles.roundedView}>
        <Image source={image1} style={styles.image} />
        </View>
        <Text style={styles.title}>{title}</Text>
      </View>
      
      <View style={styles.listContainerOne}>
        <Text style={styles.label}>{notificationType}</Text>
        <CustomSwitch isOn={isOn} onToggle={handleToggle} />
      </View>

      <View style={styles.listContainerHori}>
        
      {content.map((content:string, index:number) => (
        <View>
          <View style={styles.listContainer}>
            <View style={{flexDirection:'row', alignContent:'center',alignItems:'center'}}>
            <Image source={require("../assets/images/bell.png")} style={styles.subImage} />
            <Text style={styles.label}>{content}</Text>
            </View>
            <CustomSwitch isOn={isOn} onToggle={handleToggle} /> 
          </View>
          {index !== (content.length-1) && <View style={styles.line}></View>}
        </View>
      ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
    listBG: {
      backgroundColor: 'white',
      borderRadius: 5,
      paddingTop: 10, 
      paddingBottom: 10,
      paddingLeft:10,
      margin: 5,
      marginStart:-10,
      marginEnd:-10,
      elevation: 3,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
    },
    row: {
      flexDirection: 'row', // Align items horizontally
      alignItems:'flex-start', // Center items vertically
      justifyContent: 'space-between', // Space between items
    },
    image: {
      width: 20,
      height: 20,
      borderRadius: 5, // Make the images circular
      justifyContent:'center',
      alignItems:'center',
    },
    title: {
      flex: 1, // Take up remaining space between the images
      fontSize: 16,
      alignItems:'center',
      marginTop:4
    },

    container: {
        flex: 1, // Take up remaining space between the images
        alignItems:'center',
      },

    listContainer: {
      flexDirection: 'row', // Align items horizontally
      backgroundColor: 'clear',
      height:45,
      alignContent:'center',
      justifyContent:'space-between',
      alignItems:'center',
    },
    label: {
      fontSize: 15,
      paddingTop: 10, 
      paddingBottom: 10,
      paddingLeft:10,
    },

    listContainerHori: {
      borderRadius: 5,
      backgroundColor: '#F2F2F7',
      padding:5,
    },

    listContainerOne: {
      flexDirection: 'row', // Align items horizontally
      borderRadius: 5,
      backgroundColor: '#DAE9CD',
      height:40,
      alignContent:'center',
      justifyContent:'space-between',
      alignItems:'center',
      margin:5
    },

    subImage: {
      width: 20,
      height: 20,
      borderRadius: 5, // Make the images circular
      justifyContent:'center',
      alignItems:'center',
    },

    line: {
      flexDirection: 'row', // Align items horizontally
      backgroundColor: 'grey',
      height: 1,
      marginLeft:5,
      marginRight:5,
    },
    roundedView: {
      width: 50,
      height: 50,
      backgroundColor: '#6C5DD34D',
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 30, // Round the corners
    },

  });

export default OptionsList;