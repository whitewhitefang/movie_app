import React, {Component} from 'react'

class SomeThing extends Component {
  onClickMe = () => console.log(this);
  render() {
    return(
      <button
      onClick = {this.onClickMe}
      type="button"
      >
        CLICK ME
      </button>
    );
  }
}

const idIfication = {
  date : new Date(),
  idNew() {
      return `${this.date.getFullYear()}${this.date.getMonth()}${this.date.getDate()}${this.date.getHours()}${this.date.getMinutes()}${this.date.getSeconds()}`;
  },
};

const list = [
  {
    id: idIfication.idNew() + 1,
    title: 'Video in Instagram',
    url: 'https://archive.org/download/BigBuckBunny_124/Content/big_buck_bunny_720p_surround.mp4',
    tags: '',
    description: 'Снова снег, зима агонизирует, хочется весны,тепла,молодой зелени,когда листочки только появляются, а тут плач царевны',
    poster: 'https://peach.blender.org/wp-content/uploads/title_anouncement.jpg?x11217',
    rate: 4.5,
  },
  {
    id: idIfication.idNew() + 2,
    title: 'Video in VK',
    url: 'https://archive.org/download/BigBuckBunny_124/Content/big_buck_bunny_720p_surround.mp4',
    tags: '',
    description: '"Ключи Твери": история бывшей казенной палаты. В новом выпуске программы экскурсовод Вероника Эстер рассказала о здании бывшего губернского правления и казённой палаты. На Советской оно появилось в 18 веке по проекту архитектора Федора Штенгеля.',
    poster: 'https://peach.blender.org/wp-content/uploads/title_anouncement.jpg?x11217',
    rate: 4.7,
  },
  {
    id: idIfication.idNew() + 3,
    title: 'Video in Youtube',
    url: "https://archive.org/download/BigBuckBunny_124/Content/big_buck_bunny_720p_surround.mp4",
    tags: '',
    description: 'Раньше я покупал краны от фильтра для воды, когда они начинали течь, но потом узнал способ как их починить. Делюсь  с вами друзья!',
    poster: 'https://peach.blender.org/wp-content/uploads/title_anouncement.jpg?x11217',
    rate: 3.9,
  },
  {
    id: idIfication.idNew() + 4,
    title: 'Video on Facebook',
    url: './MOV.mp4',
    tags: '',
    description: 'Сегодня в рубрике #ПредупреждёнЗначитВооружён продолжаем разговор о телефонных мошенничествах. Несмотря на регулярную профилактическую работу, граждане продолжают доверять неизвестным лицам и непроверенной информации. Так, на этой неделе внимание инспектора отдела по делам несовершеннолетних ОМВД России по Ярославскому району Екатерины Шараповой привлекла женщина, которая находилась у банкомата и разговаривала по телефону, намереваясь перевести денежные средства.',
    poster: './poster.jpg',
    rate: 4.9,
  },
];

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {date: new Date()};
  }
  tick() {
    this.setState({
      date: new Date()
    });
  }
  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }
  componentWillUnmount() {
    clearInterval(this.timerID);
  }
  render() {
    return (
      <div>
        <h2>ВИДЕОНОВОСТИ ДНЯ, сегодня {this.state.date.toLocaleString()}</h2>
      </div>
    );
  }
}

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
              <video src={item.url} poster={item.poster} width="300px" controls></video>
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
  return(
    <div>
      <Clock />
      <div>
        <ShowVideo />
      </div>
      <SomeThing />
    </div>
  );
}

export default App;