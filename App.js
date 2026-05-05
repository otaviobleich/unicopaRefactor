import { StyleSheet, Text, View, Image, ImageBackground, ScrollView } from 'react-native';
import dados from './assets/dados.json';
import DiaCard from './components/DiaCard';

export default function App() {

  const jogos = dados.jogos;

  // 🔹 Agrupar por data (AGORA VAI SER USADO)
  const agrupapordata = (jogos) => {
    return jogos.reduce((acc, jogo) => {
      const data = jogo.data_brasilia;

      if (!acc[data]) {
        acc[data] = [];
      }

      acc[data].push(jogo);
      return acc;
    }, {});
  };

  const jogosAgrupados = agrupapordata(jogos);

  return (
    <ImageBackground style={styles.container}
      source={require('./assets/bg-overlay.png')}>

      <Image style={styles.logo}
        source={require('./assets/unicopa.png')}
      />

      <Text style={styles.title}>CALENDÁRIO</Text>

      <ScrollView>
        {Object.entries(jogosAgrupados).map(([data, jogosDoDia]) => (
          <DiaCard key={data} data={data} jogos={jogosDoDia} />
        ))}
      </ScrollView>

    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
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
  }
});