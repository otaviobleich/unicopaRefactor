import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import dados from './assets/dados.json';
import DiaCard from './components/DiaCard';

export default function App() {

  const jogos = dados.jogos;

  
  const agrupapordata = (jogos) => {
    const agrupado = jogos.reduce((acc, jogo) => {
      const data = jogo.data_brasilia;

      if (!acc[data]) {
        acc[data] = [];
      }

      acc[data].push(jogo);
      return acc;
    }, {});

    
    Object.keys(agrupado).forEach((data) => {
      agrupado[data].sort((a, b) =>
        a.hora_brasilia.localeCompare(b.hora_brasilia)
      );
    });

    return agrupado;
  };

  const jogosAgrupados = agrupapordata(jogos);

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scroll}>
        <Image
          style={styles.logo}
          source={require('./assets/unicopa.png')}
        />
        <Text style={styles.title}>CALENDÁRIO</Text>
        {Object.entries(jogosAgrupados).map(([data, jogosDoDia]) => (
          <DiaCard key={data} data={data} jogos={jogosDoDia} />
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  scroll: {
    alignItems: 'center',
    paddingBottom: 40,
  },
  logo: {
    marginTop: 20,
    width: 200,
    height: 50,
    resizeMode: 'contain'
  },
  title: {
    marginTop: 10,
    fontSize: 28,
    fontWeight: '700',
    color: 'white',
  },
});