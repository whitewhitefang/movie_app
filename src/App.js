import React, {Component} from 'react'

const mainHead = `ВИДЕОНОВОСТИ ДНЯ, сегодня ${new Date().toLocaleString()}`;

const list = [
  {
    id: 1,
    title: 'Video in Instagram',
    url: './MOV.mp4',
    tags: '',
    description: 'Снова снег, зима агонизирует, хочется весны,тепла,молодой зелени,когда листочки только появляются, а тут плач царевны',
  },
  {
    id: 2,
    title: 'Video in VK',
    url: './MOV.mp4',
    tags: '',
    description: '"Ключи Твери": история бывшей казенной палаты. В новом выпуске программы экскурсовод Вероника Эстер рассказала о здании бывшего губернского правления и казённой палаты. На Советской оно появилось в 18 веке по проекту архитектора Федора Штенгеля.',
  },
  {
    id: 3,
    title: 'Video in Youtube',
    url: './MOV.mp4',
    tags: '',
    description: 'Раньше я покупал краны от фильтра для воды, когда они начинали течь, но потом узнал способ как их починить. Делюсь  с вами друзья!',
  },
  {
    id: 4,
    title: 'Video on Facebook',
    url: './MOV.mp4',
    tags: '',
    description: 'Сегодня в рубрике #ПредупреждёнЗначитВооружён продолжаем разговор о телефонных мошенничествах. Несмотря на регулярную профилактическую работу, граждане продолжают доверять неизвестным лицам и непроверенной информации. Так, на этой неделе внимание инспектора отдела по делам несовершеннолетних ОМВД России по Ярославскому району Екатерины Шараповой привлекла женщина, которая находилась у банкомата и разговаривала по телефону, намереваясь перевести денежные средства.',
  },
];

class ShowVideo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list,
    };
  }
  render() {
    return (
      <div className="App">
        {this.state.list.map((item) => 
          <div key={item.id}>
            <h2>{item.title}</h2>
            <div>
              <video src={item.url}></video>
            </div>
            <p>{item.description}</p>
            <p>{item.tags}</p>
          </div>
        )}
      </div>
    );
  }
}

function App() {
  return(<div>
      <h1>{mainHead}</h1>
      <div>
        <ShowVideo />
      </div>
    </div>
  );
}

export default App;