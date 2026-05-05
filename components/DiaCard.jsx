import { View, Text, StyleSheet } from 'react-native';

// função local de formatação (RF-002 reaproveitado)
const formatarData = (dataISO) => {
  const [ano, mes, dia] = dataISO.split('-');
  return `${dia}/${mes}`;
};

export default function DiaCard({ data, jogos }) {

  return (
    <View style={styles.card}>

      {/* DATA */}
      <Text style={styles.data}>
        {formatarData(data)}
      </Text>

      {/* LISTA DE JOGOS */}
      {jogos.map((jogo, index) => (
        <View key={index} style={styles.jogo}>

          <View style={styles.linhaPrincipal}>

            <Text style={styles.time}>{jogo.time_casa}</Text>

            <Text style={styles.hora}>20:00</Text>

            <Text style={styles.time}>{jogo.time_fora}</Text>

          </View>

        </View>
      ))}

    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    marginTop: 20,
    backgroundColor: '#0c1b2a',
    width: 320,
    borderRadius: 12,
    padding: 15,
  },

  data: {
    color: '#f2cc2f',
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10
  },

  jogo: {
    marginBottom: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#1e2d3d',
    paddingBottom: 10
  },

  linhaPrincipal: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  time: {
    color: 'white',
    fontWeight: 'bold'
  },

  hora: {
    color: 'white'
  }
});