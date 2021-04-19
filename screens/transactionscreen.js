import React from 'react'
import {Text,TouchableOpacity,View,StyleSheet} from 'react-native'
import * as Permissions from 'expo-permissions'
import {BarCodeScanner} from 'expo-barcode-scanner'
export default class Transactionscreen extends React.Component {
    constructor(){
        super()
    this.state={
        hascamerapermissions:null,
        scanned:false,
        scandata:'',
        buttonState:'normal'
    }
    }
    getcamerapermissions = async()=>{
        const {status} = await Permissions.askAsync(Permissions.CAMERA)
        this.setState({
            hascamerapermissions:status=='granted',
            buttonState:'clicked',
            scanned:false
        })
    }
    handlebarcodescanned=async({type,data})=>{
        this.setState({
            scanned:true,
            scandata:data,
            buttonState:'normal'
        })
    }
    render(){
        const hascamerapermissions=this.state.hascamerapermissions
        const scanned=this.state.scanned
        const buttonState=this.state.buttonState
        if(buttonState=='clicked'&&hascamerapermissions){
        return(
        <BarCodeScanner onBarCodeScanned={scanned?undefined:this.handlebarcodescanned}
        style={StyleSheet.absoluteFillObject}/>

        )  
        }
        else if(buttonState=='normal'){
        return(
            <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                <Text style={Styles.displayText}>{hascamerapermissions==true?this.state.scanneddata:'requestcamerapermissions'}</Text>
                <TouchableOpacity style={Styles.scanButton}onPress={this.getcamerapermissions}><Text style={Styles.displayText}>Scan QR Code</Text></TouchableOpacity>
                </View>
        )
    }
}}
const Styles = StyleSheet.create({
    container:{flex:1,justifyContent:'center', alignItems:'center'},
    displayText:{fontSize:17,textDecorationLine:'underline', color:'white'},
    scanButton:{backgroundColor:'black',padding:11,margin:11}
})