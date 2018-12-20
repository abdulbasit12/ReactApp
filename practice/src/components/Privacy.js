import React from 'react';
import { StyleSheet, Text, View, TextInput, Picker } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

class Privacy extends React.Component {
  render() {

    const {container, heading, privacyText} = styles;

    return (
        <View style={container}>
            <ScrollView style={{width:'100%'}}>
                <Text style={heading}>Privacy Policy</Text>
                <Text style={privacyText}>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </Text>
            </ScrollView>
        </View>
    );
  }
}
  
const styles = StyleSheet.create({
    container: {flex: 1, backgroundColor: '#fff', alignItems: 'center', justifyContent: 'flex-start', paddingVertical:30, paddingHorizontal:20},
    heading: {fontSize:25,},
    privacyText: {fontSize:16, lineHeight:30}
});

export default Privacy;