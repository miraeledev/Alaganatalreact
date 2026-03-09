import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native-web';

export default function App() {

    const [contador, setContador] = useState(0);


    function incrementar() {
        setContador(contador + 1)
    }
    function Decrementar() {
        if (contador > 0) {
            setContador(contador - 1)
        }
    }
    function zerar() {
        setContador(0)
    }
    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>Contador</Text>
            <Text>{contador}</Text>
            <View style={styles.botoes}>
                <Button
                    title="Incrementar"
                    onPress={incrementar}
                />
                <Button
                    title="Decrementar"
                    onPress={Decrementar}
                />
            </View>
            <Button
                title="Zerar Contador"
                onPress={zerar}
            />
            <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 5,
    },
    botoes: {
        flexDirection: 'row',
        gap: 5,
    },

    texto: {
        color: '#fff',
    },
});